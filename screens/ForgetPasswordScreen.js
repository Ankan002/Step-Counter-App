import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/globalcss";
import BackPress from "../components/BackPress";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ForgetPasswordScreen = () => {
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
            flex: 4,
            color: "white",
            textAlign: "auto",
            marginLeft: 30,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Forgot Password
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
          Please Enter Your{"\n"}Account{" "}
          <Text style={{ color: "#00DCFF" }}>Email Id</Text>
        </Text>
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 50 }}>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
          Email
        </Text>
        <TextInput keyboardType="email-address" style={styles.input} />

        <TouchableOpacity
          onPress={() => navigation.navigate("EnterOtp")}
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
            Send OTP
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ marginHorizontal: 30, flex: 1, justifyContent: "flex-end" }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          You will get 4 digit OTP, enter that OTP in next {"\n"}screen and you
          can reset the password
        </Text>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
