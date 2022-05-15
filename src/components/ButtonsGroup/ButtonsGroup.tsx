import { ReactNode } from "react";
import block from "bem-cn";
import "./ButtonsGroup.css";

interface ButtonsGroupProps {
  direction?: "horizontal" | "vertical";
  className?: string;
  children: ReactNode;
}

const b = block("buttons-group");

export function ButtonsGroup(props: ButtonsGroupProps) {
  const { direction = "horizontal", className = "", children } = props;

  return <div className={b({ direction }).mix(className)}>{children}</div>;
}
