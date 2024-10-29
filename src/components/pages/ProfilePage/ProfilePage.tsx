import UpdateProfileForm from "./UpdateProfileForm/UpdateProfileForm";
import { useSession } from "../../../hooks/useSession/useSession";

function ProfilePage(): JSX.Element | null {
  const { user } = useSession();

  console.log(user);

  return (
    <div>
      <h1>Profile Page</h1>
      <UpdateProfileForm />
    </div>
  );
}

export default ProfilePage;
