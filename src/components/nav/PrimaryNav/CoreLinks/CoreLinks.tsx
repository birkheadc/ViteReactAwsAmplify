import {
  AtSignIcon,
  BookAIcon,
  BookIcon,
  FileTextIcon,
  HomeIcon,
  MessageSquareTextIcon,
} from "lucide-react";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import PrimaryNavLink from "../PrimaryNavLink/PrimaryNavLink";

function CoreLinks(): JSX.Element | null {
  const { t } = useKeyedTranslation("components.nav.PrimaryNav.CoreLinks");

  return (
    <>
      <PrimaryNavLink to={"/"}>
        <HomeIcon size={"1rem"} />
        {t("home")}
      </PrimaryNavLink>
      <PrimaryNavLink to={"/about"}>
        <BookAIcon size={"1rem"} />
        {t("about")}
      </PrimaryNavLink>
      <PrimaryNavLink to={"/contact"}>
        <AtSignIcon size={"1rem"} />
        {t("contact")}
      </PrimaryNavLink>
      <PrimaryNavLink to={"/books"}>
        <BookIcon size={"1rem"} />
        {t("books")}
      </PrimaryNavLink>
      <PrimaryNavLink to={"/form"}>
        <FileTextIcon size={"1rem"} />
        {t("form")}
      </PrimaryNavLink>
      <PrimaryNavLink to={"/toast"}>
        <MessageSquareTextIcon size={"1rem"} />
        {t("toast")}
      </PrimaryNavLink>
    </>
  );
}

export default CoreLinks;
