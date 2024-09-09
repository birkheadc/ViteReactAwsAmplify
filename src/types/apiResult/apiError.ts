import utils from "../../utils";

export class ApiError {
  errorCode?: string;
  status: number = 0;
  validationErrors: Record<string, string> = {};

  constructor(status?: number) {
    this.status = status ?? 0;
    this.validationErrors = {};
  }

  static fromJson(json: unknown): ApiError {
    if (json == null) return ApiError.UNEXPECTED_FORMAT;
    if (typeof json !== "object") return ApiError.UNEXPECTED_FORMAT;
    if (!("problemDetails" in json)) return ApiError.UNEXPECTED_FORMAT;

    const problemDetails = json.problemDetails;

    if (problemDetails == null) return ApiError.UNEXPECTED_FORMAT;
    if (typeof problemDetails !== "object") return ApiError.UNEXPECTED_FORMAT;
    if (!("errors" in problemDetails)) return ApiError.UNEXPECTED_FORMAT;

    const errors = problemDetails.errors;

    if (errors == null) return ApiError.UNEXPECTED_FORMAT;
    if (!Array.isArray(errors)) return ApiError.UNEXPECTED_FORMAT;

    const apiError = new ApiError(400);

    for (const error of errors) {
      if (error == null) continue;
      if (typeof error !== "object") continue;

      if (error.propertyName == null || typeof error.propertyName !== "string")
        continue;
      let propertyName: string = error.propertyName;
      propertyName = propertyName[0]
        .toLowerCase()
        .concat(propertyName.substring(1));

      apiError.validationErrors[propertyName] =
        utils.convertServerSideErrorToTranslatedErrorMessage(error);
    }

    return apiError;
  }

  static LOGIN_FAILED: ApiError = {
    status: 401,
    errorCode: "loginFailed",
    validationErrors: {},
  };

  static REGISTRATION_FAILED: ApiError = {
    status: 400,
    errorCode: "registrationFailed",
    validationErrors: {},
  };

  static UNEXPECTED_FORMAT: ApiError = new ApiError(422);

  static CONNECTION_FAILED: ApiError = new ApiError(503);
}
