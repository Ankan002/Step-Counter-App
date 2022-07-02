import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Dashboard from "../screens/Dashboard";
import Withdrawn from "../screens/Withdrawn";
import Profile from "../screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#1E1D1D" },
        tabBarShowLabel: false,

      }}
      
    >
      <Tab.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={tabInfo.focused ? "#00DCFF" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <AntDesign
                name="dashboard"
                size={24}
                color={tabInfo.focused ? "#00DCFF" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Withdrawn"
        component={Withdrawn}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="attach-money"
                size={24}
                color={tabInfo.focused ? "#00DCFF" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="person"
                size={24}
                color={tabInfo.focused ? "#00DCFF" : "#8e8e93"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
