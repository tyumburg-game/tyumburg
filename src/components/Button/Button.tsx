import { MouseEvent, ReactNode } from "react";
import block from "bem-cn";
import "./Button.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  mode?: "primary" | "secondary" | "dangerous";
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
};

const b = block("button");

export default function Button(props: ButtonProps) {
  const {
    type = "button",
    mode = "secondary",
    disabled = false,
    className,
    children,
    onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={b({ mode }).mix(className)}
    >
      {children}
    </button>
  );
}
