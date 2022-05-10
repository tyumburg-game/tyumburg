import block from "bem-cn";
import { ReactNode } from "react";
import "./ModalHeader.css";

type ModalHeaderProps = {
  title: string;
  children?: ReactNode;
  className?: string;
};

const b = block("modal-header");

export default function ModalHeader(props: ModalHeaderProps) {
  const { children, title, className } = props;

  return (
    <div className={b.mix(className)}>
      <div className="modal-header__title">{title}</div>
      {children}
    </div>
  );
}
