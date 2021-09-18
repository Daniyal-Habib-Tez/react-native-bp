import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthLayout from '../../../components/AuthLayout';
import Input from '../../../components/TextInput';
import Checkbox from '../../../components/Checkbox';
import {color, font} from '../../../../theme';

const ForgetView: () => React$Node = (props) => {
  const layoutProps = {
    heading: 'Please reset your password',
    buttonLabel: 'Reset',
    clickText: "Don't have an account?",
    onAuthToggle: props.navigateToSignup,
    onPress: props.onSubmit,
    page: 'Forget',
    loading: props.loading,
  };
  return (
    <>
      <AuthLayout {...layoutProps}>
        <Input
          errorText={props.emailError.message}
          error={props.emailError.error}
          onBlur={props.onBlur}
          label="Email"
          value={props.email}
          onChange={props.onChange}
        />
      </AuthLayout>
    </>
  );
};

const styles = StyleSheet.create({
  actionWrapper: {
    flexDirection: 'row',
    marginTop: 22,
  },
  checkboxWrapper: {
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: 13,
    color: color.primary,
    fontFamily: font.regular,
    textAlignVertical: 'center',
  },
  forgetText: {
    fontSize: 13,
    color: color.primary,
    fontFamily: font.regular,
    marginTop: 8,
    width: 160,
    textAlign: 'right',
  },
});

export default ForgetView;
