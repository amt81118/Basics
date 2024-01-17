import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from '../services/redux/counterSlice';

const Screen1 = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Text>{count}</Text>
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
