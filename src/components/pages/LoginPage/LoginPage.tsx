import { useNavigate, useSearchParams } from "react-router-dom";
import { useSession } from "../../../hooks/useSession/useSession";
import React from "react";

function LoginPage(): JSX.Element | null {
  const { login } = useSession();
  const [params] = useSearchParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    (async function loginOrRedirect() {
      const code = params.get("code");
      if (code == null) {
        navigate("/");
        return;
      }
      await login(code);
    })();
  }, [ params, login ]);

  return (
    <div>
      
    </div>
  );
}

export default LoginPage;
