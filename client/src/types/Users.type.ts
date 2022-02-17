type User = {
  name: string;
  __id: string;
};

type SaveUserResponse = {
  success: boolean;
  data: User;
};

export type { User, SaveUserResponse };
