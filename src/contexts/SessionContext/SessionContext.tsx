import * as React from "react";
import { useApi } from "../../hooks/useApi/useApi";

import Modal from 'react-modal';
import { CognitoTokens } from "../../types/cognito/cognitoTokens";
import { useQuery } from "@tanstack/react-query";

type SessionProviderProps = {
  children: React.ReactNode;
};

type SessionContextState = {
  isLoggedIn: boolean;
  accessToken: string | undefined;
  login: (code: string) => void;
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

  const [ code, setCode ] = React.useState<string | undefined>(undefined);

  const { data, isPending } = useQuery<CognitoTokens>({
    queryKey: ["login"],
    queryFn: async () => api.auth.login(code),
    enabled: code != null
  });

  const login = (code: string) => {
    setCode(code);
  };

  const logout = () => {
    setCode(undefined);
  };

  React.useEffect(() => {
    console.log({ code, data })
  }, [code, data]);

  return (
    <SessionContext.Provider value={{ accessToken: data?.accessToken, isLoggedIn: data != null, login, logout }}>
      {children}
      <Modal isOpen={isPending && code != null}>
        <div>
          <h1>Logging in...</h1>
        </div>
      </Modal>
    </SessionContext.Provider>
  );
}
