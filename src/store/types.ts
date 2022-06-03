export interface BaseAction<T> {
  type: T;
  payload?: any;
}
