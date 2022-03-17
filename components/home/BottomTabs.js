import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Icon icon="home" title="Home" />
      <Icon icon="search" title="Browse" />
      <Icon icon="shopping-bag" title="Grocery" />
      <Icon icon="receipt" title="Orders" />
      <Icon icon="user" title="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={props.icon} size={25} style={styles.icon} />
    </View>
    <Text>{props.title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  icon: {
    marginBottom: 3,
    alignSelf: 'center',
  },
});
