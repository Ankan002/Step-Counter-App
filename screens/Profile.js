import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/globalcss";
import { useNavigation } from "@react-navigation/native";
import { Center, Image } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditProfile from "../components/Profile/EditProfile";

const Profile = () => {
  const navigation = useNavigation();
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    setShowEdit(false);
  }, []);

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
              <TextInput keyboardType="email-address" style={styles.input} />

              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Email
              </Text>
              <TextInput
                keyboardType="default"
                secureTextEntry={true}
                maxLength={25}
                style={styles.input}
              />
              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Number
              </Text>
              <TextInput
                keyboardType="default"
                secureTextEntry={true}
                maxLength={25}
                style={styles.input}
              />
              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                D.O.B
              </Text>
              <TextInput
                keyboardType="default"
                secureTextEntry={true}
                maxLength={25}
                style={styles.input}
              />
              <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
                Age
              </Text>
              <TextInput
                keyboardType="default"
                secureTextEntry={true}
                maxLength={25}
                style={styles.input}
              />

              <View
                style={{
                  marginHorizontal: 40,
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity onPress={() => setShowEdit(false)}>
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
              user@977
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
              <Text style={{ color: "white", fontSize: 20 }}>Steps</Text>
              <Text style={{ color: "#00DCFF", fontSize: 18, marginTop: 5 }}>
                95
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
              <Text style={{ color: "#00DCFF", fontSize: 18, marginTop: 5 }}>
                5000
              </Text>
            </View>
          </View>

          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
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
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
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
            style={{ marginHorizontal: 100, marginBottom: 50, marginTop: 50 }}
          >
            <TouchableOpacity>
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
                Logout <MaterialIcons name="logout" size={10} color="#00DCFF" />
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Profile;
