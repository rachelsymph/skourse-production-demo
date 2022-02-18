import { Card } from 'antd';
import React from 'react';
import { deleteUser, getUsers } from '../../../../api/UsersApi';
import { User } from '../../../../types/Users.type';
import { StyledButton } from '../../styles';
import { CardContainer } from './styles';

type Props = {
  users: User[] | undefined;
  getNewUsers: () => void;
};

export default function ListUsers(props: Props) {
  const { users, getNewUsers } = props;

  return (
    <CardContainer>
      {users?.map((user) => {
        const userId = user._id;

        async function handleDeleteUser() {
          await deleteUser(userId);
          getNewUsers();
        }

        return (
          <Card
            key={userId}
            size='small'
            title={user.name}
            style={{ width: 300 }}
          >
            <StyledButton onClick={handleDeleteUser}>Delete</StyledButton>
          </Card>
        );
      })}
    </CardContainer>
  );
}
