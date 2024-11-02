import * as React from "react";
import { useApi } from "../../hooks/useApi/useApi";

import { useKeyedTranslation } from "../../hooks/useKeyedTranslation/useKeyedTranslation";
import WorkingModal from "../../components/common/WorkingModal/WorkingModal";
import { toast } from "react-toastify";

import { useMe } from "../../hooks/useMe/useMe";
import { SessionContext } from "./SessionContext";

type SessionProviderProps = {
  children: React.ReactNode;
};

export function SessionProvider({ children }: SessionProviderProps) {
  const api = useApi();

  const { t } = useKeyedTranslation("contexts.SessionContext");

  const [status, setStatus] = React.useState<
    "loggingIn" | "loggingOut" | "idle" | undefined
  >(undefined);
  const isPending = status === "loggingIn" || status === "loggingOut";

  const { user, setUser } = useMe();
  const isLoggedIn = !!user;

  // Send the authentication code to the server to authenticate.
  // The server should add http-only cookies to the response, which will be automatically saved by the browser and authenticate further requests.
  // The server should also return a user object, which will be saved in memory in this context for use by the rest of the application.
  const login = React.useCallback(
    async (code: string) => {
      if (isPending) {
        return;
      }

      setStatus("loggingIn");
      try {
        const user = await api.auth.login(code);

        toast(t("loginSucceeded"), { type: "success" });

        setUser(user);
      } catch (error) {
        toast(t("loginFailed"), { type: "error" });
      } finally {
        setStatus("idle");
      }
    },
    [api, isPending, t, setUser],
  );

  // Send a request to the server to log the user out.
  // The server should revoke the user's authentication cookies, which will automatically log the user out.
  // The application should remove the user's information from memory, and remove the "previousSession" key from localStorage
  // so the app will not attempt to automatically log the user back in on next refresh.
  const logout = React.useCallback(async () => {
    if (isPending) {
      return;
    }
    setStatus("loggingOut");

    await api.auth.logout();

    toast(t("logoutSucceeded"), { type: "success" });
    setUser(undefined);
    setStatus("idle");
  }, [api, isPending, t, setUser]);

  return (
    <SessionContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
      <WorkingModal isOpen={isPending}>
        <div>
          <span>{status && t(status)}</span>
        </div>
      </WorkingModal>
    </SessionContext.Provider>
  );
}
