/**
 * @format
 */
import React, {useEffect} from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import App from './src/containers/Application';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/store/reducers/rootReducer';
import {color} from './theme';
import Snackbar from './src/components/Snackbar';
import PushNotification from 'react-native-push-notification';
console.disableYellowBox = true;

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    // process the notification
  },
  popInitialNotification: true,
  requestPermissions: true,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
  },
};

const Main = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{height: '100%', width: '100%'}}>
          <App />
          <Snackbar />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
