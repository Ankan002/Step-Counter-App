import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const EnterReferalCode = () => {
  const [referalCodeEntered, setReferalCodeEntered] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("skipReferal");
        console.log(value);
        if (value) {
          navigation.replace("PricingScreen");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const handleProceed = async () => {
    console.log(referalCodeEntered.referalCodeEntered);

    axios
      .post("http://192.168.43.53:3000/api/Refer/FindReferalUser", {
        referalId: referalCodeEntered.referalCodeEntered,
      })
      .then((acc) => {
        console.log(acc.data);
        console.log(acc.data[0]._id);
        console.log(acc.data[0].wallate);

        let incresedCoin = acc.data[0].wallate + 2;
        console.log(incresedCoin);
        postReferalBuddyReward(acc.data[0]._id, incresedCoin);
      })
      .catch((err) => {
        console.log(err);
      });

    
  };

  const postReferalBuddyReward = (id, coin) => {
    console.log(`Referal Buddy ID is => ${id}`);
    console.log(`Referal Buddy Reward Total Coin Is ${coin}`);

    axios
      .post("http://192.168.43.53:3000/api/Refer/UpdateRewardCoin", {
        userid: id,
        coin: coin,
      })
      .then((acc1) => {
        console.log("coins updated");

        skipThisScreen()


      })
      .catch((err1) => {
        console.log(err1);
      });





  };


  const skipThisScreen = async () =>{
    try {
      await AsyncStorage.setItem("skipReferal", "skipReferalSection");
    } catch (e) {
      console.log(e);
    }
    navigation.replace("PricingScreen");

  }

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
            flex: 4,
            color: "white",
            textAlign: "auto",
            marginLeft: 30,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Enter Referal Code
        </Text>
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 50 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#00DCFF",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Has any of your friends {"\n"} recommended this app?
        </Text>
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 50 }}>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
          Enter Referal Code
        </Text>
        <TextInput
          onChangeText={(text) => {
            setReferalCodeEntered({ referalCodeEntered: text });
          }}
          keyboardType="default"
          style={styles.input}
        />

        <TouchableOpacity
          onPress={handleProceed}
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
        <TouchableOpacity onPress={skipThisScreen}>
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              marginTop: 30,
              textAlign: "center",
            }}
          >
            skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterReferalCode;
