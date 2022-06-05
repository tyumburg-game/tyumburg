import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export function useActions(actions: any, deps = []) {
  const dispatch = useDispatch();

  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map((action) => bindActionCreators(action, dispatch));
    }

    return bindActionCreators(actions, dispatch);
  }, [dispatch, ...deps]);
}
