import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthLayout from '../../../components/AuthLayout';
import Input from '../../../components/TextInput';
import Checkbox from '../../../components/Checkbox';
import {color, font} from '../../../../theme';

const SigninView = props => {
  const layoutProps = {
    heading: 'Please sign in to your account',
    buttonLabel: 'Login',
    clickText: "Don't have an account?",
    onAuthToggle: props.navigateToSignup,
    onPress: props.onSubmit,
    page: 'Login',
    loading: props.loading,
  };
  return (
    <>
      <AuthLayout {...layoutProps}>
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
            <Text style={styles.checkboxText}>Remember me</Text>
          </View>
          <View>
            <Text style={styles.forgetText} onPress={props.onForgetPress}>
              Forget Password?
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

export default SigninView;
