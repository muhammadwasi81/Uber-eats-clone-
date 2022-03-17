import { View } from 'react-native';
import React, { useState } from 'react';
import About from '../components/resturantDetails/About';
import { Divider } from 'react-native-elements';
import { foods } from '../utils/products';
import MenuItem from '../components/resturantDetails/MenuItem';
import ViewCart from '../components/resturantDetails/ViewCart';

export default function ResturantDetails({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
