import axios from 'axios';
import { GenericResponse } from '../types/Generics.type';
import { GetUsersResponse, SaveUserResponse, User } from '../types/Users.type';

const baseUrl =
  process.env.REACT_APP_API_URL || 'http://localhost:8000/api/users';

async function saveUser(
  name: string
): Promise<GenericResponse<SaveUserResponse>> {
  try {
    const result = await axios.post(baseUrl, name);

    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getUsers(): Promise<GetUsersResponse> {
  try {
    const result = await axios.get(baseUrl);

    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteUser(id: string) {
  const url = baseUrl + `/${id}`;

  try {
    const result = await axios.delete(url);

    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function editUser(params: User) {
  const { _id, name } = params;
  const url = baseUrl + `/${_id}`;

  try {
    const result = await axios.put(url, name);

    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { deleteUser, editUser, getUsers, saveUser };
