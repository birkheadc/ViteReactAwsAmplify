import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme/useTheme";
import { Switch } from "../../ui/switch";

function ThemeSwitch(): JSX.Element | null {
  const { theme, setTheme } = useTheme();

  const handleCheckedChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <Switch checked={theme === "dark"} onCheckedChange={handleCheckedChange}>
        {theme === "dark" ? (
          <MoonIcon className="p-0.5" size="100%" />
        ) : (
          <SunIcon className="p-0.5" size="100%" />
        )}
      </Switch>
    </div>
  );
}

export default ThemeSwitch;
