import { MouseEvent, ReactNode } from "react";
import block from "bem-cn";
import "./Button.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  mode?: "primary" | "secondary" | "dangerous";
  className?: string;
  children: ReactNode;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
};

const b = block("button");

export default function Button(props: ButtonProps) {
  const {
    type = "button",
    mode = "secondary",
    className = "",
    children,
    onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      className={b({ mode }).mix(className)}
    >
      {children}
    </button>
  );
}
