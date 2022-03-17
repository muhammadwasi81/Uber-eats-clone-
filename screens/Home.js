import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import ResturantItem from '../components/home/ResturantItem';
import { localRestaurants } from '../utils/products';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

export default function Home(props) {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [resturantData, setResturantData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItem resturantData={resturantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
