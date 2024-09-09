import React from "react";
import Toast from "../src/components/toast/Toast/Toast";

import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "../src/contexts/ThemeContext/ThemeContext";

const withToast = (Story: any) => {
  return (
    <ThemeProvider>
      <Toast />
      <Story />
    </ThemeProvider>
  );
};

export default withToast;
