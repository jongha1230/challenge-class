class Auth_API {
  #axios;

  constructor(axios) {
    this.#axios = axios;
  }

  // signUp: 회원가입을 수행합니다.
  async signUp(data) {
    const path = "/auth/sign-up";

    const response = await this.#axios.post(path, data);
    const result = response.data.result;

    return result;
  }

  // logIn: 로그인 수행합니다.
  async logIn(data) {
    const path = "/auth/log-in";

    const response = await this.#axios.post(path, data);
    const result = response.data.result;

    return result;
  }

  // logOut: 로그아웃 수행합니다.
  async logOut() {
    const path = "/auth/log-out";

    const response = await this.#axios.delete(path);
    const result = response.data.result;

    return result;
  }

  // refreshToken: accessToken을 리프레시합니다.
  async refreshToken() {
    const path = "/auth/refresh-token";

    const response = await this.#axios.get(path);
    const result = response.data.result;

    return result;
  }
}

export default Auth_API;
