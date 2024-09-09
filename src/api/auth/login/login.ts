import config from "../../../config";
import { ApiError } from "../../../types/apiResult/apiError";
import { CognitoTokens } from "../../../types/cognito/cognitoTokens";

const login = async (code: string): Promise<CognitoTokens> => {
  const url = `${config.cognito.URL}/oauth2/token`;
  const body = `grant_type=authorization_code&code=${code}&client_id=${config.cognito.CLIENT_ID}&redirect_uri=${window.location.protocol}//${window.location.host}/login`;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.Client",
  };

  const request = {
    method: "POST",
    body,
    headers,
  };

  const response = await fetch(url, request);

  if (!response.ok) {
    throw ApiError.LOGIN_FAILED;
  }

  const json = await response.json();

  const cognitoTokens = CognitoTokens.fromJson(json);

  return cognitoTokens;
};

export default login;

// const login = async ({
//   emailAddress,
//   password,
// }: LoginFormSchema): Promise<AccessToken | null> => {
//   const url = config.cognito.URL;
//   const body = JSON.stringify({
//     ClientId: config.cognito.CLIENT_ID,
//     AuthFlow: "USER_PASSWORD_AUTH",
//     AuthParameters: {
//       USERNAME: emailAddress,
//       PASSWORD: password,
//     },
//   });
//   const headers = {
//     "Content-Type": "application/x-amz-json-1.1",
//     "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
//   };
//   const request = {
//     method: "POST",
//     body,
//     headers,
//   };

//   const response = await fetch(url, request);

//   if (response.status !== 200) {
//     throw ApiError.LOGIN_FAILED;
//   }

//   const json = await response.json();
//   console.log(json);
//   const accessToken = utils.extractAccessToken(json);

//   return accessToken;
// };
