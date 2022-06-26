import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React,{useState,useEffect} from "react";
import styles from "../styles/globalcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EnterReferalCode = () => {
  const navigation = useNavigation();




  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("skipReferal");
        console.log(value);
        if(value){
          navigation.replace("PricingScreen")

        }




        
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const handleProceed = async () => {

    try {
      await AsyncStorage.setItem('skipReferal', "skipReferalSection")
    } catch (e) {
     console.log(e)
    }
    navigation.replace("PricingScreen")

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
        <TextInput keyboardType="default" style={styles.input} />

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
        <TouchableOpacity onPress={()=>navigation.navigate("PricingScreen")} >
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
