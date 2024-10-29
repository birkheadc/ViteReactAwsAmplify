import { Meta, StoryObj } from "@storybook/react";
import UpdateProfileForm from "./UpdateProfileForm";

const meta: Meta<typeof UpdateProfileForm> = {
  title: "Components/Pages/ProfilePage/UpdateProfileForm",
  component: UpdateProfileForm,
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
