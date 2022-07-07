import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Image, Center } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ActivateAccount = () => {
  const navigation = useNavigation();
  const [currentActivationCode, setCurrentActivationCode] = useState();
  const [userInputActivationCode, setUserInputActivationCode] = useState();
  const [message, setMessage] = useState("");
  const [userCurrentId, setUserCurrentId] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("skipActivate");
        // console.log(value);
        if (value) {
          navigation.replace("EnterReferalCode");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();

    const getCurrentUserData = async () => {
      try {
        const value = await AsyncStorage.getItem("jwt");

        let parsedValue = JSON.parse(value);

        
        let cuurentId = parsedValue._id
        
        console.log(cuurentId)
       
      
        axios.post("https://step-counter-dashboard.vercel.app/api/dynamic/singleUser",{
          activeUserId:cuurentId
      
        }).then((acc)=>{
          console.log(acc.data)
          setCurrentActivationCode(acc.data[0].activationKey)
        }).catch((err)=>{
          console.log(err)
        })
       
        

        // console.log(ActivationCode);
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentUserData();
  }, []);




















  const handleActivate = async () => {
    if (
      currentActivationCode === userInputActivationCode.userInputActivationCode
    ) {
      console.log("aao andar");
      try {
        await AsyncStorage.setItem("skipActivate", "skipActivateSection");
      } catch (e) {
        console.log(e);
      }
      navigation.replace("EnterReferalCode");
    } else setMessage("Activation Code Is Wrong");
  };

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
          <Text style={{ color: "#FE0097" }}> Verify Your Account.</Text>
        </Text>

        <Text
          style={{
            color: "#00DCFF",
            textAlign: "center",
            marginTop: 15,
            fontWeight: "bold",
          }}
        >
          {message}
        </Text>

        <View style={{ marginHorizontal: 30, marginTop: 30 }}>
          <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
            Enter Activation Code
          </Text>
          <TextInput
            onChangeText={(text) => {
              setUserInputActivationCode({ userInputActivationCode: text });
            }}
            keyboardType="default"
            style={styles.input}
          />

          <TouchableOpacity
            onPress={handleActivate}
            // onPress={() => navigation.replace("EnterReferalCode")}
            style={{ alignItems: "center", marginTop: 20 }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                backgroundColor: "#FE0097",
                padding: 10,
                borderRadius: 10,
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
