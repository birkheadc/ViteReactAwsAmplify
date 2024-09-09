import { useNavigate, useSearchParams } from "react-router-dom";
import { useSession } from "../../../hooks/useSession/useSession";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { ApiError } from "../../../types/apiResult/apiError";

function LoginPage(): JSX.Element | null {
  const session = useSession();
  const [params] = useSearchParams();
  const nav = useNavigate();

  const { mutate, isPending, error } = useMutation<void, ApiError, string>({
    mutationFn: session.login,
    onSuccess: () => nav("/weeee"),
  });

  React.useEffect(() => {
    (async function loginOrRedirect() {
      const code = params.get("code");
      if (code == null) {
        return;
      }
      mutate(code);
    })();
  }, [params, session, mutate]);

  return (
    <div>
      {isPending && <span>Logging...</span>}
      {error && (
        <span>TODO: Say why login failed and have a link to try again.</span>
      )}
    </div>
  );
}

export default LoginPage;
