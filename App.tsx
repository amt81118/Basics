import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <Text style={{color: 'firebrick'}}> App</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
