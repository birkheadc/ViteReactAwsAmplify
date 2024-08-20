import { Meta, StoryObj } from "@storybook/react";
import ExampleForm from "./ExampleForm";

const meta: Meta<typeof ExampleForm> = {
  title: "Components/Pages/FormPage/ExampleForm",
  component: ExampleForm,
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
