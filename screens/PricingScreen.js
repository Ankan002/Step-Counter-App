import { View, Text, TouchableOpacity, ScrollView ,ImageBackground} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PricingScreen = () => {
  const navigation = useNavigation();

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
  }, []);

  const handleProceed = async () => {
    try {
      await AsyncStorage.setItem("skipPricing", "skipPricingSection");
    } catch (e) {
      console.log(e);
    }
    navigation.replace("Home");
  };



  return (
    <ImageBackground source={require('../assets/img/layoutBack.png')} resizeMode="cover" style={styles.image} >
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

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <View
            style={{
              backgroundColor: "#FE0097",
              width: "100%",
              height: "70%",
              borderRadius: 20,
              borderColor:"white",
              borderWidth:1
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
              Walk
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
            >
              200 VR BLOCKS
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
              <Text style={{ marginLeft: 10 }}>2$ Every Day</Text>
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
              <Text style={{ marginLeft: 10 }}>Valid For 1 Year</Text>
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
              <Text style={{ marginLeft: 10 }}>Withdraw Any Time</Text>
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
              <Text style={{ marginLeft: 10 }}>10000 Steps Goal</Text>
            </View>
            <TouchableOpacity
              onPress={handleProceed}
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
        </View>

        <View style={{ marginHorizontal: 40, marginTop: 30 }}>
          <View
            style={{
              backgroundColor: "#FE0097",
              width: "100%",
              height: "70%",
              borderRadius: 20,
              borderColor:"white",
              borderWidth:1
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
              Jogging
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
            >
              500 VR BLOCKS
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
              <Text style={{ marginLeft: 10 }}>5$ Every Day</Text>
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
              <Text style={{ marginLeft: 10 }}>Valid For 1 Year</Text>
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
              <Text style={{ marginLeft: 10 }}>Withdraw Any Time</Text>
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
              <Text style={{ marginLeft: 10 }}>20000 Steps Goal</Text>
            </View>
            <TouchableOpacity
              onPress={handleProceed}
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
        </View>

        <View style={{ marginHorizontal: 40, marginTop: 30 }}>
          <View
            style={{
              backgroundColor: "#FE0097",
              width: "100%",
              height: "70%",
              borderRadius: 20,
              borderColor:"white",
              borderWidth:1
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
              Skipping
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
            >
              1000 VR BLOCKS
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
              <Text style={{ marginLeft: 10 }}>8$ Every Day</Text>
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
              <Text style={{ marginLeft: 10 }}>Valid For 1 Year</Text>
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
              <Text style={{ marginLeft: 10 }}>Withdraw Any Time</Text>
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
              <Text style={{ marginLeft: 10 }}>25000 Steps Goal</Text>
            </View>
            <TouchableOpacity
              onPress={handleProceed}
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
        </View>

        <View style={{ marginHorizontal: 40, marginTop: 30 }}>
          <View
            style={{
              backgroundColor: "#FE0097",
              width: "100%",
              height: "70%",
              borderRadius: 20,
              borderColor:"white",
              borderWidth:1
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
              Run
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
            >
              2500 VR BLOCKS
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
              <Text style={{ marginLeft: 10 }}>12$ Every Day</Text>
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
              <Text style={{ marginLeft: 10 }}>Valid For 1 Year</Text>
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
              <Text style={{ marginLeft: 10 }}>Withdraw Any Time</Text>
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
              <Text style={{ marginLeft: 10 }}>35000 Steps Goal</Text>
            </View>
            <TouchableOpacity
              onPress={handleProceed}
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
        </View>
      </ScrollView>

      <View style={{ marginHorizontal: 30 }}>
        <Text style={{ color: "white", textAlign: "center" }}>
          You Need To Purchase Any Plan {"\n"}First. If You Want To Proceed.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default PricingScreen;
