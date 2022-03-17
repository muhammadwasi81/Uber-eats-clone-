import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { products } from '../../utils/products';

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item, index) => (
          <View key={index} style={styles.categoryItems}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: 'contain' }}
            />
            <Text style={{ fontSize: 13, fontWeight: '900' }}>
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingLeft: 20,
  },
  categoryItems: {
    alignItems: 'center',
    marginRight: 30,
  },
});
