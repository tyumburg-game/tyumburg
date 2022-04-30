import { FC, ReactNode } from "react";
import "./Button.css";

type ButtonStyle = "primary" | "secondary" | "dangerous";
type ButtonIntention = "default" | "dangerous";

const Button: FC<{
  type?: "button" | "submit" | "reset";
  intention?: ButtonIntention;
  mode?: ButtonStyle;
  parentClassName?: string | string[];
  children?: ReactNode;
}> = (props) => {
  return (
    <button
      type={props.type ?? "button"}
      className={getClassName(
        props.parentClassName,
        props.mode,
        props.intention
      )}
    >
      {props.children}
    </button>
  );
};

function getClassName(
  parentClassName?: string | string[],
  style?: ButtonStyle,
  intention: ButtonIntention = "default"
): string {
  const parent = parentClassName
    ? Array.isArray(parentClassName)
      ? parentClassName
      : [parentClassName]
    : [];
  const intentionClassName =
    intention === "default"
      ? "button_intention_default"
      : "button_intention_dangerous";
  return [
    "button",
    resolveClassNameByStyle(style),
    intentionClassName,
    ...parent,
  ].join(" ");
}

function resolveClassNameByStyle(style?: ButtonStyle): string {
  switch (style) {
    case "secondary":
      return "button_style_secondary";
    case "dangerous":
      return "button_style_dangerous";
    case "primary":
    default:
      return "button_style_primary";
  }
}

export default Button;
