import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Screen1 = () => {
  return (
    <View style={styles.safeAreaView}>
      <Text>Screen1</Text>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#C92828',
  },
});
