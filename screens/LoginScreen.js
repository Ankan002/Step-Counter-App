import { View, Text, TextInput ,ScrollView ,TouchableOpacity} from "react-native";
import React from "react";
import styles from "../styles/globalcss";
import BackPress from "../components/BackPress";
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.backall}>
      <BackPress  name="Login" />

      <View style={{ marginTop: 80, marginHorizontal: 40 }}>
        <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
          Email
        </Text>
        <TextInput  keyboardType="email-address" style={styles.input} />
        
        <Text style={{ color: "white", marginLeft: 10, marginTop: 5 }}>
          Password
        </Text>
        <TextInput keyboardType="default" secureTextEntry={true} maxLength={25} style={styles.input} />
        

        <View style={{ marginHorizontal: 40, marginTop: 20 }}>
        <TouchableOpacity>

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
        <TouchableOpacity  onPress={()=>navigation.navigate("Signup")}>
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
        

        <Text style={{ color: "white", textAlign: "center" ,marginTop:30}}>
          By signing up you agree with our{"\n"} <Text style={{color:"#00DCFF"}} > terms & conditions </Text>
        </Text>
       
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
