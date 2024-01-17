import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/customButton'
import { hp, wp } from '../helper'

const AllScreen = ({navigation}) => {
  const buttons = [
    {
      btnText: 'Screen1',
      btnStyles: {container: {backgroundColor: 'red'}, text: {color: 'lime'}},
    },
    {
      btnText: 'Screen2',
      btnStyles: {
        container: {backgroundColor: 'pink'},
        text: {color: 'royalblue'},
      },
    },
    {
      btnText: 'Screen3',
      btnStyles: {
        container: {backgroundColor: 'green'},
        text: {color: 'rebeccapurple'},
      },
    },
    {
      btnText: 'Screen4',
      btnStyles: {
        container: {backgroundColor: 'blue'},
        text: {color: 'crimson'},
      },
    },
  ];
  return (
    <View style={styles.safeAreaView}>
      {buttons.map(e => (
        <CustomButton
          btnText={e.btnText}
          btnStyles={e.btnStyles}
          navigate={navigation.navigate}
          navigation={navigation}
          key={e.btnText}
        />
      ))}
    </View>
  );
};

export default AllScreen

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#B78C8C',
    justifyContent: 'space-evenly',
    backgroundColor:'black'
  },
});