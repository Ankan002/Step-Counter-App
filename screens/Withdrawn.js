import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/globalcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Past7Days from "../components/Home/Past7Days";
import WallateInfo from "../components/Dashboard/WallateInfo";

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

      <WallateInfo />

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
