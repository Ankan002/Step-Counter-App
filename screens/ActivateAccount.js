import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/globalcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Image, Center } from "native-base";

const ActivateAccount = () => {
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
          Activate Account
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Center>
          <Image
            size={150}
            resizeMode={"contain"}
            borderRadius={100}
            source={{
              uri: "https://www.drhair.in/wp-content/uploads/2016/09/user-icon-6.png",
            }}
            alt="Alternate Text"
          />
        </Center>
      </View>

      <View>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 20,
          }}
        >
          Your Account Has Been {"\n"}Created But We Need To{"\n"}{" "}
          <Text style={{ color: "#00DCFF" }}> Verify Your Account.</Text>
        </Text>
        <View style={{ marginHorizontal: 30, marginTop: 30 }}>
          <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
            Enter Activation Code
          </Text>
          <TextInput keyboardType="default" style={styles.input} />

          <TouchableOpacity
            onPress={() => navigation.replace("EnterReferalCode")}
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
              Activate Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActivateAccount;
