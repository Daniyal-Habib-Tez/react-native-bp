import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {logout, toggleAuthActionCreator} from '../../store/actions/authActions';
import {onSnackbar} from '../../store/actions/layoutActions';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-community/async-storage';

const DrawerContent = props => {
  const navigation = useNavigation();
  console.log('user -->', props.user);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              style={styles.avatar}
              size={96}
              source={require('../../assets/images/avatar.png')}
            />
            <Text style={styles.username}>
              {props.user && props.user.name}{' '}
            </Text>
          </View>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  resizeMode="contain"
                  style={{width: size, tintColor: color}}
                  source={require('../../assets/images/star.png')}
                />
              )}
              label="Feedback"
              onPress={() => props.navigation.navigate('Feedback')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  resizeMode="contain"
                  style={{width: size, tintColor: color}}
                  source={require('../../assets/images/about.png')}
                />
              )}
              label="About"
              onPress={() => props.navigation.navigate('About')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  resizeMode="contain"
                  style={{width: size, tintColor: color}}
                  source={require('../../assets/images/privacy-policy.png')}
                />
              )}
              label="Policy"
              onPress={() => props.navigation.navigate('Policy')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  resizeMode="contain"
                  style={{width: size, tintColor: color}}
                  source={require('../../assets/images/logout.png')}
                />
              )}
              label="Logout"
              onPress={() =>
                logout(() => {
                  props.showAlert('Logging out');
                  console.log('nav -->', props.navigation);
                  props.toggleAuth('');
                  AsyncStorage.clear();
                  navigation.navigate('AuthFlow', {screen: 'Signin'});
                  // props.logout();
                })
              }
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <TouchableOpacity style={styles.socialItem}>
          <Icon name="logo-facebook" size={26} color={theme.color.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem}>
          <Icon name="logo-linkedin" size={26} color={theme.color.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem}>
          <Icon name="logo-twitter" size={26} color={theme.color.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialItem}>
          <Icon name="logo-instagram" size={26} color={theme.color.primary} />
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('auth -->', state.auth);
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAuth: data => dispatch(toggleAuthActionCreator(data)),
    showAlert: message => dispatch(onSnackbar(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

const styles = StyleSheet.create({
  drawerContent: {
    // padding: 20
  },
  userInfoSection: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomColor: '#00000029',
    borderBottomWidth: 1,
  },
  avatar: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  username: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  bottomDrawerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  socialItem: {
    marginHorizontal: 10,
  },
});
