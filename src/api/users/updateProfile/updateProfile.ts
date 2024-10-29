import { UpdateProfileFormSchema } from "../../../components/pages/ProfilePage/UpdateProfileForm/UpdateProfileForm.schema";
import utils from "../../../utils";

const updateProfile = async (data: UpdateProfileFormSchema): Promise<void> => {
  const result = await utils.apiSubmit({
    path: `me/profile`,
    init: {
      method: "PATCH",
      body: JSON.stringify(data),
    },
  });

  return result;
};

export default updateProfile;
