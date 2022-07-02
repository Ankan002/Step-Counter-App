import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const TopHeader = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState();

  const getData = async () => {
    try {
      const ActiveUserIdValue = await AsyncStorage.getItem("ActiveUserId");
      // console.log(ActiveUserIdValue);

      const fetchUserData = async () => {
        axios
          .post("https://step-counter-dashboard.vercel.app/api/dynamic/singleUser", {
            activeUserId: ActiveUserIdValue,
          })
          .then((acc) => {
            // console.log(acc.data);
            setUserData(acc.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      fetchUserData();
    } catch (e) {
      console.log(e);
    }
  };

  getData();

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
      {userData ? (
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
          Hi, {userData[0].username}
        </Text>
      ) : (
        <>
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
        </>
      )}
      {/* <Text style={{ color: "white", flex: 1, textAlign: "center" }}>
        Profile
      </Text> */}
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          size={9}
          resizeMode={"contain"}
          borderRadius={100}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
          }}
          alt="Alternate Text"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopHeader;
