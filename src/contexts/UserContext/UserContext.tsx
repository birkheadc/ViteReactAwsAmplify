import React from "react";
import { User } from "../../types/user/user";
import { useSession } from "../../hooks/useSession/useSession";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "../../hooks/useApi/useApi";
import { useRefreshToast } from "../../hooks/useRefreshToast/useRefreshToast";
import { useKeyedTranslation } from "../../hooks/useKeyedTranslation/useKeyedTranslation";

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
  const { t } = useKeyedTranslation("contexts.UserContext");
  const toast = useRefreshToast();

  const api = useApi();
  const { isLoggedIn, logout } = useSession();

  const { data, isPending } = useQuery<User>({
    queryKey: ["me"],
    queryFn: async () => {
      try {
        const result = await api.users.getMe();
        return result;
      } catch (error) {
        toast(t("failed_to_fetch_user"), "error");
        logout();
        throw error;
      }
    },
    enabled: isLoggedIn,
    retry: false,
  });

  return (
    <UserContext.Provider value={{ user: data, isPending }}>
      {children}
    </UserContext.Provider>
  );
}
