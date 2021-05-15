import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async (): Promise<string | null> => {
  const res = await AsyncStorage.getItem('auth');

  let data;

  if (res) {
    try {
      data = JSON.parse(res);
      return data.token;
    } catch (e) {
      return Promise.reject('parse auth data: ' + e);
    }
  }

  return null;
};

export const setupAxios = async (domain: string) => {
  axios.defaults.baseURL = domain;
  axios.interceptors.request.use(
    async (config) => {
      const authToken = await getToken();
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    (err) => Promise.reject(err),
  );

  axios.interceptors.response.use(
    (response) => {
      JSON.stringify(response, null, 2);
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
