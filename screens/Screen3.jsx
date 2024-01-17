import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen3 = () => {
  return (
     <View style={styles.safeAreaView}>
      <Text>Screen3</Text>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#1F0909',
  },
});