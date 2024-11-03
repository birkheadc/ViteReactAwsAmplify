import { Meta, StoryObj } from "@storybook/react";
import CreateBookWidget from "./CreateBookWidget";
import { UserRole } from "../../../../types/user/userRole";

const meta: Meta<typeof CreateBookWidget> = {
  title: "Components/Pages/BooksPage/CreateBookWidget",
  component: CreateBookWidget,
};

export default meta;

type Story = StoryObj<typeof meta>;

const invalidUser = {
  id: "1",
  emailAddress: "test@test.com",
  profile: {
    displayName: "Test User",
  },
  roles: {
    roles: [],
  },
};

const validUser = {
  ...invalidUser,
  roles: {
    roles: [UserRole.SuperAdmin],
  },
};

export const NoUser: Story = {};

export const InvalidUser: Story = {
  parameters: {
    user: invalidUser,
  },
};

export const SmallScreen: Story = {
  parameters: {
    user: validUser,
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
};

export const LargeScreen: Story = {
  parameters: {
    user: validUser,
  },
};
