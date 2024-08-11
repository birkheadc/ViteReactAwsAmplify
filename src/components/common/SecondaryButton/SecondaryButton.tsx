import KeyboardActiveButton from "@/components/common/KeyboardActiveButton/KeyboardActiveButton";
import React from "react";

type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function SecondaryButton(props: SecondaryButtonProps): JSX.Element | null {
  return (
    <KeyboardActiveButton
      variant={"secondary"}
      {...props}
    ></KeyboardActiveButton>
  );
}

export default SecondaryButton;
