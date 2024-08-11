import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import React from "react";

type KeyboardActiveButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link"
      | null
      | undefined;
  };

function KeyboardActiveButton({
  className,
  onKeyDown,
  onKeyUp,
  onBlur,
  ...rest
}: KeyboardActiveButtonProps): JSX.Element | null {
  const [isKeyDown, setKeyDown] = React.useState<boolean>(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === " " || event.key === "Enter") setKeyDown(true);
    if (onKeyDown) onKeyDown(event);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === " " || event.key === "Enter") setKeyDown(false);
    if (onKeyUp) onKeyUp(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    setKeyDown(false);
    if (onBlur) onBlur(event);
  };

  return (
    <Button
      className={cn(className, isKeyDown ? "scale-90" : undefined)}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onBlur={handleBlur}
      {...rest}
    ></Button>
  );
}

export default KeyboardActiveButton;
