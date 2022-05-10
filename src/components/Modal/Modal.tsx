import block from "bem-cn";
import { ReactNode } from "react";
import ModalContent from "./components/ModalContent/ModalContent";
import ModalFooter from "./components/ModalFooter/ModalFooter";
import ModalHeader from "./components/ModalHeader/ModalHeader";
import "./Modal.css";

type ModalProps = {
  children: ReactNode;
  fixed?: boolean;
  className?: string;
};

const b = block("modal");

export default function Modal(props: ModalProps) {
  const { children, fixed = true, className } = props;

  return (
    <div className={b({ fixed }).mix(className)}>
      { children }
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
