import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import BackPress from "../components/BackPress";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const TransactionHistory = () => {
  const navigation = useNavigation();
  const [showWithdrawal, setShowWithdrawal] = useState(true);
  const [userData, setUserData] = useState();
  const [activeuser, setActiveuser] = useState();
  const [data, setData] = useState("");
  const [depositData, setDepositData] = useState("");

  useEffect(() => {
    setShowWithdrawal(true);

    const getData = async () => {
      try {
        const ActiveUserIdValue = await AsyncStorage.getItem("ActiveUserId");
        console.log(ActiveUserIdValue);
        setActiveuser(ActiveUserIdValue);

        const getRequestData = () => {
          axios
            .post(
              "https://step-counter-dashboard.vercel.app/api/GetWithdrawRequest",
              {
                userUniqueId: ActiveUserIdValue,
              }
            )
            .then((acc) => {
              console.log(acc.data);
              setData(acc.data);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getRequestData();
        const getDepositData = async () => {
          axios
            .post(
              "https://step-counter-dashboard.vercel.app/api/Deposit/FindSignleOne",
              {
                id: ActiveUserIdValue,
              }
            )
            .then((acc) => {
              console.log(acc.data);
              setDepositData(acc.data);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getDepositData();
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/img/layoutBack.png")}
      resizeMode="cover"
      style={styles.image}
    >
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
            flex: 4,
            color: "white",
            textAlign: "auto",
            marginLeft: 30,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Transaction History
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",

            marginTop: 30,
            marginHorizontal: 5,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setShowWithdrawal(true)}
          >
            <Text
              style={{
                color: "white",
                backgroundColor: showWithdrawal ? "#FE0097" : "transparent",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              WITHDRAWAL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setShowWithdrawal(false)}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 15,
                backgroundColor: !showWithdrawal ? "#FE0097" : "transparent",
              }}
            >
              DEPOSIT
            </Text>
          </TouchableOpacity>
        </View>

        {showWithdrawal ? (
          <ScrollView>
            {data ? (
              data.map((hit) => {
                return (
                  <View
                    style={{
                      borderBottomColor: "#FE0097",
                      borderBottomWidth: 1,
                      paddingBottom: 15,
                      borderTopColor: "#FE0097",
                      borderTopWidth: 1,
                      marginTop: 20,
                      marginHorizontal: 10,
                    }}
                    key={hit._id}
                  >
                    <View
                      style={{ flexDirection: "row", marginHorizontal: 40 }}
                    >
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          marginTop: 20,
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        BNB
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          marginTop: 25,
                          fontWeight: "bold",
                          fontSize: 11,
                        }}
                      >
                        {hit.createdAt}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginHorizontal: 40 }}
                    >
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          marginTop: 20,
                          fontWeight: "bold",
                          fontSize: 13,
                        }}
                      >
                        ID
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          marginTop: 20,
                          fontWeight: "bold",
                          fontSize: 13,
                        }}
                      >
                        {hit._id.slice(0, 18)}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginHorizontal: 40 }}
                    >
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          marginTop: 20,
                          fontWeight: "bold",
                          fontSize: 13,
                        }}
                      >
                        Amount
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          marginTop: 20,
                          fontWeight: "bold",
                          fontSize: 13,
                        }}
                      >
                        {hit.WithdrawCoins} Coins
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginHorizontal: 40 }}
                    >
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          marginTop: 20,
                          fontWeight: "bold",
                          fontSize: 13,
                        }}
                      >
                        Status
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          marginTop: 20,
                          fontWeight: "bold",
                          fontSize: 13,
                        }}
                      >
                        {hit.Status}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginHorizontal: 40 }}
                    ></View>
                  </View>
                );
              })
            ) : (
              <></>
            )}
          </ScrollView>
        ) : (
          <ScrollView>
            {depositData ? (
              <View
                style={{
                  borderBottomColor: "#FE0097",
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                  borderTopColor: "#FE0097",
                  borderTopWidth: 1,
                  marginTop: 20,
                  marginHorizontal: 10,
                }}
              >
                <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    Deposit On
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    {depositData.createdAt.slice(0, 21)}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    ID
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    {depositData.transectionId}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    Remark
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    {depositData.remark}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    Status
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    {depositData.approvalStatus}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    Approval Date
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      flex: 1,
                      marginTop: 20,
                      fontWeight: "bold",
                      fontSize: 13,
                    }}
                  >
                    {depositData.updatedAt.slice(0, 21)}
                  </Text>
                </View>
              </View>
            ) : (
              <></>
            )}
          </ScrollView>
        )}
      </View>
    </ImageBackground>
  );
};

export default TransactionHistory;
