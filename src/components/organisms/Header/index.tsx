import React from 'react';
import {COLORS} from '@config/base';
import {HEADER_PADDING_BOTTOM, HEADER_PADDING_TOP} from '@config/spacing';
import {AI, DIR, JC, Navigations} from '@types';
import {Flex} from '../../atoms';
import {Button} from '../../molecules';
import {HeartIcon, HistoryIcon, SearchIcon, UnsplashIcon} from '@icons';
import {useRoute} from '@react-navigation/native';
import {navigate} from '@utils';

const Header = () => {
  const route = useRoute();
  const activeName = route.name;

  return (
    <Flex
      full
      containerHor
      styles={{
        backgroundColor: COLORS.BG.SECOND,
        paddingTop: HEADER_PADDING_TOP,
        paddingBottom: HEADER_PADDING_BOTTOM,
      }}
      jc={JC.spaceBetween}
      ai={AI.center}
      dir={DIR.row}>
      <Button
        paddings={{top: 0}}
        click={() => {
          if (activeName !== Navigations.Main_Home) {
            navigate(Navigations.Main_Home);
          }
        }}
        icon={<UnsplashIcon color={COLORS.TEXT.SECOND} />}
      />

      <Flex dir={DIR.row} ai={AI.center}>
        <Button
          paddings={{top: 0}}
          click={() => {
            if (activeName !== Navigations.Main_Search) {
              navigate(Navigations.Main_Search);
            }
          }}
          icon={<SearchIcon />}
        />

        <Flex styles={{width: 24}} />

        <Button
          paddings={{top: 0}}
          click={() => {
            if (activeName !== Navigations.Main_Favorites) {
              navigate(Navigations.Main_Favorites);
            }
          }}
          icon={<HeartIcon />}
        />

        <Flex styles={{width: 24}} />

        <Button
          paddings={{top: 0}}
          click={() => {
            if (activeName !== Navigations.Main_History) {
              navigate(Navigations.Main_History);
            }
          }}
          icon={<HistoryIcon color={COLORS.TEXT.SECOND} />}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
