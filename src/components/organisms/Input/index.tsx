import React from 'react';
import {TextInput} from 'react-native';
import {COLORS} from '@config/base';
import {InputProps} from './interfaces';
import {TextInputMask} from 'react-native-masked-text';
import {styles} from './styles';
import {InputContainer} from '../../molecules';
import {InputContainerProps} from '../../molecules/InputContainer/interfaces';

const Input = (props: InputContainerProps & InputProps) => {
  return (
    <InputContainer {...props}>
      {props.mask ? (
        <TextInputMask
          type="custom"
          options={{mask: props.mask}}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize="none"
          keyboardType={props.keyboardType || 'default'}
          style={[styles.inputStyle]}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.TEXT.SECOND}
          caretHidden={props.caretHidden}
          onChangeText={(val: string) => {
            if (props.onChange) {
              props.onChange(val);
            }
          }}
        />
      ) : (
        <TextInput
          selectionColor={COLORS.PRIMARY.MAIN}
          autoCorrect={false}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize="none"
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={COLORS.TEXT.SECOND}
          multiline={props.textArea}
          keyboardType={props.keyboardType || 'default'}
          style={[
            styles.inputStyle,
            {
              borderColor: props.valid
                ? COLORS.OTHER.SUCCESS
                : props.error
                ? COLORS.OTHER.ERROR
                : COLORS.BORDER.MAIN,
            },
          ]}
          caretHidden={props.caretHidden}
          onChangeText={props.onChange}
        />
      )}
    </InputContainer>
  );
};

export default Input;
