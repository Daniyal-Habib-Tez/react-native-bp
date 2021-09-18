import React, {useState, useContext} from 'react';
import SignupView from './view';
import {validateFullName, validateEmail} from '../../../utils';
import {
  signUp,
  toggleAuthActionCreator,
} from '../../../store/actions/authActions';
import {connect} from 'react-redux';
import {onSnackbar} from '../../../store/actions/layoutActions';

const Signup = props => {
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState({error: false, message: ''});
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: '',
  });
  const [firstNameError, setFirstNameError] = useState({
    error: false,
    message: '',
  });
  const [lastNameError, setLastNameError] = useState({
    error: false,
    message: '',
  });

  const onChange = data => {
    const {text, name} = data;
    if (name.toLowerCase() === 'email') {
      setEmail(text);
    } else if (name.toLowerCase() === 'password') {
      setPassword(text);
    } else if (name.toLowerCase() === 'first name') {
      setfirstName(text);
    } else {
      setlastName(text);
    }
  };

  const onBlur = name => {
    if (name.toLowerCase() === 'email') {
      const res = validateEmail(email);
      if (!res) {
        setEmailError({error: true, message: 'Please enter a valid email.'});
      } else {
        setEmailError({error: false, message: ''});
      }
    } else if (name.toLowerCase() === 'password') {
      if (password.length < 8) {
        setPasswordError({
          error: true,
          message: 'Password should have atleast 8 letters.',
        });
      } else {
        setPasswordError({error: false, message: ''});
      }
    } else if (name.toLowerCase() === 'first name') {
      if (!validateFullName(firstName)) {
        setFirstNameError({
          error: true,
          message: 'Please enter a valid first name.',
        });
      } else {
        setFirstNameError({error: false, message: ''});
      }
    } else {
      if (!validateFullName(lastName)) {
        setLastNameError({
          error: true,
          message: 'Please enter a valid last name.',
        });
      } else {
        setLastNameError({error: false, message: ''});
      }
    }
  };

  const onCheckToggle = () => {
    setChecked(!checked);
  };

  const navigateToSignin = () => {
    props.navigation.navigate('Signin');
  };

  const onSubmit = () => {
    try {
      if (
        firstName.trim() &&
        !firstNameError.error &&
        lastName.trim() &&
        !lastNameError.error &&
        email.trim() &&
        !emailError.error &&
        password.trim() &&
        !passwordError.error
      ) {
        if (!checked) {
          props.showAlert('Please agree to Terms & Conditions to continue.');
          return;
        }
        setLoading(true);
        const SIGNUP_DATA = {
          email,
          // last_name: lastName,
          password,
          hash: password,
          name: firstName,
          // retypePassword: password,
        };

        signUp(
          SIGNUP_DATA,
          res => {
            console.log('res of SIGNUP -->', res);
            setLoading(false);
            props.showAlert('Account is created');
          },
          err => {
            console.log('err of SIGNUP -->', err);
            setLoading(false);
          },
        );
      } else {
        props.showAlert('Please fill all fields with valid data.');
      }
    } catch (e) {
      console.log('e in signup -->', e);
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
    navigateToSignin,
    emailError,
    passwordError,
    onBlur,
    firstName,
    lastName,
    firstNameError,
    lastNameError,
    onSubmit,
  };

  return <SignupView {...viewProps} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
