import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";

const Introslider = () => {
  const [showRealApp, setShowRealApp] = useState(false);

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
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
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
          <View style={styles.mainScreenShow2} >
            <TouchableOpacity style={styles.button1}>
            <Text style={{textAlign:"center",color:"white"}}>Sign In</Text>
            </TouchableOpacity>
            <View style={{padding:5}} ></View>
            <TouchableOpacity style={styles.button2}>
            <Text style={{textAlign:"center"}}>Sign Up</Text>
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
    borderRadius:10,
    // margin:10,
    width:"50%",
    textAlign:"center",
    color:"white"
  },
  button2: {
    padding: 15,
    borderColor: "#05DCFF",
    borderWidth: 2,
    borderRadius:10,
    backgroundColor:'#05DCFF',
    // margin:10,
    width:"50%",
    textAlign:"center"
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
    marginTop:50,
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
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
    justifyContent:"center",
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
    text: "Walk To Get Rewards",
    title: "Walk To Get Rewards",
    image: { 
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png",
    },
    backgroundColor: "#000000",
  },
  {
    key: "s2",
    title: "Walk For Your Health",
    text: "Walk For Your Health",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png",
    },
    backgroundColor: "#000000",
  },
  {
    key: "s3",
    title: "Walk To Earn Rewards",
    text: "Walk To Earn Rewards",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png",
    },
    backgroundColor: "#000000",
  },
];
