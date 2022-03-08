import React from 'react';
import { SafeAreaView } from 'react-native';
import HeaderTabs from '../components/Home/HeaderTabs';

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
}
