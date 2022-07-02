import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/globalcss";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Notifications = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const ActiveUserIdValue = await AsyncStorage.getItem("ActiveUserId");
        // console.log(ActiveUserIdValue);

        const fetchUserData = async () => {
          axios
            .post(
              "http://192.168.43.53:3000/api/dynamic/SingleUserNotification",
              {
                activeUserId: ActiveUserIdValue,
              }
            )
            .then((acc) => {
              // console.log(acc.data);
              setUserData(acc.data);
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

  return (
    <ScrollView style={styles.backall}>
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
            flex: 3,
            color: "white",
            textAlign: "auto",
            marginLeft: 30,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Notifications
        </Text>
      </View>

      {userData ? (
        <>
          {userData.map((hit) => {
            return (
              <View
                style={{ marginHorizontal: 20, marginTop: 30 }}
                key={hit._id}
              >
                <View
                  style={{
                    flexWrap: "nowrap",
                    backgroundColor: "#00DCFF",
                    padding: 20,
                    borderTopStartRadius: 30,
                    borderBottomEndRadius: 30,
                  }}
                >
                  <Text>
                    {hit.notificationMessage}
                  </Text>
                </View>
              </View>
            );
          })}
        </>
      ) : (
        <>


        <View
                style={{ marginHorizontal: 20, marginTop: 30 }}
               
              >
                <View
                  style={{
                    flexWrap: "nowrap",
                    backgroundColor: "#00DCFF",
                    padding: 20,
                    borderTopStartRadius: 30,
                    borderBottomEndRadius: 30,
                  }}
                >
                  <Text>
                   Loading Messages ...
                  </Text>
                </View>
              </View>


        </>
      )}
    </ScrollView>
  );
};

export default Notifications;
