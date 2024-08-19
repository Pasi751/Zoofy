import { setToken, clearToken } from './loginSlice';
import UserService from '../../services/userService';

export const login = (username, password) => async (dispatch) => {
  try {
    const token = await UserService.login(username, password);
    console.log(token)
    dispatch(setToken(token));
  } catch (error) {
    // Handle login failure, e.g., show an error message.
    console.log(error)
  }
};

export const logout = () => (dispatch) => {
  UserService.logout(); // Perform logout operations.
  dispatch(clearToken());
};
