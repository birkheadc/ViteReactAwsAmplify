import * as React from "react";
import { useApi } from "../../hooks/useApi/useApi";

import { User } from "../../types/user/user";
import { useKeyedTranslation } from "../../hooks/useKeyedTranslation/useKeyedTranslation";
import BasicModal from "../../components/common/BasicModal/BasicModal";
import { toast } from "react-toastify";
import { useDedup } from "../../hooks/useDedup/useDedup";

import utils from "./SessionContext.utils";

type SessionProviderProps = {
  children: React.ReactNode;
};

type SessionContextState = {
  isLoggedIn: boolean;
  login: (code: string) => Promise<void>;
  logout: () => Promise<void>;
  user: User | undefined;
};

const initialState: SessionContextState = {
  login: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  isLoggedIn: false,
  logout: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  user: undefined,
};

export const SessionContext =
  React.createContext<SessionContextState>(initialState);

export function SessionProvider({ children }: SessionProviderProps) {
  const api = useApi();

  const { t } = useKeyedTranslation("contexts.SessionContext");

  const [status, setStatus] = React.useState<
    "loggingIn" | "loggingOut" | undefined
  >(undefined);
  const isPending = !!status;

  const [user, setUser] = React.useState<User | undefined>(undefined);
  const isLoggedIn = !!user;

  const previousSession = utils.getPreviousSessionKeyFromLocalStorage();

  // Send the authentication code to the server to authenticate.
  // The server should add http-only cookies to the response, which will be automatically saved by the browser and authenticate further requests.
  // The server should also return a user object, which will be saved in memory in this context for use by the rest of the application.
  const login = async (code: string) => {
    if (isPending) {
      return;
    }

    setStatus("loggingIn");
    try {
      const user = await api.auth.login(code);

      toast(t("loginSucceeded"), { type: "success" });
      setUser(user);
      utils.setPreviousSessionKeyInLocalStorage("true");
    } catch (error) {
      toast(t("loginFailed"), { type: "error" });
    } finally {
      setStatus(undefined);
    }
  };

  // Send a request to the server to log the user out.
  // The server should revoke the user's authentication cookies, which will automatically log the user out.
  // The application should remove the user's information from memory, and remove the "previousSession" key from localStorage
  // so the app will not attempt to automatically log the user back in on next refresh.
  const logout = async () => {
    if (isPending) {
      return;
    }
    setStatus("loggingOut");

    await api.auth.logout();

    toast(t("logoutSucceeded"), { type: "success" });
    setUser(undefined);
    utils.removePreviousSessionKeyFromLocalStorage();
    setStatus(undefined);
  };

  // Attempt to retrieve the session from the server if the user has a previous session key in localStorage.
  // This is used to automatically log the user back in on page refresh if they have a valid session.
  const attemptToRetrieveSession = useDedup(async () => {
    if (!previousSession || isLoggedIn || isPending) {
      return;
    }
    setStatus("loggingIn");
    try {
      const user = await api.users.getMe();
      setUser(user);
      toast(t("loginSucceeded"), { type: "success" });
    } catch (error) {
      toast(t("automaticLoginFailed"), { type: "error" });
      // In the case of an unexpected error, remove the previous session key from localStorage
      // so the user can try to log in again manually.
      if (!utils.isKnownTemporaryError(error)) {
        utils.removePreviousSessionKeyFromLocalStorage();
      }
    } finally {
      setStatus(undefined);
    }
  });

  // TODO: This loops forever because the function modifies its own dependencies. (isPending)
  React.useEffect(attemptToRetrieveSession, [attemptToRetrieveSession]);

  return (
    <SessionContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
      <BasicModal isOpen={isPending}>
        <div>
          <span>{status && t(status)}</span>
        </div>
      </BasicModal>
    </SessionContext.Provider>
  );
}
