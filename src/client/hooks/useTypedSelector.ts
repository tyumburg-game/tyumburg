import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "store/types";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
