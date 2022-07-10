import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/globalcss";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const WaitingForConfirmation = () => {
  const navigation = useNavigation();

  const [datas, setDatas] = useState("");
  const [sendToHome, setSendToHome] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");
  useEffect(() => {
    const getValue = async () => {
      const value = await AsyncStorage.getItem("jwt");

      let parsedValue = JSON.parse(value);

      let userId = parsedValue._id;
      console.log(userId);
      setCurrentUserId(userId);

      StatusUpdate(userId);
    };
    getValue();

    const getCurrentStatus = async () => {
      await AsyncStorage.setItem("Waiting", "true");
    };
    getCurrentStatus();
  }, []);

  const StatusUpdate = async (id) => {
    axios
      .post("https://step-counter-dashboard.vercel.app/api/Deposit/FindSignleOne", {
        id: id,
      })
      .then((acc) => {
        console.log(acc.data);
        setDatas(acc.data);
        setSendToHome(acc.data.approvalStatus);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(currentUserId)

  if (sendToHome === "Approved") {
    axios
      .post("https://step-counter-dashboard.vercel.app/api/Deposit/UpdateUserStatus", {
        userid: currentUserId,
        status: "subscribed",
      })
      .then((acc) => {
        console.log(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });

    navigation.navigate("Home");
  }

  return (
    <ImageBackground
      source={require("../assets/img/layoutBack.png")}
      resizeMode="cover"
      style={styles.image}
    >
      {datas ? (
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              marginTop: 40,
              fontSize: 20,
            }}
          >
            Waiting For Confirmation
          </Text>

          <View style={{ marginHorizontal: 30, marginTop: 30 }}>
            <Image
              style={styles.infoIcon}
              source={require("../assets/img/time.png")}
            />
            {datas.approvalStatus === "Pending" ? (
              <>
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 50 }}
                >
                  Your Request Has Been Submitted And We Are Waiting For The
                  Confirmation From Admin
                </Text>
              </>
            ) : (
              <></>
            )}
            {datas.approvalStatus === "Approved" ? (
              <>
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 50 }}
                >
                  Your Request Has Been Submitted And We Are Activating Your
                  Account.
                </Text>
              </>
            ) : (
              <></>
            )}

            {datas.approvalStatus === "Rejected" ? (
              <>
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 50 }}
                >
                  Your Request Has Been Rejected Due To Some Policy
                  Voilations.Maybe Your Provided Details Are Not Valid.Or Any
                  Other Issue.
                </Text>
                <Text
                  style={{ color: "white", textAlign: "center", marginTop: 10 }}
                >
                  We Suggest You To Mail Us On :{" "}
                  <Text style={{ color: "#FE0097", fontWeight: "bold" }}>
                    something@gmail.com
                  </Text>
                </Text>
              </>
            ) : (
              <></>
            )}

            <View
              style={{
                backgroundColor: "#FE0097",
                padding: 10,
                marginTop: 80,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Current Status : <Text>{datas.approvalStatus}</Text>
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator style={{ flex: 1 }} size="large" color="white" />
        </View>
      )}
    </ImageBackground>
  );
};

export default WaitingForConfirmation;
