/**
 * Sample React Native CustomButton
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const CustomButton = (props) => {
  return (
    <Button
      mode={props.mode ? props.mode : "contained"}
      loading={props.loading}
      onPress={() => props.onPress()}
      disabled={props.loading}
      dark={true}
      style={{
        width: 286,
        borderRadius: 10,
        // backgroundColor: theme.color.primary,
        ...props.style,
      }}
      labelStyle={{
        ...props.labelStyle,
      }}>
      {props.label}
    </Button>
  );
};

const InlineButton = (props) => {
  return (
    <Button
      mode={props.mode ? props.mode : "contained"}
      loading={props.loading}
      onPress={() => props.onPress()}
      disabled={props.disabled}
      dark={true}
      style={{
        minWidth: 80,
        borderRadius: 10,
        // backgroundColor: theme.color.primary,
        ...props.style,
      }}
      labelStyle={{
        ...props.labelStyle,

      }}>
      {props.label}
    </Button>
  );
};

const GroupedButton = (props) => {
  return (
    <>
      <Button
        mode={props.activeTab == 0 ? 'contained' : 'outlined'}
        onPress={() => props.onPress()}
        style={{
          ...styles.groupButton,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}>
        {props.label[0]}
      </Button>
      <Button
        mode={props.activeTab == 1 ? 'contained' : 'outlined'}
        onPress={() => props.onPress()}
        style={{
          ...styles.groupButton,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}>
        {props.label[1]}
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  groupButton: {
    borderColor: theme.color.primary,
    width: 150,
  },
});

export default CustomButton;
export { InlineButton, GroupedButton };
