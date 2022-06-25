import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/globalcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Past7Days from "../components/Home/Past7Days";

const Withdrawn = () => {
  return (
    <ScrollView style={styles.backall}>
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 35,
            marginHorizontal: 15,
          }}
        >
          <Ionicons
            name="chevron-back"
            style={{ flex: 1, color: "white" }}
            size={24}
            color={"white"}
            onPress={() => setShowEdit(false)}
          />
          <Text
            style={{
              flex: 3,
              color: "white",
              textAlign: "auto",
              marginLeft: 30,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Withdraw Coins
          </Text>
        </View>
      </View>

      {/* navigation ends here  */}

      <View
        style={{ marginHorizontal: 30, marginTop: 30, flexDirection: "row" }}
      >
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
          <FontAwesome5
            style={{ backgroundColor: "#252525", padding: 5, borderRadius: 20 }}
            name="walking"
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
          <Ionicons
            style={{ backgroundColor: "#252525", padding: 5, borderRadius: 20 }}
            name="location"
            size={18}
            color="white"
          />
          <Text style={{ color: "white" }}>0.00</Text>
        </View>
      </View>

      <Text
        style={{
          color: "#919191",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 20,
          backgroundColor: "#121212",
          marginHorizontal: 30,
          padding: 20,
          fontSize: 25,
          borderRadius: 15,
        }}
      >
        50 Coins In Wallet
      </Text>

      <View style={{ marginTop: 15 }}>
        <Past7Days />
      </View>
      <View style={{ marginTop: 15 }}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: "#00DCFF",
              textAlign: "center",
              marginHorizontal: 80,
              padding: 10,
              borderRadius: 10,
            }}
          >
            Request Withdrawal
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Withdrawn;
