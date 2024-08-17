import { AccessToken } from "@/types/accessToken/accessToken";
import { extractAccessToken } from "@/utils";

const login = async (
  emailAddress: string,
  password: string,
): Promise<AccessToken | null> => {
  const url = "https://cognito-idp.ap-southeast-2.amazonaws.com";
  const body = JSON.stringify({
    ClientId: "5ns45evk0628220vuvr4ahmaer",
    AuthFlow: "USER_PASSWORD_AUTH",
    AuthParameters: {
      USERNAME: emailAddress,
      PASSWORD: password,
    },
  });
  const headers = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
  };
  const request = {
    method: "POST",
    body,
    headers,
  };

  const response = await fetch(url, request);

  const data = await response.json();
  const accessToken = extractAccessToken(data);

  return accessToken;
};

export default login;
