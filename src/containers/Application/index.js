import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthFlow from '../AuthFlow';
import InitialSetupFlow from '../InitialSetupFlow';
import MainFlow from '../MainFlow';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {getStorageItem} from '../../utils';
import {onInitialDone} from '../../store/actions/layoutActions';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Splash from './Splash';
import theme from '../../../theme';
const Stack = createStackNavigator();
let userss1;
let userss2;
const Application = props => {
  const [usersdata, setUsersdata] = useState('');
  useEffect(() => {
    (async () => {
      const initial = await getStorageItem('Initial');
      console.log('initial -->', initial);
      userss1 = await getStorageItem('UserID');
      console.log('userss1', userss1, userss1?.length, typeof userss1);
      setUsersdata(userss1);
      initial ? props.setInitial() : null;
      SplashScreen.hide();
      // await AsyncStorage.clear();
      const cxccc = await getStorageItem('Initial');
      console.log('after', cxccc);
    })();
  }, [props?.user]);
  useEffect(() => {
    (async () => {
      userss2 = await getStorageItem('UserID');
    })();
  }, [userss2]);
  return (
    <NavigationContainer>
      {/* <StatusBar hidden={false} barStyle="light-content" backgroundColor="#161616" setBarStyle={{ color: 'red', backgroundColor: 'yellow' }} /> */}
      {console.log('aasdasd', usersdata)}
      <Stack.Navigator headerMode="none" initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        {/* {!usersdata?.length > 0 ? ( */}
        <Stack.Screen name="AuthFlow" component={AuthFlow} />
        {/* ) : (
          <> */}
        {/* <Stack.Screen name="InitialFlow" component={InitialSetupFlow} /> */}
        <Stack.Screen name="MainFlow" component={MainFlow} />
        {/* </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = state => {
  return {
    open: state.layoutReducer.snackbarState,
    message: state.layoutReducer.snackbarMessage,
    user: state.auth.user,
    initial: state.layoutReducer.initial,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setInitial: () => dispatch(onInitialDone()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Application);
