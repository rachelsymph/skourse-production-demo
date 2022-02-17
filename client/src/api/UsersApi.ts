import axios from 'axios';
import { GenericResponse } from '../types/Generics.type';
import { GetUsersResponse, SaveUserResponse } from '../types/Users.type';

async function saveUser(
  params: string
): Promise<GenericResponse<SaveUserResponse>> {
  const baseUrl =
    process.env.REACT_APP_API_URL || 'http://localhost:8000/api/users';

  try {
    const result = await axios.post(baseUrl, params);

    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getUsers(): Promise<GetUsersResponse> {
  const baseUrl =
    process.env.REACT_APP_API_URL || 'http://localhost:8000/api/users';

  try {
    const result = await axios.get(baseUrl);

    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { saveUser, getUsers };
