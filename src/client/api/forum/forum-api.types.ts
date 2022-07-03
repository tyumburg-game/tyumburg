export interface TopicForum {
  id: number;
  content: string;
  title: string;
  user: UserForum;
}

export interface UserForum {
  id: number
  avatar: string
  createdAt: string
  display_name: string
  email: string
  first_name: string
  login: string
  phone: string
  second_name: string
  updatedAt: string
}
