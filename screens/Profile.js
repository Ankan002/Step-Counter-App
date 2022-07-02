import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/globalcss";
import { useNavigation } from "@react-navigation/native";
import { Center, Image } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditProfile from "../components/Profile/EditProfile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { DevSettings } from "react-native";

const Profile = () => {
  const navigation = useNavigation();
  const [showEdit, setShowEdit] = useState(false);
  const [activeuser, setActiveuser] = useState();
  const [userData, setUserData] = useState();

  // these states will be used in form

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [dob, setDob] = useState("");

  const [age, setAge] = useState("");

  const [height, setHeight] = useState("");

  const [weight, setWeight] = useState("");

  const [goal, setGoal] = useState("");

  // States ends here

  useEffect(() => {
    const getData = async () => {
      try {
        const ActiveUserIdValue = await AsyncStorage.getItem("ActiveUserId");
        console.log(ActiveUserIdValue);
        setActiveuser(ActiveUserIdValue);

        const fetchUserData = async () => {
          axios
            .post("https://step-counter-dashboard.vercel.app/api/dynamic/singleUser", {
              activeUserId: ActiveUserIdValue,
            })
            .then((acc) => {
              console.log(acc.data);
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
    setShowEdit(false);
  }, []);

  // console.log(userData);

  const handleLogout = () => {
    console.log("logout clicked");

    const removeAll = async () => {
      await AsyncStorage.removeItem("jwt");
      await AsyncStorage.removeItem("skipActivate");
      await AsyncStorage.removeItem("skipReferal");
      await AsyncStorage.removeItem("skipPricing");
      await AsyncStorage.removeItem("ActiveUserId");
      DevSettings.reload();
    };

    removeAll();
  };

  const handleSave = () => {
    // console.log(
    //   name.name,
    //   email.email,
    //   dob.dob,
    //   age.age,
    //   height.height,
    //   weight.weight,
    //   goal.goal
    // );

    axios
      .post("https://step-counter-dashboard.vercel.app/api/updateUserData", {
        name: name.name,
        email: email.email,
        dob: dob.dob,
        age: age.age,
        height: height.height,
        weight: weight.weight,
        goal: goal.goal,
        userid: activeuser,
      })
      .then((acc) => {
        console.log("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView style={styles.backall}>
      {showEdit ? (
        <>
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
              onPress={() => setShowEdit(false)}
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
              Edit Profile
            </Text>
          </View>

          <View>
            <View style={{ marginTop: 20, marginHorizontal: 40 }}>
              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Name
              </Text>
              <TextInput
                defaultValue={userData[0].Name}
                keyboardType="email-address"
                style={styles.input}
                onChangeText={(text) => {
                  setName({ name: text });
                }}
              />

              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Email
              </Text>
              <TextInput
                keyboardType="default"
                maxLength={25}
                style={styles.input}
                defaultValue={userData[0].email}
                onChangeText={(text) => {
                  setEmail({ email: text });
                }}
              />

              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                D.O.B
              </Text>
              <TextInput
                keyboardType="default"
                maxLength={25}
                style={styles.input}
                defaultValue={userData[0].DOB}
                onChangeText={(text) => {
                  setDob({ dob: text });
                }}
              />
              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Age
              </Text>
              <TextInput
                keyboardType="default"
                maxLength={25}
                style={styles.input}
                defaultValue={userData[0].Age}
                onChangeText={(text) => {
                  setAge({ age: text });
                }}
              />

              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Height
              </Text>
              <TextInput
                keyboardType="default"
                maxLength={25}
                style={styles.input}
                defaultValue={userData[0].Height}
                onChangeText={(text) => {
                  setHeight({ height: text });
                }}
              />

              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Weight
              </Text>
              <TextInput
                keyboardType="default"
                maxLength={25}
                style={styles.input}
                defaultValue={userData[0].Weight}
                onChangeText={(text) => {
                  setWeight({ weight: text });
                }}
              />

              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Goal
              </Text>
              <TextInput
                keyboardType="default"
                maxLength={25}
                style={styles.input}
                defaultValue={userData[0].Goal}
                onChangeText={(text) => {
                  setGoal({ goal: text });
                }}
              />

              <View
                style={{
                  marginHorizontal: 40,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity onPress={handleSave}>
                  {/* <TouchableOpacity onPress={() => setShowEdit(false)}> */}
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      backgroundColor: "#00DCFF",
                      padding: 10,
                      borderRadius: 10,
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setShowEdit(false)}>
                <Text
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginBottom: 20,
                    textDecorationColor: "red",
                    textDecorationLine: "underline",
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          {userData ? (
            <>
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
                    flex: 2,
                    color: "white",
                    textAlign: "auto",
                    marginLeft: 30,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Profile
                </Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <Center style={{ flexDirection: "row" }}>
                  <Image
                    size={100}
                    resizeMode={"contain"}
                    borderRadius={50}
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                    }}
                    alt="Alternate Text"
                  />
                </Center>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 10,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {userData[0].username}
                  <TouchableOpacity onPress={() => setShowEdit(true)}>
                    <Ionicons name="pencil" size={15} color="#00DCFF" />
                  </TouchableOpacity>
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginHorizontal: 30 }}>
                <View
                  style={{
                    flex: 2,
                    alignItems: "center",
                    backgroundColor: "#121212",
                    margin: 10,
                    borderRadius: 10,
                    padding: 5,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Wallet</Text>
                  <Text
                    style={{ color: "#00DCFF", fontSize: 18, marginTop: 5 }}
                  >
                    {userData[0].wallate}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    alignItems: "center",
                    backgroundColor: "#121212",
                    margin: 10,
                    borderRadius: 10,
                    padding: 5,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Goal</Text>
                  <Text
                    style={{ color: "#00DCFF", fontSize: 18, marginTop: 5 }}
                  >
                    {userData[0].Goal}
                  </Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  Total Withdrawal
                </Text>
              </View>

              <View>
                <View
                  style={{
                    marginHorizontal: 20,
                    marginTop: 20,
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#00DCFF",
                      flex: 2,
                      textAlign: "center",
                      backgroundColor: "#121212",
                      margin: 10,
                      padding: 20,
                      borderRadius: 10,
                      fontWeight: "bold",
                    }}
                  >
                    0 <Text style={{ color: "white" }}> Withdrawal</Text>
                  </Text>
                  <Text
                    style={{
                      color: "#00DCFF",
                      flex: 2,
                      textAlign: "center",
                      backgroundColor: "#121212",
                      margin: 10,
                      padding: 20,
                      borderRadius: 10,
                      fontWeight: "bold",
                    }}
                  >
                    0 <Text style={{ color: "white" }}> Approval</Text>
                  </Text>
                </View>
              </View>

              <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                  Running Package
                </Text>
              </View>

              <View>
                <View
                  style={{
                    marginHorizontal: 20,
                    marginTop: 20,
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#00DCFF",
                      flex: 2,
                      textAlign: "center",
                      backgroundColor: "#121212",
                      margin: 10,
                      padding: 20,
                      borderRadius: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Walk<Text style={{ color: "white" }}>{"\n"}200$</Text>
                  </Text>
                  <Text
                    style={{
                      color: "#00DCFF",
                      flex: 2,
                      textAlign: "center",
                      backgroundColor: "#121212",
                      margin: 10,
                      padding: 20,
                      borderRadius: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Renewal On
                    <Text style={{ color: "white" }}>{"\n"}15/03/2022</Text>
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginHorizontal: 100,
                  marginBottom: 50,
                  marginTop: 50,
                }}
              >
                <TouchableOpacity onPress={handleLogout}>
                  <Text
                    style={{
                      color: "#00DCFF",
                      textAlign: "center",
                      backgroundColor: "#121212",
                      padding: 10,
                      fontWeight: "bold",
                      fontSize: 15,
                      borderRadius: 15,
                    }}
                  >
                    Logout{" "}
                    <MaterialIcons name="logout" size={10} color="#00DCFF" />
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default Profile;
