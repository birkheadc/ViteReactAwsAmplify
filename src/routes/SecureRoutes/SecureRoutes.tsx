import { Route } from "react-router-dom";
import ProfilePage from "../../components/pages/ProfilePage/ProfilePage";

const SecureRoutes = (
  <>
    <Route path="/profile" element={<ProfilePage />} />
  </>
);

export default SecureRoutes;
