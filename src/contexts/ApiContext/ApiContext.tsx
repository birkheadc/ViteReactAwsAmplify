import React from "react";
import { Api } from "../../types/api/api";
import api from "../../api";

type ApiProviderProps = {
  children: React.ReactNode;
  api: Api;
};

type ApiContextState = {
  api: Api;
};

const initialState: ApiContextState = {
  api: api,
};

export const ApiContext = React.createContext<ApiContextState>(initialState);

export function ApiProvider({ children, api }: ApiProviderProps) {
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
}
