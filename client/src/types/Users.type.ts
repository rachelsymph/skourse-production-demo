type User = {
  name: string;
  __id: string;
};

type SaveUserResponse = {
  success: boolean;
  data: User;
};

type GetUsersResponse = {
  succuss: boolean;
  data: User[];
};

export type { GetUsersResponse, User, SaveUserResponse };
