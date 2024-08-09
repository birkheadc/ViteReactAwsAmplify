import { Meta, StoryObj } from "@storybook/react";
import BooksDisplay from "./BooksDisplay";

const meta: Meta<typeof BooksDisplay> = {
  title: "/BooksDisplay",
  component: BooksDisplay,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeScreen: Story = {
  args: {},
};

export const SmallScreen: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
};
