import { ComponentProps } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Username from "../app/components/Username/username";

type UsernameProps = ComponentProps<typeof Username>;

export default {
  component: Username,
} as Meta<UsernameProps>;

export const Default: StoryFn<UsernameProps & { customArg: number }> = (
  args: UsernameProps & { customArg: number }
) => <Username {...args} />;
Default.args = {
  label: "Sergio Uriona",
};
