import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs(props) {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
      <HeaderButton
        title="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}
const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.title ? 'black' : 'white',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.title)}
    >
      <Text
        style={{
          color: props.activeTab === props.title ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
