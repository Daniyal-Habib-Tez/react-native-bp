/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../../../components/TextInput';
import Checkbox from '../../../components/Checkbox';
import AuthLayout from '../../../components/AuthLayout';
import {color, font} from '../../../../theme';

const SignupView = (props) => {
  const layoutProps = {
    heading: 'Please create an account',
    buttonLabel: 'Sign Up',
    clickText: 'Already have an account?',
    onAuthToggle: props.navigateToSignin,
    onPress: props.onSubmit,
    page: 'Signup',
    loading: props.loading,
  };
  return (
    <>
      <AuthLayout {...layoutProps}>
        <Input
          label="First Name"
          value={props.firstName}
          onChange={props.onChange}
          onBlur={props.onBlur}
          errorText={props.firstNameError.message}
          error={props.firstNameError.error}
        />
        <Input
          label="Last Name"
          value={props.lastName}
          onChange={props.onChange}
          onBlur={props.onBlur}
          errorText={props.lastNameError.message}
          error={props.lastNameError.error}
        />
        <Input
          label="Email"
          errorText={props.emailError.message}
          error={props.emailError.error}
          onBlur={props.onBlur}
          value={props.email}
          onChange={props.onChange}
        />
        <Input
          label="Password"
          error={props.passwordError.error}
          errorText={props.passwordError.message}
          isSecure={true}
          onBlur={props.onBlur}
          value={props.password}
          onChange={props.onChange}
        />
        <View style={styles.actionWrapper}>
          <View style={styles.checkboxWrapper}>
            <Checkbox checked={props.checked} onPress={props.onCheckToggle} />
            <Text style={styles.checkboxText}>
              I agree with{' '}
              <Text style={styles.checkboxTextBold}>Terms & Conditions</Text>
            </Text>
          </View>
        </View>
      </AuthLayout>
    </>
  );
};

const styles = StyleSheet.create({
  actionWrapper: {
    flexDirection: 'row',
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
  checkboxTextBold: {
    fontFamily: font.bold,
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

export default SignupView;
