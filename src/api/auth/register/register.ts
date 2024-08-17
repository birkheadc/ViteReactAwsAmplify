const register = async (
  emailAddress: string,
  password: string,
): Promise<void> => {
  // const url = "https://aspnetcoreserverless-development.auth.ap-southeast-2.amazoncognito.com";
  const url = "https://cognito-idp.ap-southeast-2.amazonaws.com";
  const body = JSON.stringify({
    ClientId: "5ns45evk0628220vuvr4ahmaer",
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
  console.log("Process request", url, request);
  const response = await fetch(url, request);

  console.log(response);
  const data = await response.json();
  console.log(data);
};

export default register;
