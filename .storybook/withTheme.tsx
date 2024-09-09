import React from "react";
import { ThemeProvider } from "../src/contexts/ThemeContext/ThemeContext";

const withTheme = (Story: any) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

export default withTheme;
