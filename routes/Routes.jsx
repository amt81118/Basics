import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllScreen, Screen1, Screen2, Screen3, Screen4} from '../screens';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="allScreen" component={AllScreen} />
        <Stack.Screen name="screen1" component={Screen1} />
        <Stack.Screen name="screen2" component={Screen2} />
        <Stack.Screen name="screen3" component={Screen3} />
        <Stack.Screen name="screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
const styles = StyleSheet.create({});
