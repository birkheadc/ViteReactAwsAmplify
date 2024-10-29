import { User } from "../../../types/user/user";
import utils from "../../../utils";

const getMe = async (): Promise<User> => {
  console.log("getMe");
  const result = await utils.apiFetch({
    path: `me`,
    init: {
      method: "GET",
    },
    builder: User.fromJson,
  });

  return result;
};

export default getMe;
