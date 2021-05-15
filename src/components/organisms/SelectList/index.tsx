import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '@config/base';
import {Text} from '../../atoms';
import {Card} from '../../molecules';
import {CheckIcon} from '@icons';

const SelectList = ({
  list,
  select,
  value,
}: {
  list: {title: string; value: string}[];
  select: (value: string) => void;
  value: string;
}) => {
  return (
    <Card full>
      {list.map((item) => (
        <TouchableOpacity
          key={item.value}
          onPress={() => {
            select(item.value);
          }}
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 16,
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.BORDER.MAIN,
          }}>
          <Text>{item.title}</Text>

          {item.value === value ? (
            <CheckIcon sizeHeight={14} color={COLORS.PRIMARY.MAIN} />
          ) : null}
        </TouchableOpacity>
      ))}
    </Card>
  );
};

export default SelectList;
