import { useSession } from "../../../../hooks/useSession/useSession";
import LoggedInLinks from "./LoggedInLinks/LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks/LoggedOutLinks";

function SessionLinks(): JSX.Element | null {
  const { isLoggedIn } = useSession();

  return isLoggedIn ? <LoggedInLinks /> : <LoggedOutLinks />;
}

export default SessionLinks;
