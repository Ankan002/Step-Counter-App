import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "../styles/globalcss";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Past7Days from "../components/Home/Past7Days";
const Dashboard = () => {
  return (
    <ScrollView style={styles.backall}>
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
          Dashboard
        </Text>
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
      <View style={{ marginHorizontal: 30, flexDirection: "row" }}>
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

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Total Withdrawal
        </Text>
      </View>

      <View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#00DCFF",
              flex: 2,
              textAlign: "center",
              backgroundColor: "#121212",
              margin: 10,
              padding: 20,
              borderRadius: 10,
              fontWeight: "bold",
            }}
          >
            0 <Text style={{ color: "white" }}> Withdrawal</Text>
          </Text>
          <Text
            style={{
              color: "#00DCFF",
              flex: 2,
              textAlign: "center",
              backgroundColor: "#121212",
              margin: 10,
              padding: 20,
              borderRadius: 10,
              fontWeight: "bold",
            }}
          >
            0 <Text style={{ color: "white" }}> Approval</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
