import { MouseEvent, ReactNode } from "react";
import block from "bem-cn";
import "./Button.css";

type ButtonMode = "primary" | "secondary" | "dangerous";

const b = block("button");

export default function Button(props: {
  type?: "button" | "submit" | "reset";
  mode?: ButtonMode;
  classNames?: string | string[];
  children: ReactNode;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
}) {
  const {
    type = "button",
    mode = "secondary",
    classNames = [],
    onClick = () => {},
  } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={b({ mode }).mix(classNames)}
    >
      {props.children}
    </button>
  );
}
