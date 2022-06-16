import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/globalcss";
import { useNavigation } from "@react-navigation/native";

const PricingScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.backall}>
      <View
        style={{ flexDirection: "row", marginTop: 35, marginHorizontal: 15 }}
      >
        <View style={{ flex: 1, color: "white" }}></View>
        <Text
          style={{
            flex: 2,
            color: "white",
            textAlign: "auto",
            marginLeft: 30,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Pricing
        </Text>
      </View>

      <View style={{ marginHorizontal: 40, marginTop: 30 }}>
        <View
          style={{
            backgroundColor: "#00DCFF",
            width: "100%",
            height: "70%",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Walk
          </Text>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            200$
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 40,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text>{"\u2B24"}</Text>
            <Text style={{ marginLeft: 10 }}>2$ Every Day</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 40,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text>{"\u2B24"}</Text>
            <Text style={{ marginLeft: 10 }}>Valid For 1 Year</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 40,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text>{"\u2B24"}</Text>
            <Text style={{ marginLeft: 10 }}>Withdraw Any Time</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 40,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text>{"\u2B24"}</Text>
            <Text style={{ marginLeft: 10 }}>Instant Approval</Text>
          </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ color: "white", textAlign: "center" }}>
          You Need To Purchase This Plan {"\n"}First. If You Want To Proceed.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={{ alignItems: "center", marginTop: 20 }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              backgroundColor: "#00DCFF",
              padding: 10,
              borderRadius: 10,
              color: "black",
              fontWeight: "bold",
              width: "50%",
            }}
          >
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PricingScreen;
