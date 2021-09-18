/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {styles} from './src/styles/styles';

import Feed from './src/feed';
import Detail from './src/detail';

import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';

import Tab1 from './src/screens/tabs/tab1';
import Tab2 from './src/screens/tabs/tab2';
import Tab3 from './src/screens/tabs/tab3';

import {
  NavigationContainer,
  DarkTheme,
  DrawerActions,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from './src/components/Icon';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const App = () => {
  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: 'white',
      background: 'white',
      card: '#65509f',
      text: 'white',
      border: 'green',
    },
  };

  console.log('world');

  const createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={createDrawer}
        options={({navigation}) => ({
          title: 'React Navigation',
          headerLeft: () => (
            <Icon
              name="close"
              color="#fff"
              size={24}
              style={[{marginLeft: 8}]}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Detail Screen',
        }}
      />
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
      <Stack.Screen name="Top Tabs" children={createTopTabs} />
    </Stack.Navigator>
  );

  const createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Contacts" component={Screen1} />
      <Drawer.Screen name="Favorites" component={Screen2} />
      <Drawer.Screen name="Settings" component={Screen3} />
    </Drawer.Navigator>
  );

  const createTopTabs = props => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{title: props.route.params.name}}
        />
        <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  };

  const createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
          name="Tab 1"
          style={{marginBottom: 16}}
          component={Tab1}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="home" color="#fff" size={24} />,
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 2"
          component={Tab2}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Icon style={[{color: 'white'}]} size={25} name="human" />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 3"
          component={Tab3}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: () => (
              <Icon style={[{color: 'white'}]} size={25} name="map" />
            ),
          }}
        />
      </MaterialBottomTabs.Navigator>
    );
  };
  return (
    <>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : MyTheme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeView}>{createHomeStack()}</SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;
