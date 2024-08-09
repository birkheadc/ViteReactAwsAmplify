import { Button } from "@/components/ui/button";
import React from "react";

type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function SecondaryButton(props: SecondaryButtonProps): JSX.Element | null {
  return <Button {...props}></Button>;
}

export default SecondaryButton;
