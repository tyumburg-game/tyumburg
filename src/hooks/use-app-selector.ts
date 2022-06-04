import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "store/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
