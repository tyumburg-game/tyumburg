import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { memoize } from "utils/memoize";

export function useLink() {
  const navigate = useNavigate();

  const onNavigate = useCallback(
    memoize(
      (url: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        navigate(url)
    ),
    []
  );

  return onNavigate;
}
