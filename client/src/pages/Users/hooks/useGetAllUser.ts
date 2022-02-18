import { useEffect, useState } from 'react';
import { getUsers } from '../../../api/UsersApi';
import { User } from '../../../types/Users.type';

type Results = [User[], boolean, string, () => void];

export default function useGetAllUsers(): Results {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getNames = async () => {
    const result = await getUsers();
    setUsers(result.data);
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        await getNames();
        setIsLoading(false);
      } catch (err) {
        setError('Something went wrong');
      }
    }
    fetchUsers();
  }, []);

  return [users, isLoading, error, getNames];
}
