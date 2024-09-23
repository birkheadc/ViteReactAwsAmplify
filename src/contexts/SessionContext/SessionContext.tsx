import * as React from "react";
import { useApi } from "../../hooks/useApi/useApi";

type SessionProviderProps = {
  children: React.ReactNode;
};

type SessionContextState = {
  isLoggedIn: boolean;
  accessToken: string | undefined;
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
  accessToken: undefined,
};

export const SessionContext =
  React.createContext<SessionContextState>(initialState);

export function SessionProvider({ children }: SessionProviderProps) {
  const api = useApi();

  const [accessToken, setAccessToken] = React.useState<string | undefined>(
    undefined,
  );

  const isLoggedIn = accessToken != null;

  const login = async (code: string) => {
    const tokens = await api.auth.login(code);
    setAccessToken(tokens.accessToken);
    // TODO: Do something with refresh token.
  };

  const logout = () => {
    setAccessToken(undefined);
  };

  return (
    <SessionContext.Provider value={{ accessToken, isLoggedIn, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}
