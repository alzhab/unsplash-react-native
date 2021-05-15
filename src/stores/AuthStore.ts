import {action, makeAutoObservable} from 'mobx';
import authApi, {ILogin, IRegister, SignupData} from '../api/auth.api';
import noticeMessageStore, {NoticeTypeEnum} from './NoticeMessageStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Navigations} from '@types';
import {catchErrors, navigate} from '@utils';

const dumbData = {
  token: 'token',
  userId: '1',
};

class AuthStore {
  private _authData = {token: '', userId: ''};
  private _isAuthorized = false;
  private _loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAuthDataFromStorage() {
    return AsyncStorage.getItem('auth')
      .then((res) => {
        if (res !== null) {
          let data;

          try {
            data = JSON.parse(res);
          } catch (e) {
            return Promise.reject('parse auth data: ' + e);
          }
          this.authData = data;

          return data;
        } else {
          return null;
        }
      })
      .catch((e) => {
        return Promise.reject('get auth data from storage error: ' + e);
      });
  }

  setAuthData(data: SignupData) {
    return AsyncStorage.setItem('auth', JSON.stringify(data))
      .then(() => {
        this.authData = data;
      })
      .catch((e) => {
        return Promise.reject('set auth data to storage error: ' + e);
      });
  }

  @action signup(body: IRegister) {
    this.loading = true;

    /*return authApi
      .signup(body)*/

    return new Promise((res) => {
      setTimeout(() => {
        res(true);
      }, 3000);
    })
      .then((data) => {
        if (data) {
          this.setAuthData(dumbData).then(() => {
            noticeMessageStore.showMessage(
              'Hello new user!',
              NoticeTypeEnum.success,
            );
            navigate(Navigations.Main);
          });
        }
      })
      .catch(catchErrors.storeCatchError)
      .finally(() => (this.loading = false));
  }

  @action login(body: ILogin) {
    this.loading = true;
    /* return authApi
      .login(body)*/

    return new Promise((res) => {
      setTimeout(() => {
        res(true);
      }, 3000);
    })
      .then((data) => {
        if (data) {
          this.setAuthData(dumbData).then(() => {
            noticeMessageStore.showMessage(
              'Welcome back!',
              NoticeTypeEnum.success,
            );
            navigate(Navigations.Main);
          });
        }
      })
      .catch(catchErrors.storeCatchError)
      .finally(() => (this.loading = false));
  }

  @action logout() {
    return this.setAuthData({token: '', userId: ''})
      .then(() => {
        navigate(Navigations.Auth);
      })
      .catch(catchErrors.storeCatchError);
  }

  get authData() {
    return this._authData;
  }

  set authData(data: SignupData) {
    this._isAuthorized = !!(data.token && data.userId);
    this._authData = data;
  }

  get isAuthorized() {
    return this._isAuthorized;
  }

  set loading(val: boolean) {
    this._loading = val;
  }

  get loading() {
    return this._loading;
  }
}

const authStore = new AuthStore();
export default authStore;
