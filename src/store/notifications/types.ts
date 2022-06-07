export type CustomNotification = {
  id: string;
  message: string;
  timeout?: number;
};

export type NewCustomNotification = Omit<CustomNotification, "id">;
