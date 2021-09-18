import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Signin from './Signin';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import IntroSlider from './IntroSlider';
import AdvertisementIG from './AdvertisementIG';
import AdvertisementOanda from './AdvertisementOanda';
import {connect} from 'react-redux';
const Stack = createStackNavigator();

const AuthFlow = (props) => {
  console.log('initial flow -->', props.initial);
  const initialRoute = props.initial ? 'Signin' : 'IntroSlider';
  console.log('route -->', initialRoute);
  return (
    <Stack.Navigator headerMode="none" initialRouteName={initialRoute}>
      {!props.initial && (
        <Stack.Screen name="IntroSlider" component={IntroSlider} />
      )}
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="AdvertisementIG" component={AdvertisementIG} />
      <Stack.Screen name="AdvertisementOanda" component={AdvertisementOanda} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

const mapStateToProps = ({layoutReducer}) => {
  return {
    initial: layoutReducer.initial,
  };
};

export default connect(mapStateToProps, null)(AuthFlow);
