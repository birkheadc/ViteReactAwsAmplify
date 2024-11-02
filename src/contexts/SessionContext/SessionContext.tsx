import * as React from "react";

import { User } from "../../types/user/user";

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
