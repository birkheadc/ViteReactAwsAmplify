import React from "react";
import { ApiContext } from "../../contexts/ApiContext/ApiContext";

export function useApi() {
  const context = React.useContext(ApiContext);

  if (context === undefined)
    throw new Error("useApi must be used within a ApiProvider");

  return context;
}
