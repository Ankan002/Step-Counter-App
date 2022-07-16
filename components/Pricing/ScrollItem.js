import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../styles/globalcss";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);


const PricingScreen = (props) => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("skipPricing");
        console.log(value);
        if (value) {
          navigation.replace("Home");
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();

    const getCurrentPricingStatus = async () => {
      const waiting = await AsyncStorage.getItem("Waiting");
      console.log(waiting);

      if (waiting) {
        navigation.navigate("WaitingForConfirmation");
      }
    };
    getCurrentPricingStatus();

    axios
      .get("https://step-counter-dashboard.vercel.app/api/Package/Packages")
      .then((acc) => {
        console.log(acc.data);
        setDatas(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleProceed = async (price) => {
    // navigation.navigate("DoPayment");
    navigation.navigate("SelectPaymentMethod", { selectedprice: price });
    // try {
    //   await AsyncStorage.setItem("skipPricing", "skipPricingSection");
    // } catch (e) {
    //   console.log(e);
    // }
    // navigation.replace("Home");
  };


  const transitionAnimation = index => {
    return {
      transform: [
        { perspective: 800 },
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: [0.25, 1, 0.25]
          })
        },
        {
          rotateX: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: ["45deg", "0deg", "45deg"]
          })
        },
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH
            ],
            outputRange: ["-45deg", "0deg", "45deg"]
          })
        }
      ]
    };
  };

  return (
    <View style={styless.scrollPage}>
      <View
        style={{ flexDirection: "row", marginTop: 35, marginHorizontal: 15 }}
      >
        <View style={{ flex: 1, color: "white" }}></View>
        <Text
          style={{
            flex: 2,
            color: "white",
            textAlign: "auto",
            marginLeft: 30,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Pricing
        </Text>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
          horizontal={true}
        >
          {datas ? (
            <>
              {datas.map((hit) => {
                 
                return (
                  <Animated.View style={[styless.screen, transitionAnimation(0)]} key={hit._id}>
                    <View
                      style={{
                        backgroundColor: "#FE0097",
                        width: "100%",
                        height: "auto",
                        padding: 20,
                        borderRadius: 10,
                        borderColor: "white",
                        borderWidth: 1,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          marginTop: 20,
                          fontSize: 40,
                          fontWeight: "bold",
                        }}
                      >
                        {hit.PackageName}
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      >
                        {hit.PackagePrice}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          marginHorizontal: 40,
                          justifyContent: "center",
                          marginTop: 10,
                        }}
                      >
                        <Text>{"\u2B24"}</Text>
                        <Text style={{ marginLeft: 10 }}>
                          {hit.EveryDayReward} Every Day
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginHorizontal: 40,
                          justifyContent: "center",
                          marginTop: 10,
                        }}
                      >
                        <Text>{"\u2B24"}</Text>
                        <Text style={{ marginLeft: 10 }}>
                          Valid For {hit.PackagePeriod}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginHorizontal: 40,
                          justifyContent: "center",
                          marginTop: 10,
                        }}
                      >
                        <Text>{"\u2B24"}</Text>
                        <Text style={{ marginLeft: 10 }}>
                          Withdraw Any Time
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginHorizontal: 40,
                          justifyContent: "center",
                          marginTop: 10,
                        }}
                      >
                        <Text>{"\u2B24"}</Text>
                        <Text style={{ marginLeft: 10 }}>Instant Approval</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          marginHorizontal: 40,
                          justifyContent: "center",
                          marginTop: 10,
                        }}
                      >
                        <Text>{"\u2B24"}</Text>
                        <Text style={{ marginLeft: 10 }}>
                          {hit.StepsGoal} Steps Goal
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleProceed(hit.PackagePrice)}
                        style={{ alignItems: "center", marginTop: 20 }}
                      >
                        <Text
                          style={{
                            color: "white",
                            textAlign: "center",
                            backgroundColor: "white",
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
                    </View>
                  </Animated.View>
                );
              })}
            </>
          ) : (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator
                size="large"
                style={{ marginLeft: 150 }}
                color="white"
              />
            </View>
          )}
        </ScrollView>

        <View style={{ marginHorizontal: 30 }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            You Need To Purchase Any Plan {"\n"}First. If You Want To Proceed.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PricingScreen;

const styless = StyleSheet.create({
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  screen: {
    height: 600,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white",
  },
  text: {
    fontSize: 45,
    fontWeight: "bold",
  },
});
