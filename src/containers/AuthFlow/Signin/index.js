import React, {useState, useContext} from 'react';
import SigninView from './view';
import {validateEmail, setStorageItem} from '../../../utils';
import {
  login,
  toggleAuthActionCreator,
} from '../../../store/actions/authActions';
import {connect} from 'react-redux';
import {onSnackbar} from '../../../store/actions/layoutActions';
import {StackActions} from '@react-navigation/routers';

const Signin = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState({error: false, message: ''});
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: '',
  });

  const onChange = data => {
    const {text, name} = data;
    if (name.toLowerCase() === 'email') {
      setEmail(text);
    } else if (name.toLowerCase() === 'password') {
      setPassword(text);
    }
  };

  const onBlur = name => {
    console.log('name in blur');
    if (name.toLowerCase() === 'email') {
      const res = validateEmail(email);
      if (!res) {
        setEmailError({error: true, message: 'Please enter a valid email.'});
      } else {
        setEmailError({error: false, message: ''});
      }
    }
    if (name.toLowerCase() === 'password') {
      if (password.length < 8) {
        setPasswordError({
          error: true,
          message: 'Password should have atleast 8 letters.',
        });
      } else {
        setPasswordError({error: false, message: ''});
      }
    }
  };

  const onCheckToggle = () => {
    setChecked(!checked);
  };

  const navigateToSignup = () => {
    props.navigation.navigate('Signup');
  };

  const onForgetPress = () => {
    props.navigation.navigate('ForgetPassword');
  };

  const onSubmit = () => {
    try {
      if (
        email.trim() &&
        !emailError.error &&
        password.trim() &&
        !passwordError.error
      ) {
        setLoading(true);
        const LOGIN_DATA = {
          email,
          password,
        };

        login(
          LOGIN_DATA,
          res => {
            console.log('res of SIGNIN -->', res);
            setStorageItem('Token', res?.data?.result?.token);
            setStorageItem('UserID', res?.data?.result?._id);
            props.toggleAuth(res?.data?.result);
            setLoading(false);
            props.navigation.dispatch(StackActions.replace('MainFlow'));
          },
          err => {
            props.showAlert('Invaild Email or Password, please try again.');
            console.log('err of SIGNIN -->', err);
            setLoading(false);
          },
        );
      } else {
        props.showAlert('Please fill all fields with valid data.');
      }
    } catch (e) {
      console.log('e in signin -->', e);
      setLoading(false);
    }
  };

  const viewProps = {
    email,
    password,
    checked,
    loading,
    onChange,
    onCheckToggle,
    navigateToSignup,
    onForgetPress,
    onBlur,
    emailError,
    passwordError,
    onSubmit,
  };

  return <SigninView {...viewProps} />;
};

const mapStateToProps = state => {
  return {
    open: state.layoutReducer.snackbarState,
    message: state.layoutReducer.snackbarMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAuth: data => dispatch(toggleAuthActionCreator(data)),
    showAlert: message => dispatch(onSnackbar(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
