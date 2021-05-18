import React from 'react';
import {TextInput} from 'react-native';
import {COLORS} from '@config/base';
import {InputProps} from './interfaces';
import {TextInputMask} from 'react-native-masked-text';
import {styles} from './styles';

const Input = (props: InputProps) => {
  return props.mask ? (
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
      autoCorrect={false}
      textAlign={'center'}
      secureTextEntry={props.secureTextEntry}
      autoCapitalize="none"
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor={COLORS.TEXT.SECOND}
      multiline={props.textArea}
      keyboardType={props.keyboardType || 'default'}
      style={[styles.inputStyle]}
      onChangeText={props.onChange}
      selectionColor={COLORS.TEXT.SECOND}
      onSubmitEditing={() => {
        if (props.onSubmit) {
          props.onSubmit();
        }
      }}
    />
  );
};

export default Input;
