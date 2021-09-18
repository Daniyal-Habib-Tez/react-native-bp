/**
 * Sample React Native CustomButton
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native'
import {Checkbox} from 'react-native-paper';
import {color} from '../../../theme'

const CustomCheckbox = (props) => {
  return (
    <Checkbox
        status={props.checked ? 'checked' : 'unchecked'}
        onPress={() => props.onPress()}
        color={color.primary}
      />
  );
};

const styles = StyleSheet.create({
    input:{
        width:287,
        backgroundColor: "white",
        marginVertical:20
    }
});

export default CustomCheckbox;
