import {API} from './constants';
import axios from 'axios';
import {ILogin, IRegister, SignupData} from '@types';

class AuthApi {
  private readonly api: string;

  constructor() {
    this.api = `${API}/auth`;
  }

  async signup(data: IRegister): Promise<SignupData> {
    return axios.post(`${this.api}/register`, data).then((res) => {
      return res.data;
    });
  }

  async login(data: ILogin): Promise<SignupData> {
    return axios.post(`${this.api}/login`, data).then((res) => {
      return res.data;
    });
  }
}

const authApi = new AuthApi();

export default authApi;
