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
import {setValue2, setValue3} from '../services/redux/secondSlice';

const Screen1 = () => {
  const {field1, field2} = useSelector(state => state.rootReducer.counter);
  const {value2, value3} = useSelector(state => state.rootReducer.second);
  console.log({field1}, {field2});

  const dispatch = useDispatch();
  return (
    <>
      <Text>
        {field1} ==== {field2}
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
        <TouchableOpacity
          onPress={() => {
            dispatch(setValue3('channged333'));
            dispatch(setValue2('channged222'));
          }}>
          <Text>{`Changed ==>`} </Text>
        </TouchableOpacity>
        <Text>
          {value2}
          {value3}
        </Text>
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
