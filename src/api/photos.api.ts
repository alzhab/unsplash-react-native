import {BaseApi, Pagination} from './base.api';
import {IPhoto} from '@types';
import axios from 'axios';
import {API} from './constants';

class PhotosApi extends BaseApi<IPhoto> {
  constructor() {
    super('photos');
  }

  async searchPhotos(
    options: Pagination & {query?: string},
  ): Promise<IPhoto[]> {
    return axios
      .get(`${API}/search/photos`, {
        headers: this.getHeaders(),
        params: this.getParams(options),
      })
      .then((res) => res.data.results);
  }
}

const photosApi = new PhotosApi();

export default photosApi;
