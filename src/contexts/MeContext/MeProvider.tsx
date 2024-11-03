import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useApi } from "../../hooks/useApi/useApi";
import { User } from "../../types/user/user";
import { UserProfile } from "../../types/user/userProfile";
import utils from "./MeContext.utils";
import { useKeyedTranslation } from "../../hooks/useKeyedTranslation/useKeyedTranslation";
import React from "react";
import WorkingModal from "../../components/common/WorkingModal/WorkingModal";
import { MeContext } from "./MeContext";

type MeContextProps = {
  children: React.ReactNode;
};

export function MeProvider({ children }: MeContextProps) {
  const api = useApi();

  const { t } = useKeyedTranslation("contexts.MeContext");

  const [isPreviousSession, setPreviousSession] = React.useState<boolean>(
    utils.getPreviousSessionKeyFromLocalStorage(),
  );

  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => api.users.getMe(),
    enabled: isPreviousSession,
    retry: (failureCount, error) => {
      if ("status" in error && error.status === 401) {
        utils.removePreviousSessionKeyFromLocalStorage();
        setPreviousSession(false);
        return false;
      }
      return failureCount < 3;
    },
  });

  const setUser = (user: User | undefined) => {
    if (!user) {
      utils.removePreviousSessionKeyFromLocalStorage();
      setPreviousSession(false);
    } else {
      utils.setPreviousSessionKeyInLocalStorage("true");
      setPreviousSession(true);
      queryClient.setQueryData(["me"], user);
    }
  };

  // This has to be a useEffect because if we try to setPreviousSession to false and resetQueries
  // at the same time, the query will fire again immediately.
  React.useEffect(
    function resetMeWhenNoSession() {
      if (!isPreviousSession) {
        queryClient.resetQueries({ queryKey: ["me"] });
      }
    },
    [isPreviousSession, queryClient],
  );

  const updateUserProfile = async (userProfile: UserProfile) => {
    console.log("updateUserProfile", userProfile);
    // TODO: Implement
    // Use a mutation to update user profile on the server
    // then use setUser to update the user profile locally
  };

  return (
    <MeContext.Provider value={{ user, setUser, updateUserProfile }}>
      {children}
      <WorkingModal isOpen={isLoading}>
        <div>
          <span>{t("loggingIn")}</span>
        </div>
      </WorkingModal>
    </MeContext.Provider>
  );
}
