/**
 * Sample React Native CustomButton
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';

const CustomInput = ({
  label,
  value,
  placeholder,
  onChange,
  isSecure = false,
  error = false,
  onBlur,
  errorText,
  customStyles,
  isNumber
}) => {
  console.log('props of input -->',onBlur)
  return (
    <>
      <TextInput
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange({text, name: label})}
        style={{...styles.input,...customStyles}}
        secureTextEntry={isSecure}
        error={error}
        onBlur={(e) => !!onBlur && (console.log('blur chala',onBlur),onBlur(label))}
        keyboardType={isNumber && "number-pad"}
      />
      <HelperText type={error ? "error" : "info"} visible >{errorText}</HelperText>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 287,
    backgroundColor: 'white',
    // marginBottom: 15,
    fontFamily: 'Nunito-Regular',
  },
});

export default CustomInput;
