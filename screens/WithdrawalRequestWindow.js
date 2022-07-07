import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ImageBackground
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/globalcss";
import { useNavigation } from "@react-navigation/native";
import LastRequests from "../components/WithdrawRequest/LastRequests";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WithdrawalRequestWindow = () => {
  const navigation = useNavigation();
  const [coinsCount, setCoinsCount] = useState("");
  const [userData, setUserData] = useState();
  const [activeuser, setActiveuser] = useState();
  const [activationCode, setActivationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const ActiveUserIdValue = await AsyncStorage.getItem("ActiveUserId");
        console.log(ActiveUserIdValue);
        setActiveuser(ActiveUserIdValue);

        const fetchUserData = async () => {
          axios
            .post(
              "https://step-counter-dashboard.vercel.app/api/dynamic/singleUser",
              {
                activeUserId: ActiveUserIdValue,
              }
            )
            .then((acc) => {
              console.log(acc.data);
              setUserData(acc.data);
              setActivationCode(acc.data[0].activationKey);
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

  const handleSend = () => {
    console.log("send request");

    // console.log(activeuser, coinsCount.coinsCount, activationCode);
    setIsLoading(true);

    axios
      .post("https://step-counter-dashboard.vercel.app/api/WithdrawRequest", {
        userUniqueId: activeuser,
        WithdrawCoins: coinsCount.coinsCount,
        ActivationCode: activationCode,
      })
      .then((acc) => {
        console.log("posted request");
        setIsLoading(false);
        setMessage("Request Sent Successfully");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <ImageBackground source={require('../assets/img/layoutBack.png')} resizeMode="cover" style={styles.image} >

    <ScrollView >
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
          Withdraw Coin
        </Text>
      </View>

      {userData ? (
        <>
          <Text
            style={{
              color: "white",
              marginTop: 30,
              marginRight: 30,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            To Withdraw Your Coins You Need To Feel Up This Form
          </Text>

          <View style={{ marginHorizontal: 20, marginTop: 50 }}>
            <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
              Coins Numbers You Want To Withdraw
            </Text>
            <TextInput
              onChangeText={(text) => {
                setCoinsCount({ coinsCount: text });
              }}
              keyboardType="number-pad"
              style={styles.input}
            />

            <Text
              style={{
                color: "#00DCFF",
                textAlign: "center",
                marginTop: 10,
                fontWeight: "bold",
              }}
            >
              {message}
            </Text>

            <View style={{ marginTop: 15, marginBottom: 20 }}>
              {isLoading ? (
                <Text
                  style={{
                    backgroundColor: "#00DCFF",
                    textAlign: "center",
                    marginHorizontal: 80,
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <ActivityIndicator color="white" />
                </Text>
              ) : (
                <>
                  <TouchableOpacity onPress={handleSend}>
                    <Text
                      style={{
                        backgroundColor: "#FE0097",
                        textAlign: "center",
                        marginHorizontal: 80,
                        padding: 10,
                        borderRadius: 10,
                        color:"white"
                      }}
                    >
                      Send Requests
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>

          <LastRequests userId={activeuser} />
        </>
      ) : (
        <></>
      )}
    </ScrollView>
    </ImageBackground>

  );
};

export default WithdrawalRequestWindow;
