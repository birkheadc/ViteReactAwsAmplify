import React from "react";
import KeyboardActiveButton from "../KeyboardActiveButton/KeyboardActiveButton";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function PrimaryButton(props: PrimaryButtonProps): JSX.Element | null {
  return (
    <KeyboardActiveButton variant={"default"} {...props}></KeyboardActiveButton>
  );
}

export default PrimaryButton;