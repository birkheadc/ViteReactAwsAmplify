import { UpdateProfileFormSchema } from "../../../components/pages/ProfilePage/UpdateProfileForm/UpdateProfileForm.schema";
import utils from "../../../utils";

/**
 * Update the profile of the current user. The API at this endpoint only processes the fields pertaining to the UserProfile model, ignoring things like email and roles.
 * @param data - The data to update the profile with.
 * @throws An ApiError if something goes wrong.
 */
const updateProfile = async (data: UpdateProfileFormSchema): Promise<void> => {
  const result = await utils.apiSubmit({
    path: `me/profile`,
    init: {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
    },
  });

  return result;
};

export default updateProfile;
