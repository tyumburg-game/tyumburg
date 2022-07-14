import React, { ErrorInfo, ReactNode } from "react";
import "./ErrorBoundary.css";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details className="errorBoundary">
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return children;
  }
}
