import { Route } from "react-router-dom";
import ProfilePage from "../../components/pages/ProfilePage/ProfilePage";
import LogoutPage from "../../components/pages/LogoutPage/LogoutPage";

const SecureRoutes = (
  <>
    <Route path="/logout" element={<LogoutPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </>
);

export default SecureRoutes;
