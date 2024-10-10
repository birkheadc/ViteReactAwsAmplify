import * as React from "react";
import { useApi } from "../../hooks/useApi/useApi";

import Modal from "react-modal";
import { useRefreshToast } from "../../hooks/useRefreshToast/useRefreshToast";

type SessionProviderProps = {
  children: React.ReactNode;
};

type SessionContextState = {
  isLoggedIn: boolean;
  login: (code: string) => Promise<void>;
  logout: () => void;
};

const initialState: SessionContextState = {
  login: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  isLoggedIn: false,
  logout: function (): void {
    throw new Error("Function not implemented.");
  },
};

export const SessionContext =
  React.createContext<SessionContextState>(initialState);

export function SessionProvider({ children }: SessionProviderProps) {
  const api = useApi();

  const toast = useRefreshToast("session_context");

  const [authCode, setAuthCode] = React.useState<string | undefined>(undefined);

  const [isLoggedIn, setLoggedIn] = React.useState<boolean>(false);

  const [isPending, setPending] = React.useState<boolean>(false);

  const login = async (code: string) => {
    setAuthCode(code);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  React.useEffect(() => {
    (async function login() {
      if (authCode == null) {
        return;
      }

      setPending(true);

      try {
        const idToken = await api.auth.login(authCode);
        console.log(`Got IdToken: ${idToken}`);
        setLoggedIn(true);
      } catch (error) {
        toast(`login_failed: ${JSON.stringify(error)}`, "error");
      } finally {
        setPending(false);
      }
    })();
  }, [authCode]);

  return (
    <SessionContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
      <Modal isOpen={isPending}>
        <div>
          <h1>Logging in...</h1>
        </div>
      </Modal>
    </SessionContext.Provider>
  );
}
