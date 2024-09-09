import { Routes } from "react-router-dom";
import CommonRoutes from "./CommonRoutes/CommonRoutes";
import FallbackRoute from "./FallbackRoute/FallbackRoute";
import { useSession } from "../hooks/useSession/useSession";
import SecureRoutes from "./SecureRoutes/SecureRoutes";

function AppRoutes(): JSX.Element | null {
  const { isLoggedIn } = useSession();

  return (
    <Routes>
      {CommonRoutes}
      {FallbackRoute}
      {isLoggedIn && SecureRoutes}
    </Routes>
  );
}

export default AppRoutes;
