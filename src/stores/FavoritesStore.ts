import {action, makeAutoObservable} from 'mobx';
import {IPhoto} from '@types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {photosStore} from './index';

class FavoritesStore {
  favoritePhotosIds: string[] = [];
  favoritePhotos: IPhoto[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action toogleLike = (photoId: string) => {
    const newPhotoIndex = photosStore.photos.findIndex((p) => p.id === photoId);
    let newFavoritePhotos = [];
    let newFavoritePhotosIds = [];

    if (newPhotoIndex !== -1) {
      const photo = photosStore.photos[newPhotoIndex];
      const newPhotos = [...photosStore.photos];
      const liked = photo.liked_by_user;
      const updatedPhoto = {
        ...photo,
        liked_by_user: !photo.liked_by_user,
      };

      newPhotos[newPhotoIndex] = updatedPhoto;
  
      photosStore.setPhotos(newPhotos);

      newFavoritePhotos = liked
        ? this.favoritePhotos.filter((favPhoto) => favPhoto.id !== photoId)
        : [...this.favoritePhotos, updatedPhoto];

      newFavoritePhotosIds = liked
        ? this.favoritePhotosIds.filter((id) => id !== photoId)
        : [...this.favoritePhotosIds, photoId];
    } else {
      newFavoritePhotos = this.favoritePhotos.filter(
        (favPhoto) => favPhoto.id !== photoId,
      );
      newFavoritePhotosIds = this.favoritePhotosIds.filter(
        (id) => id !== photoId,
      );
    }

    this.setFavoritePhotosIds(newFavoritePhotosIds);
    this.setFavoritePhotos(newFavoritePhotos);

    return AsyncStorage.setItem(
      'favoritesPhotos',
      JSON.stringify(this.favoritePhotos),
    ).catch((e) => {
      return Promise.reject('set favoritesPhotos data to storage error: ' + e);
    });
  };

  @action getFavoritesIdsFromStorage = () => {
    return AsyncStorage.getItem('favoritesPhotos')
      .then((res) => {
        if (res !== null) {
          let data: IPhoto[] = [];

          try {
            data = JSON.parse(res);
          } catch (e) {
            return Promise.reject('parse favorites ids data: ' + e);
          }
          this.setFavoritePhotos(data);
          this.setFavoritePhotosIds(data.map((item) => item.id));

          return data;
        } else {
          return [];
        }
      })
      .catch((e) => {
        return Promise.reject('get favorites ids from storage error: ' + e);
      });
  };

  @action setFavoritePhotos = (val: IPhoto[]) => {
    this.favoritePhotos = val;
  };

  @action setFavoritePhotosIds = (val: string[]) => {
    this.favoritePhotosIds = val;
  };
}

const favoritesStore = new FavoritesStore();
export default favoritesStore;
