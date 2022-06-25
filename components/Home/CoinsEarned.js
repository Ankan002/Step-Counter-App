import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CoinsEarned = () => {
  return (
    <View style={{ marginHorizontal: 15, marginTop: 10 }}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
        Coins Earned
      </Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text
          style={{
            color: "white",
            flex: 2,
            textAlign: "center",
            backgroundColor: "#121212",
            margin: 10,
            padding: 10,
            borderRadius: 10,
          }}
        >
         
          5 $ Earned
        </Text>
        <Text
          style={{
            color: "white",
            flex: 2,
            textAlign: "center",
            backgroundColor: "#121212",
            margin: 10,
            padding: 10,
            borderRadius: 10,
          }}
        >
          50 $ Total Wallet
        </Text>
      </View>
    </View>
  );
};

export default CoinsEarned;
