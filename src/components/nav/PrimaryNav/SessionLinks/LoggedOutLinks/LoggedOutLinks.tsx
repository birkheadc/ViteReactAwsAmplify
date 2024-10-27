import { LogInIcon, CircleUserIcon } from "lucide-react";
import config from "../../../../../config";
import PrimaryNavLink from "../../PrimaryNavLink/PrimaryNavLink";
import { useKeyedTranslation } from "../../../../../hooks/useKeyedTranslation/useKeyedTranslation";

function LoggedOutLinks(): JSX.Element | null {
  const { t } = useKeyedTranslation(
    "components.nav.PrimaryNav.SessionLinks.LoggedOutLinks",
  );

  return (
    <>
      <PrimaryNavLink to={config.cognito.REGISTER_URL}>
        <CircleUserIcon size={"1rem"} />
        {t("register")}
      </PrimaryNavLink>
      <PrimaryNavLink to={config.cognito.LOGIN_URL}>
        <LogInIcon size={"1rem"} />
        {t("login")}
      </PrimaryNavLink>
    </>
  );
}

export default LoggedOutLinks;
