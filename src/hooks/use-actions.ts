import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "store/auth/actions";

export function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...authActions,
    },
    dispatch
  );
}
