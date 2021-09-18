import {StackActions} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import theme from '../../../theme';
import {getStorageItem} from '../../utils';
const Splash = props => {
  useEffect(() => {
    (async () => {
      let userId = await getStorageItem('UserID');
      console.log('Initial ==>', userId);
      if (userId) {
        props.navigation.dispatch(StackActions.replace('MainFlow'));
      } else {
        props.navigation.dispatch(StackActions.replace('AuthFlow'));
      }
    })();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.light,
      }}>
      <Image
        style={{width: 150, height: 150}}
        source={require('../../assets/images/signin.png')}
      />
    </View>
  );
};
export default Splash;
