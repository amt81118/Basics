// MyContext.js

import React, {createContext, useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';

const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [data, setData] = useState('==>');

  const value = {
    data,
    setData,
  };

  return (
    <MyContext.Provider value={value}>
      <View style={styles.safeAreaView}>{children}</View>
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#B78C8C',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
});
