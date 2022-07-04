import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../styles/globalcss";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const ReferalCode = (props) => {
  const navigation = useNavigation();

  const [referalCode, setReferalCode] = useState("none");
  const [buttonPressed, setButtonPressed] = useState(false);

  const handlePress = () => {
    console.log("generate referal code");

    let generatedCode = Math.floor(Math.random() * 56576464 + 5);

    let finalCode = `Refer${generatedCode}`;
    setReferalCode(finalCode);

    axios
      .post("https://step-counter-dashboard.vercel.app/api/generateReferalCode", {
        generatedRefealCode: finalCode,
        userid: props.currentUser,
      })
      .then((acc) => {
        console.log("code updated");
        navigation.navigate("Profile");
        setButtonPressed(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Text
        style={{
          marginHorizontal: 20,
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Refer & Earn
      </Text>
      {props.activeUserData[0].referal !== "none" ? (
        <>
          <Text
            style={{
              textAlign: "center",
              color: "#00DCFF",
              fontWeight: "bold",
              marginTop: 30,
              fontSize: 20,
            }}
          >
            {props.activeUserData[0].referal}
          </Text>
          <View style={{ marginHorizontal: 30 }}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 15,
                marginTop: 10,
              }}
            >
              Share This Code With Your Friends & Tell Them To Download This
              App.
            </Text>
            <Text
              style={{ textAlign: "center", color: "white", marginTop: 10 }}
            >
              You Will Get 2 Coins For Each Successfull Referal.
            </Text>
          </View>
        </>
      ) : (
        <>
          {buttonPressed ? (
            <>
              <Text
                style={{
                  textAlign: "center",
                  color: "#00DCFF",
                  fontWeight: "bold",
                  marginTop: 30,
                  fontSize: 20,
                }}
              >
                {referalCode}
              </Text>
              <View style={{ marginHorizontal: 30 }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 15,
                    marginTop: 10,
                  }}
                >
                  Share This Code With Your Friends & Tell Them To Download This
                  App.
                </Text>
                <Text
                  style={{ textAlign: "center", color: "white", marginTop: 10 }}
                >
                  You Will Get 2 Coins For Each Successfull Referal.
                </Text>
              </View>
            </>
          ) : (
            <>
              <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                <TouchableOpacity onPress={handlePress}>
                  <Text
                    style={{
                      backgroundColor: "#00DCFF",
                      textAlign: "center",
                      marginHorizontal: 80,
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    Generate Code
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default ReferalCode;
