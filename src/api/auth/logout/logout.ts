import utils from "../../../utils";

const logout = async () => {
  const result = await utils.apiSubmit({
    path: "session",
    init: {
      method: "DELETE",
    },
  });

  return result;
}

export default logout;