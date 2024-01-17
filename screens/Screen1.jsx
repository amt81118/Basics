import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset,
} from '../services/redux/counterSlice';

const Screen1 = () => {
  const {value, value1} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <Text>
        {value} ==== {value1}
      </Text>
      <View style={styles.safeAreaView}>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text>Increment +</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text>Decrement -</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(incrementByAmount(10))}>
          <Text>Increment by amount -</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(decrementByAmount(10))}>
          <Text>Decrement by amount -</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(reset())}>
          <Text>{`Reset ==>`} </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#C92828',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
