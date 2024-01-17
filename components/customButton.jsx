import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, hwp, wp } from '../helper'
import {useNavigation} from '@react-navigation/native';
const customButton = ({btnText, btnStyles, navigate, navigation}) => {
  const navigation1 = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={[btnStyles.container, styles.container]}
        onPress={() => {
          // navigate(btnText.toLowerCase());
          navigation.navigate(btnText.toLowerCase());
        }}>
        <Text style={[btnStyles.text, styles.text]}>{btnText}</Text>
      </TouchableOpacity>
    </>
  );
};

export default customButton;

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hwp(3),
    alignSelf: 'center',
  },
  text: {
    fontSize: hwp(4),
  },
});
