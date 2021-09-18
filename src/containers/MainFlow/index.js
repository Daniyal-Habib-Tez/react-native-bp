import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import Policy from './Policy';
import About from './About';
import Feedback from './Feedback';
import DrawerContent from '../../components/Drawer';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

const MainFlow = props => {
  return (
    <Drawer.Navigator
      headerMode="none"
      drawerContent={props => (
        <DrawerContent
          {...props}
          logout={() => props.navigation.navigate('AuthFlow')}
        />
      )}>
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Policy" component={Policy} />
    </Drawer.Navigator>
  );
};

export default MainFlow;
