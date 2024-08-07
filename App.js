import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppNavigation />;
};
export default App;
