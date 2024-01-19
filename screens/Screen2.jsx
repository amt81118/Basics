import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {sendPost} from '../services/appService';

const Screen2 = () => {
  return (
    <View style={styles.safeAreaView}>
      <Text on onPress={() => sendPost('check', 'Testing functionality', '1')}>
        Send Post
      </Text>
      <Text on onPress={() => sendPost('1')}>
        Get Post
      </Text>
    </View>
  );
};

export default Screen2

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#0A091F',
  },
});