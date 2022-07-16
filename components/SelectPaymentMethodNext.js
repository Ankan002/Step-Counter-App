import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image
} from "react-native";
import React,{useState,useEffect} from "react";
import styles from "../styles/globalcss";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from 'expo-clipboard';

const SelectPaymentMethodNext = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  console.log(data);

  const NeedToDeposit = data.Conversion * data.selectedPrice;
  console.log(NeedToDeposit);






  const copyToClipboard = async (textData) => {
    await Clipboard.setStringAsync(textData);
    };

  

  return (
    <ImageBackground
      source={require("../assets/img/layoutBack.png")}
      resizeMode="cover"
      style={styles.image}
    >
    <ScrollView>


    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
       <View style={{backgroundColor:"white",padding:10,borderRadius:10}} >
       <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}  >Scan This Code</Text>



       <Image
        style={styles.QrIcon}
        source={{
          uri: data.QRCode,
        }}
      />


      <Text onPress={()=>setModalVisible(false)} style={{textAlign:"center",fontWeight:"bold",backgroundColor:"#FE0097",color:'white',marginHorizontal:120,padding:10,borderRadius:10,marginTop:30}} >Close It</Text>




       </View>
      </Modal>
      <View style={{ flex: 1, marginHorizontal: 30 }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 50,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          SELECT PAYMENT METHOD
        </Text>

        <View
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "white",
            padding: 10,
            borderRadius: 10,
            marginTop: 30,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
            You Selected To Deposit Through
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 40,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {data.Symbol}
          </Text>
        </View>
        <View
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "white",
            padding: 10,
            borderRadius: 10,
            marginTop: 30,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
            You Need To Deposit
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 40,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {NeedToDeposit}
          </Text>
        </View>
        <View
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "white",
            padding: 10,
            borderRadius: 10,
            marginTop: 30,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
            Deposit Wallet Address
          </Text>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 40,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {data.WalletAddress}
          </Text>
          <TouchableOpacity  onPress={()=>Clipboard.setStringAsync(data.WalletAddress)}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                backgroundColor: "#FE0097",
                marginHorizontal: 80,
                padding: 1,
                borderRadius: 5,
                fontSize: 20,
                marginBottom: -24,
              }}
            >
              COPY
            </Text>
          </TouchableOpacity>
        </View>
        {/* VerifyPayment */}
        <Text onPress={() => setModalVisible(true)} style={{ marginTop: 30, color: "white", textAlign: "center" }}>
          QR Scan QR Code
        </Text>
        <TouchableOpacity  onPress={() => navigation.navigate("VerifyPayment")}>
          <Text
            style={{
              marginTop: 30,
              color: "white",
              textAlign: "center",
              backgroundColor: "#FE0097",
              marginHorizontal: 80,
              padding: 10,
              borderRadius: 10,
              fontWeight: "bold",
              marginBottom: 30,
            }}
          >
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default SelectPaymentMethodNext;
