import {action, makeAutoObservable} from 'mobx';
import {IPhoto} from '@types';
import photosApi from '../api/photos.api';
import catchErrors from '../utils/catchErrors';
import {favoritesStore} from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';

class PhotosStore {
  photosInitLoading: boolean = false;
  photosRefreshLoading: boolean = false;
  photosMoreLoading: boolean = false;
  photos: IPhoto[] = [];

  searchValue: string = '';
  searchHistory: string[] = [];
  searchSuccess: boolean = false;

  pagination: {page: number; per_page: number} = {
    page: 1,
    per_page: 4,
  };

  constructor() {
    makeAutoObservable(this);
  }

  @action searchSubmit = (val: string) => {
    this.setSearchValue(val);

    if (!this.searchHistory.includes(val)) {
      const newSearchHistory = [...this.searchHistory];

      if (newSearchHistory.length >= 20) {
        newSearchHistory.shift();
      }

      newSearchHistory.push(val);

      this.setSearchHistory(newSearchHistory);

      AsyncStorage.setItem(
        'searchHistory',
        JSON.stringify(newSearchHistory),
      ).catch((e) => {
        return Promise.reject('set search history data to storage error: ' + e);
      });
    }

    this.setSearchSuccess(true);
  };

  @action getSearchHistoryFromStorage = () => {
    return AsyncStorage.getItem('searchHistory')
      .then((res) => {
        if (res !== null) {
          let data: string[] = [];

          try {
            data = JSON.parse(res);
          } catch (e) {
            return Promise.reject('parse search history ids data: ' + e);
          }
          this.setSearchHistory(data);

          return data;
        } else {
          return [];
        }
      })
      .catch((e) => {
        return Promise.reject(
          'get search history ids from storage error: ' + e,
        );
      });
  };

  @action refresh = () => {
    this.setRefreshLoading(true);
    this.setPagination({page: 1, per_page: 4});
    return this.loadPhotos()
      .then((res) => {
        if (res) {
          this.setPhotos(res);
        }
      })
      .finally(() => {
        this.setRefreshLoading(false);
        this.setSearchSuccess(false);
      });
  };

  @action init = () => {
    this.setInitLoading(true);
    this.loadPhotos()
      .then((res) => {
        if (res) {
          this.setPhotos(res);
        }
      })
      .finally(() => {
        this.setInitLoading(false);
      });
  };

  @action loadMore = () => {
    this.setPagination({
      page: ++this.pagination.page,
      per_page: this.pagination.per_page,
    });
    this.setMoreLoading(true);
    this.loadPhotos()
      .then((res) => {
        if (res) {
          this.setPhotos([...this.photos, ...res]);
        }
      })
      .finally(() => {
        this.setMoreLoading(false);
      });
  };

  @action private loadPhotos = (): Promise<IPhoto[] | void> => {
    if (!!this.searchValue) {
      return photosApi
        .searchPhotos({...this.pagination, query: this.searchValue})
        .then((res) => {
          return res.map((item) => ({
            ...item,
            liked_by_user: favoritesStore.favoritePhotosIds.includes(item.id),
          }));
        })
        .catch(catchErrors.storeCatchError);
    } else {
      return photosApi
        .getAll(this.pagination)
        .then((res) => {
          return res.map((item) => ({
            ...item,
            liked_by_user: favoritesStore.favoritePhotosIds.includes(item.id),
          }));
        })
        .catch(catchErrors.storeCatchError);
    }
  };

  @action setInitLoading = (val: boolean) => {
    this.photosInitLoading = val;
  };

  @action setRefreshLoading = (val: boolean) => {
    this.photosRefreshLoading = val;
  };

  @action setMoreLoading = (val: boolean) => {
    this.photosMoreLoading = val;
  };

  @action setPhotos = (val: IPhoto[]) => {
    this.photos = val;
  };

  @action setPagination = (val: {page: number; per_page: number}) => {
    this.pagination = val;
  };

  @action setSearchHistory = (val: string[]) => {
    this.searchHistory = val;
  };

  @action setSearchValue = (val: string) => {
    this.searchValue = val;
  };

  @action setSearchSuccess = (val: boolean) => {
    this.searchSuccess = val;
  };
}

const photosStore = new PhotosStore();
export default photosStore;
