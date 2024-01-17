import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, hwp, wp } from '../helper'

const customButton = ({btnText,btnStyles}) => {
  return (
      <TouchableOpacity style={[btnStyles.container,styles.container]}>
          <Text style={[btnStyles.text,styles.text]}>{btnText}</Text>
      </TouchableOpacity>
  )
}

export default customButton

const styles = StyleSheet.create({
    container: {
        height: hp(7), width: wp(40),
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: hwp(3),
        alignSelf: 'center',
    },
    text: {
        fontSize: hwp(4),
    }
})