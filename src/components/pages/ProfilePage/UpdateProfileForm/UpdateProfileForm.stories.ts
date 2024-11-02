import { Meta, StoryObj } from "@storybook/react";
import UpdateProfileForm from "./UpdateProfileForm";
import { UserRole } from "../../../../types/user/userRole";

const meta: Meta<typeof UpdateProfileForm> = {
  title: "Components/Pages/ProfilePage/UpdateProfileForm",
  component: UpdateProfileForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeScreen: Story = {
  args: {
    user: {
      id: "1",
      emailAddress: "test@test.com",
      profile: {
        displayName: "Test User",
      },
      roles: {
        roles: [UserRole.Admin, UserRole.SuperAdmin],
      },
    },
  },
};

export const SmallScreen: Story = {
  args: {
    user: {
      id: "1",
      emailAddress: "test@test.com",
      profile: {
        displayName: "Test User",
      },
      roles: {
        roles: [UserRole.SuperAdmin, UserRole.Admin],
      },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
};
