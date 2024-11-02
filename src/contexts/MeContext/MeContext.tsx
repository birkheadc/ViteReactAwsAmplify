import { User } from "../../types/user/user";
import { UserProfile } from "../../types/user/userProfile";
import React from "react";

export type MeContextState = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  updateUserProfile: (userProfile: UserProfile) => Promise<void>;
};

const initialState: MeContextState = {
  user: undefined,
  setUser: function (): void {
    throw new Error("Function not implemented.");
  },
  updateUserProfile: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
};

export const MeContext = React.createContext<MeContextState>(initialState);
