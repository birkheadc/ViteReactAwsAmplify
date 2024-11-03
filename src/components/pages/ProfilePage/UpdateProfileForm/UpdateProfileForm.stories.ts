import { Meta, StoryObj } from "@storybook/react";
import UpdateProfileForm from "./UpdateProfileForm";
import { UserRole } from "../../../../types/user/userRole";

const meta: Meta<typeof UpdateProfileForm> = {
  title: "Components/Pages/ProfilePage/UpdateProfileForm",
  component: UpdateProfileForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

const user = {
  id: "1",
  emailAddress: "test@test.com",
  profile: {
    displayName: "Test User",
  },
  roles: {
    roles: [UserRole.SuperAdmin],
  },
};

export const LargeScreen: Story = {
  parameters: {
    user: user,
  },
};

export const SmallScreen: Story = {
  parameters: {
    user: user,
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
};
