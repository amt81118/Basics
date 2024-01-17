import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen2 = () => {
  return (
       <View style={styles.safeAreaView}>
      <Text>Screen2</Text>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#1F0909',
  },
});