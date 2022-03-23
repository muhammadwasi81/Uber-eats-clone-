import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ResturantDetails from './screens/ResturantDetails';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  const store = configureStore();

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={ResturantDetails} />
          {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
