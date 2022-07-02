import { View, Text, ScrollView } from "react-native";
import React,{useState,useEffect} from "react";
import styles from "../styles/globalcss";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Past7Days from "../components/Home/Past7Days";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import WallateInfo from "../components/Dashboard/WallateInfo";
import Items from "../components/Home/Items"
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



     <WallateInfo/>

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
