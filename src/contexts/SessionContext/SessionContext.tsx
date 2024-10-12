import * as React from "react";
import { useApi } from "../../hooks/useApi/useApi";

import Modal from "react-modal";
import { useRefreshToast } from "../../hooks/useRefreshToast/useRefreshToast";
import { User } from "../../types/user/user";

type SessionProviderProps = {
  children: React.ReactNode;
};

type SessionContextState = {
  isLoggedIn: boolean;
  login: (code: string) => Promise<void>;
  logout: () => void;
  user: User | undefined;
};

const initialState: SessionContextState = {
  login: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  isLoggedIn: false,
  logout: function (): void {
    throw new Error("Function not implemented.");
  },
  user: undefined,
};

export const SessionContext =
  React.createContext<SessionContextState>(initialState);

export function SessionProvider({ children }: SessionProviderProps) {
  const api = useApi();

  const toast = useRefreshToast("session_context");

  const [authCode, setAuthCode] = React.useState<string | undefined>(undefined);

  const [isLoggedIn, setLoggedIn] = React.useState<boolean>(false);

  const [isPending, setPending] = React.useState<boolean>(false);

  const [user, setUser] = React.useState<User | undefined>(undefined);

  const login = async (code: string) => {
    setAuthCode(code);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(undefined);
  };

  React.useEffect(() => {
    (async function login() {
      if (authCode == null) {
        return;
      }

      setPending(true);

      try {
        const user = await api.auth.login(authCode);
        setUser(user);
        console.log(`Got User: ${JSON.stringify({ user })}`);
        setLoggedIn(true);
      } catch (error) {
        toast(`login_failed: ${JSON.stringify(error)}`, "error");
      } finally {
        setPending(false);
      }
    })();
  }, [authCode]);

  return (
    <SessionContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
      <Modal isOpen={isPending}>
        <div>
          <h1>Logging in...</h1>
        </div>
      </Modal>
    </SessionContext.Provider>
  );
}
