import { LogOutIcon, UserIcon } from "lucide-react";
import PrimaryNavLink from "../../PrimaryNavLink/PrimaryNavLink";
import { useKeyedTranslation } from "../../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { useMe } from "../../../../../hooks/useMe/useMe";
import { Skeleton } from "../../../../ui/skeleton";

function LoggedInLinks(): JSX.Element | null {
  const { t } = useKeyedTranslation(
    "components.nav.PrimaryNav.SessionLinks.LoggedInLinks",
  );

  const user = useMe();

  return (
    <>
      <PrimaryNavLink to={"/logout"}>
        <LogOutIcon size="1rem" />
        {t("logout")}
      </PrimaryNavLink>
      <PrimaryNavLink to={"/profile"}>
        <UserIcon size="1rem" />
        {user == null ? (
          <Skeleton className="w-20 h-4 " />
        ) : (
          (user.displayName ?? user.emailAddress)
        )}
      </PrimaryNavLink>
    </>
  );
}

export default LoggedInLinks;
