import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { memoize } from "utils/memoize";

export function useLink() {
  const navigate = useNavigate();

  return useCallback(
    memoize((url: string) => () => navigate(url)),
    []
  );
}
