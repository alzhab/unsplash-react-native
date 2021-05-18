import {FindManyOptions, FindOneOptions, SaveOptions} from 'typeorm';

import {API} from './constants';
import axios from 'axios';

export interface BaseEntity {
  id: string;
  create_at: Date;
  updated_at: Date;
}

export interface Pagination {
  page?: number;
  per_page?: number;
  order_by?: 'latest' | 'oldest' | 'popular';
}

export class BaseApi<T, C = T, P = T> {
  readonly api: string;

  constructor(path: string) {
    this.api = `${API}/${path}`;
  }

  async getAll(options?: Pagination): Promise<T[]> {
    return axios
      .get(`${this.api}`, {
        headers: this.getHeaders(),
        params: this.getParams(options),
      })
      .then((res) => res.data);
  }

  async getById(id: number, options?: Pagination): Promise<T> {
    return axios
      .get(`${this.api}/${id}`, {
        headers: this.getHeaders(),
        params: this.getParams(options),
      })
      .then((res) => res.data);
  }

  async post(data: C, options?: SaveOptions): Promise<T> {
    return axios.post(`${this.api}`, data, {
      headers: this.getHeaders(),
      params: this.getParams(options),
    });
  }

  async destroyById(id: number): Promise<T> {
    return axios.delete(`${this.api}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  async patch(data: P): Promise<T> {
    return axios.patch(`${this.api}`, data, {
      headers: this.getHeaders(),
      params: this.getParams(),
    });
  }

  async getHeaders({image}: {image?: boolean} = {}) {
    if (image) {
      return {
        'Content-Type': 'multipart/form-data',
      };
    }

    return {};
  }

  getParams(options: any = null) {
    const unsplashApi = {
      client_id: 'DL6KfFN3GN67Jb7hYg8rqyRbD6B0y2xZL5Rzai2jUKg',
    };

    if (options) {
      return {
        ...options,
        ...unsplashApi,
      };
    } else {
      return {
        ...unsplashApi,
      };
    }
  }
}
