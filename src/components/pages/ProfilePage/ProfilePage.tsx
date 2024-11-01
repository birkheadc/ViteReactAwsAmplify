import UpdateProfileForm from "./UpdateProfileForm/UpdateProfileForm";
import { useMe } from "../../../hooks/useMe/useMe";

function ProfilePage(): JSX.Element | null {
  const { user } = useMe();

  return (
    <div>
      <h1>Profile Page</h1>
      {/* User should never be null when this page is active so no need to add a fallback */}
      {user && <UpdateProfileForm user={user} />}
    </div>
  );
}

export default ProfilePage;
