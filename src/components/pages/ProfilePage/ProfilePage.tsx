import UpdateProfileForm from "./UpdateProfileForm/UpdateProfileForm";
import { useMe } from "../../../hooks/useMe/useMe";

function ProfilePage(): JSX.Element | null {
  const { user } = useMe();

  console.log(user);

  return (
    <div>
      <h1>Profile Page</h1>
      <UpdateProfileForm />
    </div>
  );
}

export default ProfilePage;
