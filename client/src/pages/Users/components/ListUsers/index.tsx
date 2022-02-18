import { Card } from 'antd';
import React from 'react';
import { deleteUser } from '../../../../api/UsersApi';
import { User } from '../../../../types/Users.type';
import { StyledButton } from '../../styles';
import { CardContainer } from './styles';

type Props = {
  users: User[];
};

export default function ListUsers(props: Props) {
  const { users } = props;

  return (
    <CardContainer>
      {users?.map((user) => {
        const userId = user._id;

        async function handleDeleteUser() {
          const result = await deleteUser(userId);
          console.log(result);
        }

        return (
          <Card
            key={userId}
            size='small'
            title={user.name}
            style={{ width: 300 }}
          >
            <StyledButton onClick={handleDeleteUser}>Delete</StyledButton>
            <StyledButton>Edit</StyledButton>
          </Card>
        );
      })}
    </CardContainer>
  );
}
