import React from "react";
import { User } from "../../types/user/user";
import { useSession } from "../../hooks/useSession/useSession";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../../hooks/useApi/useApi";

type UserProviderProps = {
  children: React.ReactNode;
};

type UserContextState = {
  user: User | undefined;
  isPending: boolean;
};

const initialState: UserContextState = {
  user: undefined,
  isPending: false,
};

export const UserContext = React.createContext(initialState);

export function UserProvider({ children }: UserProviderProps) {
  const api = useApi();
  const { accessToken } = useSession();

  const { data, isPending } = useQuery<User>({
    queryKey: ["me"],
    queryFn: () => api.users.getMe(accessToken),
  });

  return (
    <UserContext.Provider value={{ user: data, isPending }}>
      {children}
    </UserContext.Provider>
  );
}
