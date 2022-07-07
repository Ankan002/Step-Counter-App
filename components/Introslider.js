import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";
import LoginScreen from "../screens/LoginScreen";

const Introslider = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const navigation = useNavigation();
  const [showthiscreen, setShowthiscreen] = useState(false);

  useEffect(() => {
    const ClientStatus = async () => {
      try {
        const ActiveUserIdValue = await AsyncStorage.getItem(
          "ReachedAtHomeScreen"
        );

        if (ActiveUserIdValue === null) {
          getData();
        } else if (ActiveUserIdValue === "YES") {
          navigation.replace("Home");
        }
      } catch (e) {
        console.log(e);
      }
    };

    ClientStatus();

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("jwt");
        console.log(value);
        if (value) {
          navigation.replace("ActivateAccount");
        }
      } catch (e) {
        console.log(e);
      }
    };

    setShowthiscreen(true);
  }, []);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <LoginScreen />
      ) : (
        <>
          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            showSkipButton={true}
            onSkip={onSkip}
          />
          <View style={styles.mainScreenShow}>
            <View style={styles.mainScreenShow2}>
              <TouchableOpacity
                onPress={() => navigation.replace("Login")}
                style={styles.button1}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Sign In
                </Text>
              </TouchableOpacity>
              <View style={{ padding: 5 }}></View>
              <TouchableOpacity
                onPress={() => navigation.replace("Signup")}
                style={styles.button2}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Introslider;

const styles = StyleSheet.create({
  button1: {
    padding: 15,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    // margin:10,
    width: "50%",
    textAlign: "center",
    color: "white",
  },
  button2: {
    padding: 15,
    borderColor: "#FE0097",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#FE0097",
    // margin:10,
    width: "50%",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#00000",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    marginTop: 50,
    width: 300,
    height: 300,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
    fontWeight: "bold",
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
  mainScreenShow: {
    padding: 20,
    backgroundColor: "#1E1D1D",
    justifyContent: "center",
    // borderTopLeftRadius:30,
    // borderTopRightRadius:30
  },
  mainScreenShow2: {
    // padding: 40,
    backgroundColor: "#1E1D1D",
    // borderTopLeftRadius:30,
    // borderTopRightRadius:30,
    flexDirection: "row",
    marginHorizontal: 10,
  },
});

const slides = [
  {
    key: "s1",
    text: "Walk & Earn Rewards",
    title: "Walk & Earn Rewards",
    image: require("../assets/img/Banknot.png"),
    backgroundColor: "#000000",
  },
  {
    key: "s2",
    title: "Get Fit Do Good",
    text: "Get Fit Do Good",
    image: require("../assets/img/Coolness.png"),

    backgroundColor: "#000000",
  },
  {
    key: "s3",
    title: "Walk more and earn VRBlock Tokens",
    text: "Walk more and earn VRBlock Tokens",
    image: require("../assets/img/Walking.png"),

    backgroundColor: "#000000",
  },
];
