import block from "bem-cn";
import { memo, ReactNode } from "react";
import "./ValidationMessage.css";

const b = block("validation-message");

function ValidationMessage({ children }: { children: ReactNode }) {
  return <div className={b()}>{children}</div>;
}

export default memo(ValidationMessage);
