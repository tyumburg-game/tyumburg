import block from "bem-cn";
import { ReactNode, useMemo } from "react";
import "./ValidationMessage.css";

const b = block("validation-message");

export default function ValidationMessage(props: { children: ReactNode }) {
  return useMemo(
    () => <div className={b()}>{props.children}</div>,
    [props.children]
  );
}
