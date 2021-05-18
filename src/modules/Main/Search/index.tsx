import React, {useEffect, useState} from 'react';
import {BorderLine, Button, Flex, Input} from '@components';
import {COLORS} from '@config/base';
import {AI, DIR, JC, Navigations} from '@types';
import {photosStore} from '@stores';
import {scaleFont, verticalScale} from '@config/mixins';
import {observer} from 'mobx-react';
import {navigate} from '@utils';

const Search = () => {
  const [searchValue, setSearch] = useState(photosStore.searchValue);

  useEffect(() => {
    console.log(photosStore.searchSuccess);
    if (photosStore.searchSuccess) {
      navigate(Navigations.Main_Home);
    }
  }, [photosStore.searchSuccess]);

  return (
    <Flex
      size={1}
      containerHor
      ai={AI.center}
      full
      styles={{
        backgroundColor: COLORS.BG.SECOND,
      }}>
      <Input
        placeholder={'Поиск'}
        value={searchValue}
        onChange={setSearch}
        onSubmit={() => {
          photosStore.searchSubmit(searchValue);
        }}
      />

      <BorderLine />

      <Flex
        styles={{width: '65%', marginTop: verticalScale(25)}}
        dir={DIR.row}
        wrap
        jc={JC.center}>
        {photosStore.searchHistory
          .slice()
          .reverse()
          .map((search, index) => (
            <Button
              size={scaleFont(18)}
              color={COLORS.TEXT.SECOND}
              key={index.toString()}
              click={() => {
                photosStore.setSearchValue(search);
                photosStore.searchSubmit(search);
              }}
              title={search}
            />
          ))}
      </Flex>
    </Flex>
  );
};

export default observer(Search);
