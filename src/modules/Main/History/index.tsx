import React from 'react';
import {Button, Flex, Text} from '@components';
import {COLORS} from '@config/base';
import {AI, DIR, JC, TextAlign} from '@types';
import {photosStore} from '@stores';
import {scaleFont, verticalScale} from '@config/mixins';
import {observer} from 'mobx-react';

const History = () => {
  return (
    <Flex
      size={1}
      containerHor
      ai={AI.center}
      full
      styles={{
        backgroundColor: COLORS.BG.SECOND,
      }}>
      <Text
        styles={{
          paddingTop: verticalScale(38),
          paddingBottom: verticalScale(20),
        }}
        size={36}
        textAlign={TextAlign.center}
        color={COLORS.TEXT.SECOND}>
        Ваши запросы
      </Text>

      <Flex
        styles={{width: '100%', marginTop: verticalScale(25)}}
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

export default observer(History);
