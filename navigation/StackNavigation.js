import { createStackNavigator } from "@react-navigation/stack";
import Introslider from "../components/Introslider";
import EnterOtp from "../screens/EnterOtp";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Introslider" component={Introslider} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="EnterOtp" component={EnterOtp} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
