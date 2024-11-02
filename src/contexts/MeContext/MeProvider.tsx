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
  });

  const setUser = (user: User | undefined) => {
    if (!user) {
      utils.removePreviousSessionKeyFromLocalStorage();
      setPreviousSession(false);
      // TODO The query fires again immediately.. it should not.
      queryClient.resetQueries({ queryKey: ["me"] });
    } else {
      utils.setPreviousSessionKeyInLocalStorage("true");
      setPreviousSession(true);
      queryClient.setQueryData(["me"], user);
    }
  };

  const updateUserProfile = async (userProfile: UserProfile) => {
    console.log("updateUserProfile", userProfile);
    // TODO: Implement
    // Use a mutation to update user profile on the server
    // then use setUser to update the user profile locally
  };

  React.useEffect(() => {
    console.log("user", user);
  }, [user]);

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
