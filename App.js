import 'react-native-gesture-handler';
import { View, Text } from "react-native";
import React from "react";
import Introslider from "./components/Introslider";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigation';
import { NativeBaseProvider, Box } from "native-base";


const App = () => {
  return (
    <>
    
    <NavigationContainer>
    <NativeBaseProvider>
      <StackNavigator/>
    </NativeBaseProvider>
    </NavigationContainer>
      {/* <Introslider /> */}
    </>
  );
};

export default App;
