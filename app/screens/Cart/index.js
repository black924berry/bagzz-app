import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';

function CartScreen() {
  const products = useSelector(state => state.products);
  console.log(products);

  return (
    <View>
      <Text>Cart Screen</Text>
    </View>
  );
}

export default CartScreen;
