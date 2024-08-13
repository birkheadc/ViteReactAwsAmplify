import { AuthToken } from "../../../../src/types/authToken/authToken";

const login = async (
  emailAddress: string,
  password: string,
): Promise<AuthToken> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  return "authtoken";
};

export default login;
