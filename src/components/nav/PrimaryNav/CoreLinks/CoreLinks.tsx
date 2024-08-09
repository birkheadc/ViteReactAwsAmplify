import PrimaryNavLink from "@/components/nav/PrimaryNav/PrimaryNavLink/PrimaryNavLink";
import { useKeyedTranslation } from "@/hooks/useKeyedTranslation/useKeyedTranslation";
import { AtSignIcon, BookAIcon, BookIcon, HomeIcon } from "lucide-react";

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
    </>
  );
}

export default CoreLinks;
