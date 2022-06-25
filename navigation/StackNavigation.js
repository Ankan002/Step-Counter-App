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

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Introslider" component={Introslider} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="EnterOtp" component={EnterOtp} />
      <Stack.Screen name="ActivateAccount" component={ActivateAccount} />
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name="EnterReferalCode" component={EnterReferalCode} />
      <Stack.Screen name="PricingScreen" component={PricingScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
