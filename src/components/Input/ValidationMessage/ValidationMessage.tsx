import block from "bem-cn";
import { ReactNode } from "react";
import "./ValidationMessage.css";

const b = block("validation-message");

export default function ValidationMessage(props: { children: ReactNode }) {
  return <div className={b()}>{props.children}</div>;
}
