import React from 'react';
import { User } from '../../../../types/Users.type';
import { CardContainer } from './styles';
import UserCard from '../UserCard';

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

        return <UserCard key={userId} user={user} getNewUsers={getNewUsers} />;
      })}
    </CardContainer>
  );
}
