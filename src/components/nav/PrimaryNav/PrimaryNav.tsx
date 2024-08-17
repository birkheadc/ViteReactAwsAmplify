import * as React from "react";

import { useLocation } from "react-router-dom";
import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";
import ThemeSwitch from "../../common/ThemeSwitch/ThemeSwitch";
import CoreLinks from "./CoreLinks/CoreLinks";
import NavPanel from "./NavPanel/NavPanel";
import SessionLinks from "./SessionLinks/SessionLinks";

function PrimaryNav(): JSX.Element | null {
  const { t } = useKeyedTranslation("components.nav.PrimaryNav");

  const [showLeftPanel, setShowLeftPanel] = React.useState<boolean>(false);
  const [showRightPanel, setShowRightPanel] = React.useState<boolean>(false);

  const location = useLocation();

  React.useEffect(
    function closePanelsAndBlurOnNavigate() {
      setShowLeftPanel(false);
      setShowRightPanel(false);

      (document.activeElement as HTMLElement).blur();
    },
    [location]
  );

  const toggleShowLeft = () => {
    setShowRightPanel(false);
    setShowLeftPanel((s) => !s);
  };

  const toggleShowRight = () => {
    setShowLeftPanel(false);
    setShowRightPanel((s) => !s);
  };

  return (
    <nav className="sticky top-0 w-full h-nav bg-neutral-700 dark:bg-neutral-900">
      <div className="sticky flex flex-row items-center justify-between h-full max-w-6xl px-4 m-auto">
        <NavPanel
          side="left"
          show={showLeftPanel}
          toggleShow={toggleShowLeft}
          title={t("leftPanelTitle")}
        >
          <CoreLinks />
        </NavPanel>
        <NavPanel
          side="right"
          show={showRightPanel}
          toggleShow={toggleShowRight}
          title={t("rightPanelTitle")}
        >
          <SessionLinks />
          <ThemeSwitch />
        </NavPanel>
      </div>
    </nav>
  );
}

export default PrimaryNav;
