import { createStackNavigator } from "@react-navigation/stack";
import Introslider from "../components/Introslider";
import ActivateAccount from "../screens/ActivateAccount";
import EnterOtp from "../screens/EnterOtp";
import EnterReferalCode from "../screens/EnterReferalCode";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import Notifications from "../screens/Notifications";
import PricingScreen from "../screens/PricingScreen";
import SignupScreen from "../screens/SignupScreen";
import BottomNavigator from "./BottomNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Profile from "../screens/Profile";
import WithdrawalRequestWindow from "../screens/WithdrawalRequestWindow";


const Stack = createStackNavigator();

const StackNavigator = () => {
  const [skipIntro, setSkipIntro] = useState(false);

  console.log(skipIntro);

  return (
    <Stack.Navigator
      initialRouteName={"Introslider"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Introslider" component={Introslider} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="EnterOtp" component={EnterOtp} />
      <Stack.Screen name="ActivateAccount" component={ActivateAccount} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EnterReferalCode" component={EnterReferalCode} />
      <Stack.Screen name="PricingScreen" component={PricingScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="WithdrawalRequestWindow" component={WithdrawalRequestWindow} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
