import { RootState } from "store/types";

export const selectUser = (state: RootState) => state.auth.user;
export const selectUserLoading = (state: RootState) => state.auth.loading;
