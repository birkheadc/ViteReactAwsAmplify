import React from "react";
import { SessionContext } from "../../contexts/SessionContext/SessionContext";
import { User } from "../../types/user/user";

export function useMe(): User | undefined {
  const context = React.useContext(SessionContext);

  if (context === undefined) {
    throw new Error("useMe must be used within a UserProvider");
  }

  return context.user;
}
