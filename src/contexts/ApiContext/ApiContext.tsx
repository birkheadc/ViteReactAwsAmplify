import React from "react";
import { Api } from "../../types/api/api";
import api from "../../api";

type ApiContextState = {
  api: Api;
};

const initialState: ApiContextState = {
  api: api,
};

export const ApiContext = React.createContext<ApiContextState>(initialState);
