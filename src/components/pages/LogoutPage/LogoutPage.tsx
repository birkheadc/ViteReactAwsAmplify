import React from "react";
import { useSession } from "../../../hooks/useSession/useSession";

function LogoutPage(): JSX.Element | null {

  const { logout } = useSession();

  React.useEffect(() => {
    logout();
    
  }, [logout]);

  return (
    <div>
      <h1>LogoutPage</h1>
      <p>Todo: Logout on visit</p>
    </div>
  );
}

export default LogoutPage;
