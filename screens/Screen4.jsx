import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen4 = () => {
  return (
    <View style={styles.safeAreaView}>
      <Text>Screen4</Text>
    </View>
  )
}

export default Screen4

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#290720',
  },
});