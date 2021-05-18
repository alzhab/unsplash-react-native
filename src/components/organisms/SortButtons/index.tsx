import React from 'react';
import {Button, Flex} from '@components';
import {AI, DIR, JC, SortButtonsTypes} from '@types';
import {verticalScale} from '@config/mixins';
import {GridSortIcon, ListSortIcon} from '@icons';
import {COLORS} from '@config/base';

interface IProps {
  active: SortButtonsTypes;
  click: (type: SortButtonsTypes) => void;
}

const SortButtons = ({active, click}: IProps) => {
  return (
    <Flex
      full
      containerHor
      dir={DIR.row}
      ai={AI.center}
      jc={JC.center}
      styles={{
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(30),
      }}>
      <Button
        paddings={{top: 0}}
        click={() => click(SortButtonsTypes.list)}
        icon={
          <ListSortIcon
            color={
              active === SortButtonsTypes.list
                ? COLORS.TEXT.MAIN
                : COLORS.TEXT.TRETIARY
            }
          />
        }
      />

      <Flex styles={{width: 20}} />

      <Button
        paddings={{top: 0}}
        click={() => click(SortButtonsTypes.grid)}
        icon={
          <GridSortIcon
            color={
              active === SortButtonsTypes.grid
                ? COLORS.TEXT.MAIN
                : COLORS.TEXT.TRETIARY
            }
          />
        }
      />
    </Flex>
  );
};

export default SortButtons;
