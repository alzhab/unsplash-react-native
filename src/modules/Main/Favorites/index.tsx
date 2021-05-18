import React from 'react';
import {GridList} from '@components';
import {favoritesStore} from '@stores';
import {observer} from 'mobx-react';

const Favorites = () => {
  return (
    <>
      <GridList
        data={favoritesStore.favoritePhotos.slice().reverse()}
        like={favoritesStore.toogleLike}
      />
    </>
  );
};

export default observer(Favorites);
