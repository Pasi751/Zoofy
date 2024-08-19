const BASE_URL = 'http://localhost:8080'


class UserService {
  static async login(username, password) {
    try {

      //change this to your login endpoint
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      console.log(data.message);

      return data.message;
    } catch (error) {
      console.error("error: ",error)
      console.log("comes here")
      throw new Error('Login failed');
    }
  }

  static logout() {
    return { type: 'user/logout' };
  }
}

export default UserService;
