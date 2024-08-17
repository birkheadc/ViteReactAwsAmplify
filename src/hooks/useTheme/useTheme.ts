import * as React from "react";
import { ThemeProviderContext } from "../../contexts/ThemeContext/ThemeContext";

export function useTheme() {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
