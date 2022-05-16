import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useLink() {
  const navigate = useNavigate();

  return useCallback(
    (url: string) => () => navigate(url),
    []
  );
}
