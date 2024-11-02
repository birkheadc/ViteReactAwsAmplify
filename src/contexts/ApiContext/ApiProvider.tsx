import { ApiContext } from "./ApiContext";

import { Api } from "../../types/api/api";

type ApiProviderProps = {
  children: React.ReactNode;
  api: Api;
};

export function ApiProvider({ children, api }: ApiProviderProps) {
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
}
