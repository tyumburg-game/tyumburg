import { ReactNode } from "react";

type ModalContentProps = {
  children: ReactNode;
};

export default function ModalContent(props: ModalContentProps) {
  const { children } = props;

  return (
    <div className="modal__content">
      { children }
    </div>
  );
}
