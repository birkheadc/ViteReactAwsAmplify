import utils from "../../../utils";

const logout = async () => {
  await utils.apiSubmit({
    path: "session",
    init: {
      method: "DELETE",
    },
  });
}

export default logout;