import React, {useState} from 'react';
import {Flex, Text} from '../../atoms';
import {Button, Card, InputContainer} from '../../molecules';
import {AI, ButtonTypes, DIR, JC} from '@types';
import DatePicker from 'react-native-date-picker';
import {observer} from 'mobx-react';
import {modalStore} from '@stores';
import moment from 'moment';
import {horizontalScale} from '@config/mixins';
import {COLORS} from '@config/base';
import {CalendareIcon} from '@icons';
import {InputContainerProps} from '../../molecules/InputContainer/interfaces';

const DateInput = (
  props: InputContainerProps & {
    value: Date | null;
    setValue: (val: Date) => void;
  },
) => {
  const dateMax = moment().subtract(16, 'years').toDate();
  const dateMin = moment(dateMax).subtract(100, 'years').toDate();

  const openPicker = () => {
    modalStore.showModal(() => (
      <Card full>
        <DatePicker
          mode={'date'}
          minimumDate={dateMin}
          maximumDate={dateMax}
          androidVariant="iosClone"
          accessibilityViewIsModal={true}
          date={props.value || dateMax}
          onDateChange={(value) => props.setValue(moment(value).toDate())}
        />
      </Card>
    ));
  };

  return (
    <>
      <InputContainer {...props}>
        <Flex full dir={DIR.row} jc={JC.spaceBetween} ai={AI.center}>
          <Flex
            jc={JC.center}
            styles={{
              paddingVertical: horizontalScale(13),
              paddingHorizontal: horizontalScale(10),
              borderWidth: 1,
              borderColor: props.valid
                ? COLORS.OTHER.SUCCESS
                : props.error
                ? COLORS.OTHER.ERROR
                : COLORS.TEXT.SECOND,
              borderRadius: 8,
              width: '80%',
            }}>
            <Text
              lineHeight={18}
              size={18}
              color={props.value ? COLORS.TEXT.MAIN : COLORS.TEXT.SECOND}>
              {props.value
                ? moment(props.value).format('DD.MM.YYYY')
                : 'DD.MM.YYYY'}
            </Text>
          </Flex>

          <Button
            empty
            styles={{paddingHorizontal: 15}}
            type={ButtonTypes.EMPTY}
            click={openPicker}>
            <CalendareIcon sizeHeight={30} />
          </Button>
        </Flex>
      </InputContainer>
    </>
  );
};

export default observer(DateInput);
