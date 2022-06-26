import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import BackPress from "../components/BackPress";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";
const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios.post("http://192.168.43.53:3000/api/Login", {
      email:email.email,
      password:password.password
    }).then((acc)=>{
      // console.log(acc.data)

      const stringifiedIt = JSON.stringify(acc.data)


      const storeData = async () => {
        try {
          await AsyncStorage.setItem('jwt',stringifiedIt)
        } catch (e) {
          console.log(e)
        }
      }
      storeData()








      navigation.replace("ActivateAccount")
    }).catch((err)=>{
      console.log(err.message)
    })
  };

  return (
    <ScrollView style={styles.backall}>
      <BackPress name="Login" />

      <View style={{ marginTop: 80, marginHorizontal: 40 }}>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
          Email
        </Text>
        <TextInput
          onChangeText={(text) => {
            setEmail({ email: text });
          }}
          keyboardType="email-address"
          style={styles.input}
        />

        <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
          Password
        </Text>
        <TextInput
          keyboardType="default"
          secureTextEntry={true}
          maxLength={25}
          style={styles.input}
          onChangeText={(text) => {
            setPassword({ password: text });
          }}
        />

        <View style={{ marginHorizontal: 40, marginTop: 20 }}>
          <TouchableOpacity onPress={handleLogin}>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("ActivateAccount")}  > */}
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
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
          <Text
            style={{ color: "white", textAlign: "right", marginVertical: 20 }}
          >
            Forget Password ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 12,
              marginTop: 20,
            }}
          >
            Don't Have An Account ?
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "white", textAlign: "center", marginTop: 30 }}>
          By signing up you agree with our{"\n"}{" "}
          <Text style={{ color: "#00DCFF" }}> terms & conditions </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
