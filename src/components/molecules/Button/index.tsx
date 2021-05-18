import React, {ReactElement} from 'react';
import {ButtonProps, ButtonStylesInterface} from './interfaces';
import {TouchableOpacity} from 'react-native';
import {boxShadow, horizontalScale} from '@config/mixins';
import {COLORS} from '@config/base';
import {Flex, Text} from '../../atoms';
import {AI, ButtonTypes, JC, TextAlign, TextFamily} from '@types';
import {padding} from '@utils';

const Index = ({
  title,
  icon,
  iconPosition = 'left',
  full,
  size,
  family,
  type = ButtonTypes.PRIMARY,
  styles,
  click,
  children,
  color: propsColor,
  activeOpacity,
  paddings,
}: ButtonProps): ReactElement => {
  const defaultStyles: ButtonStylesInterface = {
    alignItems: 'center',
    justifyContent: 'center',
  };

  let color = COLORS.TEXT.TRETIARY;

  switch (type) {
    case ButtonTypes.PRIMARY:
      color = COLORS.TEXT.TRETIARY;
      break;
    case ButtonTypes.DISABLED:
      color = COLORS.TEXT.SECOND;
      break;
    case ButtonTypes.EMPTY:
      color = COLORS.TEXT.MAIN;
      break;
  }

  return (
    <TouchableOpacity
      disabled={type === ButtonTypes.DISABLED}
      activeOpacity={activeOpacity ? activeOpacity : 0.5}
      onPress={() => {
        if (type !== ButtonTypes.DISABLED) {
          click();
        }
      }}
      style={[
        {
          width: full ? '100%' : null,
          flexDirection: 'row',
        },
        defaultStyles,
        styles,
        padding(paddings || {top: 18, right: 15}),
      ]}>
      {children ? (
        children
      ) : (
        <>
          {icon && iconPosition === 'left' ? (
            <Flex styles={{marginRight: title ? 14 : 0}}>{icon}</Flex>
          ) : null}

          {title ? (
            <Text
              color={propsColor ? propsColor : color}
              size={size}
              family={family || TextFamily.BOLD}
              textAlign={TextAlign.center}>
              {title}
            </Text>
          ) : null}

          {icon && iconPosition === 'right' ? (
            <Flex styles={{marginLeft: title ? 14 : 0}}>{icon}</Flex>
          ) : null}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Index;
