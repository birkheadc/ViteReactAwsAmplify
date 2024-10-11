import { User } from "../../../types/user/user";
import utils from "../../../utils";

const getMe = async (): Promise<User> => {
  const result = await utils.apiFetch({
    path: `me`,
    init: {
      method: "GET",
    },
    builder: async (json) => User.fromJson(json),
  });

  return result;
};

export default getMe;
