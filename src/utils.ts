import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AccessToken } from "./types/accessToken/accessToken";
import i18n from "./localization/i18n";
import { ErrorCodes } from "./types/errorCodes/errorCodes";
import { FormattedMessagePlaceholderValues } from "./types/apiResult/formattedMessagePlaceholderValues";
import config from "./config";
import { ApiError } from "./types/apiResult/apiError";

// Shadcn expects cn to be exported separately
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const extractAccessToken = (data: unknown): AccessToken | null => {
  if (data == null) return null;
  if (typeof data !== "object") return null;
  if (!("AuthenticationResult" in data)) return null;

  const AuthenticationResult = data.AuthenticationResult;

  if (AuthenticationResult == null) return null;
  if (typeof AuthenticationResult !== "object") return null;
  if (!("AccessToken" in AuthenticationResult)) return null;

  const AccessToken = AuthenticationResult.AccessToken;

  if (AccessToken == null) return null;
  if (typeof AccessToken !== "string") return null;

  return AccessToken;
};

const convertServerSideErrorToTranslatedErrorMessage = (
  error: object,
): string => {
  const t = i18n.t;
  if (!("errorCode" in error))
    return t("components.form.validationErrors.unexpected", {
      e: "error code null",
    });
  const errorCode = error.errorCode;
  if (
    errorCode == null ||
    typeof errorCode !== "string" ||
    !Object.keys(ErrorCodes).includes(errorCode)
  )
    return t("components.form.validationErrors.unexpected", { e: errorCode });

  const values = FormattedMessagePlaceholderValues.fromError(error);

  switch (errorCode as ErrorCodes) {
    case "MinimumLengthValidator":
      return t("components.form.validationErrors.min", {
        n: values.minLength,
      });
    case "EqualValidator":
      return t("components.form.validationErrors.equal", {
        v: values.comparisonValue,
      });
    case "NotEqualValidator":
      return t("components.form.validationErrors.notEqual", {
        v: values.comparisonValue,
      });
    default:
      return t("components.form.validationErrors.unexpected", { e: errorCode });
  }
};

const createAbortSignal = (): {
  signal: AbortSignal;
  clearAbortSignal: () => void;
} => {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    console.error("Request took too long, aborting...");
    controller.abort();
  }, 30000);

  return {
    signal: controller.signal,
    clearAbortSignal: () => clearTimeout(timeout),
  };
};

export type ApiSubmitOptions = {
  path: string;
  init: RequestInit;
};

export type ApiFetchOptions<T> = ApiSubmitOptions & {
  builder: (json: unknown) => Promise<T>;
};

const apiSubmit = async ({ path, init }: ApiSubmitOptions): Promise<void> => {
  if (config.general.IS_LOCAL) {
    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
  }

  const { signal, clearAbortSignal } = createAbortSignal();

  const baseUrl = config.api.API_URL;
  const url = `${baseUrl}/${path}`;

  let response: Response;
  try {
    response = await fetch(url, { ...init, signal, credentials: 'include' });
  } catch (error) {
    throw ApiError.fromJson(error);
  } finally {
    clearAbortSignal();
  }

  if (!response.ok) {
    const json = await response.json();
    throw ApiError.fromJson(json);
  }
};

const apiFetch = async <T>({
  path,
  init,
  builder,
}: ApiFetchOptions<T>): Promise<T> => {
  if (config.general.IS_LOCAL) {
    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
  }

  const { signal, clearAbortSignal } = createAbortSignal();

  const baseUrl = config.api.API_URL;
  const url = `${baseUrl}/${path}`;

  let response: Response;
  try {
    response = await fetch(url, { ...init, signal, credentials: 'include' });
  } catch (error) {
    throw ApiError.fromJson(error);
  } finally {
    clearAbortSignal();
  }

  const json = await response.json();
  if (!response.ok) {
    throw ApiError.fromJson(json);
  }
  try {
    return await builder(json);
  } catch {
    throw ApiError.UNEXPECTED_FORMAT;
  }
};

// Exporting all utils together makes them easier to mock
export default {
  extractAccessToken,
  convertServerSideErrorToTranslatedErrorMessage,
  apiSubmit,
  apiFetch,
};
