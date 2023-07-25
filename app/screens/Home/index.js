import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {setProducts} from '../../redux/slices/productsSlice';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {isLoading ? <Text>...Loading</Text> : <Text>Loaded</Text>}
    </View>
  );
}

export default HomeScreen;
