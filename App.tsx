import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './routes/Routes';
import {store} from './services/redux/store';
import {Provider} from 'react-redux';

const AppWrapper = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Routes />
    </SafeAreaView>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#1F0909',
  },
});
