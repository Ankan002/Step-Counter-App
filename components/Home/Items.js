import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const Items = () => {
  return (
    <View style={{ marginHorizontal: 30, marginTop: 30, flexDirection: "row" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#121212",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <MaterialIcons
          style={{ backgroundColor: "#252525", padding: 5, borderRadius: 20 }}
          name="local-fire-department"
          size={18}
          color="white"
        />
        <Text style={{ color: "white" }}>0.00</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#121212",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <FontAwesome5  style={{ backgroundColor: "#252525", padding: 5, borderRadius: 20 }} name="walking" size={18} color="white" />
        <Text style={{ color: "white" }}>0.00</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#121212",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <Ionicons  style={{ backgroundColor: "#252525", padding: 5, borderRadius: 20 }} name="location" size={18} color="white" />
        <Text style={{ color: "white" }}>0.00</Text>
      </View>
    </View>
  );
};

export default Items;
