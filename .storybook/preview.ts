import { Preview, ReactRenderer } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withThemeByClassName } from "@storybook/addon-themes";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import withI18next from "./withI18next";

import { CUSTOM_VIEWPORTS } from "./customViewports";

import "../src/styles/main.css";
import withQueryProvider from "./withQueryProvider";
import withApiProvider from "./withApiProvider";
import withToast from "./withToast";
import mockApi from "./mockApi";
import { ThemeProvider } from "../src/contexts/ThemeContext/ThemeContext";
import withModal from "./withModal";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      routing: { path: "/" },
    }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...CUSTOM_VIEWPORTS,
      },
      defaultViewport: "large",
    },
  },
  decorators: [
    withModal,
    withApiProvider(mockApi),
    withI18next,
    withRouter,
    withQueryProvider,
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    withToast,
  ],
};

export default preview;
