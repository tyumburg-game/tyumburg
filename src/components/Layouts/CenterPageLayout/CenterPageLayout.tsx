import { ReactNode } from "react";
import block from "bem-cn";
import "./CenterPageLayout.css";

interface CenterPageLayoutProps {
  className?: string;
  children: ReactNode;
}

const b = block("center-page-layout");

export function CenterPageLayout(props: CenterPageLayoutProps) {
  const { className = "", children } = props;
  return <div className={b({}).mix(className)}>{children}</div>;
}
