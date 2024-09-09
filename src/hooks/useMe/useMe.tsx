import React from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export function useMe() {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error("useMe must be used within a UserProvider");
  }

  return context;
}
