import React, { useState, useContext } from 'react';
import CreditCardView from './view';
import { validateFullName } from '../../../utils';

const CreditCard: () => React$Node = (props) => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardNoError, setCardNoError] = useState({
    error: false,
    message: '',
  });
  const [expiryError, setExpiryError] = useState({
    error: false,
    message: '',
  });
  const [cvvError, setCvvError] = useState({
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

  const onChange = (data) => {
    let { text, name } = data;
    const inputName = name.toLowerCase();
    switch (inputName) {
      case 'first name': {
        setfirstName(text);
        if (!validateFullName(text)) {
          setFirstNameError({
            error: true,
            message: 'Enter a valid name',
          });
        } else {
          setFirstNameError({
            error: false,
            message: '',
          });
        }
        break;
      }
      case 'last name': {
        setlastName(text);
        if (!validateFullName(text)) {
          setLastNameError({
            error: true,
            message: 'Enter a valid name',
          });
        } else {
          setLastNameError({
            error: false,
            message: '',
          });
        }
        break;
      }
      case 'credit card no': {
        // console.log('in credit card case', value.length);
        text = text
          .replace(/[^\dA-Z]/g, '')
          .replace(/(.{4})/g, '$1 ')
          .trim();

        if (text.length <= 19) {
          setCardNo(text);
        }

        break;
      }
      case 'expiration date': {
        console.log('in expiry case');
        setExpiryError({
          error: false,
          message: '',
        });
        if (text.length <= 7) {
          if (text.length === 2 && expiry.length === 1) {
            text += '/';
          }
          // Update the state, which in turns updates the value in the text field
          setExpiry(text);
        }
        break;
      }
      case 'cvv': {
        console.log('in cvc case');
        if (text.length <= 4) {
          setCvv(text);
        }
        break;
      }
    }
  };

  const navigateBack = () => {
    props.navigation.navigate('FeatureList');
  };

  const navigateToMainFlow = () => {
    props.navigation.navigate('MainFlow');
  };

  const onBlur = (name) => {
    try {
      console.log('expiry length -->', expiry.length);
      if (expiry.length !== 7) {
        setExpiryError({
          error: true,
          message: 'Invalid Date',
        });
        return;
      }
      let expirys = expiry.split('/');
      let expiryMonth = expirys[0];
      let expiryYear = expirys[1];
      var d = new Date();
      var month = d.getMonth();
      var year = d.getFullYear();

      if (parseInt(year) > parseInt(expiryYear)) {
        setExpiryError({
          error: true,
          message: 'Invalid Date',
        });
        return;
      }
      if (
        parseInt(year) == parseInt(expiryYear) &&
        parseInt(month) > parseInt(expiryMonth)
      ) {
        setExpiryError({
          error: true,
          message: 'Invalid Date',
        });
        return;
      }
    } catch (e) {
      console.log('error -->', e)
      setExpiryError({
        error: true,
        message: 'Invalid Date',
      });
    }
  };

  const viewProps = {
    ...props,
    onChange,
    navigateBack,
    navigateToMainFlow,
    firstName,
    lastName,
    cardNo,
    expiry,
    cvv,
    cardNoError,
    expiryError,
    cvvError,
    firstNameError,
    onBlur,
    lastNameError,
  };

  // console.log('nav', props.navigation);

  return <CreditCardView {...viewProps} />;
};

export default CreditCard;
