import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Image } from "native-base";
import { useNavigation } from "@react-navigation/native";

const TopHeader = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#1E1D1D",
        padding: 10,
        paddingTop: 20,
      }}
    >
      <Text
        style={{ color: "white", flex: 1, textAlign: "center", marginTop: 8 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <FontAwesome name="bell" size={18} color="white" />
        </TouchableOpacity>
      </Text>
      <Text
        style={{
          color: "white",
          flex: 5,
          textAlign: "center",
          marginTop: 5,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Hi, User
      </Text>
      {/* <Text style={{ color: "white", flex: 1, textAlign: "center" }}>
        Profile
      </Text> */}
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          size={9}
          resizeMode={"contain"}
          borderRadius={100}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopHeader;
