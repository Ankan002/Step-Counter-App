import { View, Text, ScrollView, Modal,TouchableOpacity ,Image} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import TopHeader from "../components/Home/TopHeader";
import Timer from "../components/Home/Timer";
import Items from "../components/Home/Items";
import CoinsEarned from "../components/Home/CoinsEarned";
import Past7Days from "../components/Home/Past7Days";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pedometer } from "expo-sensors";
import {  Center } from "native-base";
const HomeScreen = () => {
  const [pedometerAvalibility, setPedometerAvalibility] = useState("");
  const [stepcounter, setStepcounter] = useState(0);

  useEffect(() => {
    // removeAll()
    subscribe()


    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("jwt");
        // console.log(value);

        let parsedValue = JSON.parse(value)
        
        let userId = parsedValue._id
        // console.log(userId)


        const storeData = async () => {
          try {
            await AsyncStorage.setItem('ActiveUserId',userId)
          } catch (e) {
            console.log(e)
          }
        }
        storeData()


        // AsyncStorage.setItem("ActiveUserId",userId)


        





        
      } catch (e) {
        console.log(e);
      }
    };

    getData();

  }, []);





 


















  const subscribe = () =>{
    const subscription = Pedometer.watchStepCount((res)=>{

      setStepcounter(res.steps)

    })

    Pedometer.isAvailableAsync()
      .then((acc) => {
        setPedometerAvalibility(acc);
      })
      .catch((err) => {
        setPedometerAvalibility(err);
      });

  }








  const removeAll = async () => {
    await AsyncStorage.removeItem("jwt");
    await AsyncStorage.removeItem("skipActivate");
    await AsyncStorage.removeItem("skipReferal");
    await AsyncStorage.removeItem("skipPricing");
  };

  return (
    <ScrollView style={styles.backall}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={!pedometerAvalibility}
        
      >
        <View
          style={{ backgroundColor: "white", width: "100%", height: "50%" ,borderRadius:30}}
        >
          <Center>
            <Image
              source={require("../assets/img/oops.png")}
             
              style={styles.tinyLogo}
            />
          </Center>

          <Text
            style={{
              textAlign: "center",
              marginHorizontal: 30,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Your Device Don't Support Pedometer Please Change Your Device Or
            Restart App
          </Text>
          <TouchableOpacity onPress={()=>setPedometerAvalibility(true)}>

          <Text style={{marginHorizontal:100,textAlign:"center",marginTop:30,backgroundColor:"black",color:"white",borderRadius:15,padding:10,fontWeight:"bold"}} >Close Alert</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TopHeader />
      <Timer stepValue={stepcounter} />
      <Items />
      <CoinsEarned />
      <Past7Days />
    </ScrollView>
  );
};

export default HomeScreen;
