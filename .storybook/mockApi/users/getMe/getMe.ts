import { User } from "../../../../src/types/user/user";

const getMe = async (): Promise<User> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  const user = new User();

  return user;
};

export default getMe;
