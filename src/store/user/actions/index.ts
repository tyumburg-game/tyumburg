import { BaseAction } from "store/types";
import { User } from "types/user";

export enum Actions {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  SET_USER_ITEM = "SET_USER_ITEM",
}

export interface ItemAction extends BaseAction<Actions> {
  item: User;
}

export function loadSuccess(): BaseAction<Actions> {
  return { type: Actions.SUCCESS };
}
export function loadFailed(): BaseAction<Actions> {
  return { type: Actions.PENDING };
}
export function loadPending(): BaseAction<Actions> {
  return { type: Actions.PENDING };
}
export function setUser(user: User): ItemAction {
  return { type: Actions.SET_USER_ITEM, item: user };
}
