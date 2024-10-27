import { useNavigate, useSearchParams } from "react-router-dom";
import { useSession } from "../../../hooks/useSession/useSession";
import React from "react";
import { useDedup } from "../../../hooks/useDedup/useDedup";

function LoginPage(): JSX.Element | null {
  const { login } = useSession();
  const [params] = useSearchParams();
  const code = params.get("code");

  const navigate = useNavigate();

  const loginOrRedirect = useDedup(async () => {
    if (code == null) {
      navigate("/");
      return;
    }
    await login(code);
    navigate("/");
  });

  React.useEffect(loginOrRedirect, [loginOrRedirect]);

  return <div></div>;
}

export default LoginPage;
