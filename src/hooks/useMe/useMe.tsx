import React from "react";
import { MeContext, MeContextState } from "../../contexts/MeContext/MeContext";

export function useMe(): MeContextState {
  const context = React.useContext(MeContext);

  if (context === undefined) {
    throw new Error("useMe must be used within a UserProvider");
  }

  return context;
}
