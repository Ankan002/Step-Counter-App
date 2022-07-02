import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const CoinsEarned = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const ActiveUserIdValue = await AsyncStorage.getItem("ActiveUserId");
        console.log(ActiveUserIdValue);
        // setActiveuser(ActiveUserIdValue);

        const fetchUserData = async () => {
          axios
            .post("http://192.168.43.53:3000/api/dynamic/singleUser", {
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

  // console.log(userData);

  return (
    <>
      {userData ? (
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          

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
              "{userData[0].Goal}" Daily Goal
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
             "{userData[0].wallate}"  Total Wallet
            </Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default CoinsEarned;
