import { Meta, StoryObj } from "@storybook/react";
import ExampleForm from "./ExampleForm";
import { userEvent, within, expect, fireEvent } from "@storybook/test";

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

export const LargeScreenErrors: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);
    await expect(canvasElement.clientWidth).toBe(1280);

    const form = canvas.getByTitle("example form");

    await expect(form).toBeDefined();
    await expect(form).toBeVisible();

    // Hack to get error validation to appear.
    // Best I could do after an entire day tinkering with it.
    await fireEvent.submit(form);
    await userEvent.click(form);
  },
};

export const SmallScreenErrors: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);
    await expect(canvasElement.clientWidth).toBe(360);

    const form = canvas.getByTitle("example form");

    await expect(form).toBeDefined();
    await expect(form).toBeVisible();

    // Hack to get error validation to appear.
    // Best I could do after an entire day tinkering with it.
    await fireEvent.submit(form);
    await userEvent.click(form);
  },
};
