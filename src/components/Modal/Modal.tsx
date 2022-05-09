import block from "bem-cn";
import { ReactNode } from "react";
import ModalContent from "./components/ModalContent";
import ModalFooter from "./components/ModalFooter";
import ModalHeader from "./components/ModalHeader";
import "./Modal.css";

type ModalProps = {
  children: ReactNode;
  type?: "fixed" | "dialog";
  classNames?: string | string[];
};

const b = block("modal");

export default function Modal(props: ModalProps) {
  const { children, type = "fixed", classNames } = props;

  return (
    <div className={b({ type }).mix(classNames)}>
      { children }
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
