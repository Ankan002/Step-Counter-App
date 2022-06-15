import 'react-native-gesture-handler';
import { View, Text } from "react-native";
import React from "react";
import Introslider from "./components/Introslider";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigation';


const App = () => {
  return (
    <>
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
      {/* <Introslider /> */}
    </>
  );
};

export default App;
