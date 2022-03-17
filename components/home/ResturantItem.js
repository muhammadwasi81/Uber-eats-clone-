import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

export default function ResturantItem({ navigation, ...props }) {
  return (
    <>
      {props.resturantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() => {
            navigation('Resturant Detail', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.reviews,
              rating: restaurant.rating,
              categoryItems: restaurant.categories,
            });
          }}
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: '#ffffff' }}
          >
            <ResturantImage image={restaurant.image_url} />
            <ResturantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const ResturantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        st
        style={{ width: '100%', height: 180 }}
      />
      <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color="#ffffff"
        />
      </TouchableOpacity>
    </>
  );
};

const ResturantInfo = (props) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
          <Text style={{ fontSize: 13, color: 'gray' }}>30-45 • min</Text>
        </View>
        <View
          style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
        >
          <Text>{props.rating}</Text>
        </View>
      </View>
    </>
  );
};
