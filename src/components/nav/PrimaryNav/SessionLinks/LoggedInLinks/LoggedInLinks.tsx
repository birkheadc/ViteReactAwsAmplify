import { LogOutIcon, UserIcon } from "lucide-react";
import PrimaryNavLink from "../../PrimaryNavLink/PrimaryNavLink";
import { useKeyedTranslation } from "../../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { useMe } from "../../../../../hooks/useMe/useMe";
import { Skeleton } from "../../../../ui/skeleton";
import { useSession } from "../../../../../hooks/useSession/useSession";
import PrimaryNavButton from "../../PrimaryNavButton/PrimaryNavButton";

function LoggedInLinks(): JSX.Element | null {
  const { t } = useKeyedTranslation(
    "components.nav.PrimaryNav.SessionLinks.LoggedInLinks",
  );

  const { logout } = useSession();

  const user = useMe();

  return (
    <>
      <PrimaryNavLink to={"/profile"}>
        <UserIcon size="1rem" />
        {user == null ? (
          <Skeleton className="w-20 h-4 " />
        ) : (
          (user.profile.displayName ?? user.emailAddress)
        )}
      </PrimaryNavLink>
      <PrimaryNavButton onClick={logout}>
        <LogOutIcon size="1rem" />
        {t("logout")}
      </PrimaryNavButton>
    </>
  );
}

export default LoggedInLinks;
