import { RegisterFormSchema } from "../../../components/pages/RegisterPage/RegisterForm/RegisterForm.schema";
import config from "../../../config";
import { ApiError } from "../../../types/apiResult/apiError";

const register = async ({
  emailAddress,
  password,
}: RegisterFormSchema): Promise<void> => {
  const url = config.cognito.URL;
  const body = JSON.stringify({
    ClientId: config.cognito.CLIENT_ID,
    Password: password,
    UserAttributes: [
      {
        Name: "email",
        Value: emailAddress,
      },
    ],
    Username: emailAddress,
  });
  const headers = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.SignUp",
  };
  const request = {
    method: "POST",
    body,
    headers,
  };

  const response = await fetch(url, request);

  if (response.status !== 200) {
    throw ApiError.REGISTRATION_FAILED;
  }
};

export default register;
