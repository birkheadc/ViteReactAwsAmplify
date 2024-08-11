import api from "@/api";
import { Api } from "@/types/api/api";
import React from "react";

type ApiProviderProps = {
  children: React.ReactNode;
  api: Api;
};

type ApiProviderState = {
  api: Api;
};

const initialState: ApiProviderState = {
  api: api,
};

export const ApiProviderContext =
  React.createContext<ApiProviderState>(initialState);

export function ApiProvider({ children, api }: ApiProviderProps) {
  return (
    <ApiProviderContext.Provider value={{ api }}>
      {children}
    </ApiProviderContext.Provider>
  );
}
