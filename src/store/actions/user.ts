import { User } from "types/user";
import { BaseActionType } from ".";

export enum Actions {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  SET_USER_ITEM = "SET_USER_ITEM",
}

export interface ItemActionType extends BaseActionType<Actions> {
  item: User;
}

export function loadSuccess(): BaseActionType<Actions> {
  return { type: Actions.SUCCESS };
}
export function loadFailed(): BaseActionType<Actions> {
  return { type: Actions.PENDING };
}
export function loadPending(): BaseActionType<Actions> {
  return { type: Actions.PENDING };
}
export function setUser(user: User): ItemActionType {
  return { type: Actions.SET_USER_ITEM, item: user };
}
