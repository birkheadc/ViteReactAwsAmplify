import UpdateProfileForm from "./UpdateProfileForm/UpdateProfileForm";

function ProfilePage(): JSX.Element | null {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* User should never be null when this page is active so no need to add a fallback */}
      <UpdateProfileForm />
    </div>
  );
}

export default ProfilePage;
