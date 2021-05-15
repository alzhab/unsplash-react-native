import React, {ReactElement} from 'react';
import {ButtonProps, ButtonStylesInterface} from './interfaces';
import {TouchableOpacity} from 'react-native';
import {boxShadow, horizontalScale} from '@config/mixins';
import {COLORS} from '@config/base';
import {Flex, Text} from '../../atoms';
import {ButtonTypes, TextAlign, TextFamily} from '@types';
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
  borderRad,
  paddings,
}: ButtonProps): ReactElement => {
  let shadowColor = COLORS.PRIMARY.MAIN;

  const defaultStyles: ButtonStylesInterface = {
    borderRadius: borderRad ? horizontalScale(borderRad) : horizontalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  };

  let color = COLORS.TEXT.TRETIARY;

  switch (type) {
    case ButtonTypes.PRIMARY:
      color = COLORS.TEXT.TRETIARY;
      defaultStyles.backgroundColor = COLORS.PRIMARY.MAIN;
      break;
    case ButtonTypes.DISABLED:
      shadowColor = COLORS.BG.SECOND;
      color = COLORS.TEXT.SECOND;
      defaultStyles.backgroundColor = COLORS.BG.SECOND;
      break;
    case ButtonTypes.EMPTY:
      shadowColor = 'transparent';
      defaultStyles.backgroundColor = 'transparent';
      defaultStyles.borderWidth = 0;
      defaultStyles.borderColor = 'transparent';
      color = COLORS.TEXT.MAIN;
      break;
    case ButtonTypes.BORDERED:
      defaultStyles.backgroundColor = 'transparent';
      defaultStyles.borderWidth = 1;
      defaultStyles.borderColor = COLORS.PRIMARY.MAIN;
      color = COLORS.PRIMARY.MAIN;
      break;
  }

  return (
    <TouchableOpacity
      disabled={type === ButtonTypes.DISABLED}
      activeOpacity={activeOpacity ? activeOpacity : 0.9}
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
        boxShadow(shadowColor),
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
