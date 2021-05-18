import React, {useEffect} from 'react';
import {GridList} from '@components';
import {favoritesStore, photosStore} from '@stores';
import {observer} from 'mobx-react';

const Home = () => {
  useEffect(() => {
    photosStore.init();
  }, []);
  
  useEffect(() => {
    if (photosStore.searchSuccess) {
      photosStore.refresh()
    }
  }, [photosStore.searchSuccess]);

  return (
    <>
      {!photosStore.photosInitLoading && (
        <GridList
          refreshLoading={photosStore.photosRefreshLoading}
          refresh={photosStore.refresh}
          data={photosStore.photos}
          loadMore={photosStore.loadMore}
          moreLoading={photosStore.photosMoreLoading}
          like={favoritesStore.toogleLike}
        />
      )}
    </>
  );
};

export default observer(Home);
