import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/globalcss";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.backall}>
      <View
        style={{ flexDirection: "row", marginTop: 35, marginHorizontal: 15 }}
      >
        <Ionicons
          name="chevron-back"
          style={{ flex: 1, color: "white" }}
          size={24}
          color={"white"}
          onPress={() => {
            navigation.goBack();
          }}
        />
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
          Profile
        </Text>
      </View>
    </View>
  );
};

export default Profile;
