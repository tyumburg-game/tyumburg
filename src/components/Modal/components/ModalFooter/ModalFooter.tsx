import block from "bem-cn";
import { ReactNode } from "react";
import "./ModalFooter.css";

type ModalFooterProps = {
  children: ReactNode;
  className?: string;
};

const b = block("modal-footer");

export default function ModalFooter(props: ModalFooterProps) {
  const { children, className } = props;

  return <div className={b.mix(className)}>{children}</div>;
}
