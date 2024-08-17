import { AccessToken } from "../../../../src/types/accessToken/accessToken";

const login = async (
  emailAddress: string,
  password: string,
): Promise<AccessToken> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  return "accesstoken";
};

export default login;
