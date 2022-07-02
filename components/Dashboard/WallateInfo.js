import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const WallateInfo = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const ActiveUserIdValue = await AsyncStorage.getItem("ActiveUserId");
        // console.log(ActiveUserIdValue);
        // setActiveuser(ActiveUserIdValue);

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
  }, []);

  return (
    <View>

    {
        userData ?
        <>

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
        {userData[0].wallate} Coins In Wallet
      </Text>


        </>


        :


        <></>


    }
    </View>
  );
};

export default WallateInfo;
