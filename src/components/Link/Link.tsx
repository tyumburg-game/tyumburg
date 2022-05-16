import block from "bem-cn";
import "./Link.css";
import { Link, LinkProps } from "react-router-dom";

interface CustomLinkProps extends LinkProps {
  mode?: "primary" | "secondary" | "dangerous";
}

const b = block("link");

export default function CustomLink(props: CustomLinkProps) {
  const { mode = "secondary", className = "", to, children } = props;

  return (
    <Link className={b({ mode }).mix(className)} to={to}>
      {children}
    </Link>
  );
}
