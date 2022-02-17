import axios from 'axios';
import { GenericResponse } from '../types/Generics.type';
import { SaveUserResponse } from '../types/Users.type';

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

export { saveUser };
