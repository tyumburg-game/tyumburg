import { UserModel } from "./models";

const fillDatabase = async (): Promise<void> => {
  await UserModel.create({
    avatar: "1",
    email: "2",
    login: "3",
    phone: "4",
    display_name: "display name",
    first_name: "first name",
    second_name: "second name",
  });
};

export { fillDatabase };
