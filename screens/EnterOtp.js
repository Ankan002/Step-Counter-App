import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const EnterOtp = () => {
  const navigation = useNavigation();
  const [showIt, setShowIt] = useState(false);

  useEffect(() => {
    setShowIt(false);
  }, []);

  const pressed = () => {
    console.log("button pressed");
    setShowIt(true);
  };

  return (
    <>
      {showIt ? (
        <View style={styles.backall}>
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
              New Password
            </Text>
          </View>

          <View style={{ marginHorizontal: 30, marginTop: 70 }}>
            <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
              New Password
            </Text>
            <TextInput
              maxLength={4}
              keyboardType="default"
              style={styles.input}
            />
            <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
              Re-Enter Password
            </Text>
            <TextInput
              maxLength={4}
              keyboardType="default"
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ alignItems: "center", marginTop: 20 }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                backgroundColor: "#FE0097",
                padding: 10,
                borderRadius: 10,
                color: "black",
                fontWeight: "bold",
                width: "50%",
              }}
            >
              Reset Now
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.backall}>
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
              onPress={() => {
                navigation.goBack();
              }}
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
              Verify Mail
            </Text>
          </View>

          <View style={{ marginHorizontal: 30 }}>
            <Text
              style={{
                color: "white",
                marginTop: 50,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <Text style={{ color: "#FE0097" }}>OTP</Text> Has Been Sent On{" "}
              <Text style={{ color: "#FE0097" }}>ku********@gmail.com</Text>
              {/* Please Enter Your{"\n"}Account{" "}
          <Text style={{ color: "#FE0097" }}>Email Id</Text> */}
            </Text>
          </View>

          <View style={{ marginHorizontal: 30, marginTop: 50 }}>
            <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
              Enter OTP
            </Text>
            <TextInput
              maxLength={4}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            onPress={pressed}
            style={{ alignItems: "center", marginTop: 20 }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                backgroundColor: "#FE0097",
                padding: 10,
                borderRadius: 10,
                color: "black",
                fontWeight: "bold",
                width: "50%",
              }}
            >
              Verify OTP
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default EnterOtp;
