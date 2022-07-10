import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "../styles/globalcss";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const DoPayment = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("VerifyPayment");
  };

  return (
    <ImageBackground
      source={require("../assets/img/layoutBack.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 40,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Scan QR To Pay
          </Text>

          <View
            style={{
              backgroundColor: "#FE0097",
              padding: 10,
              marginTop: 25,
              height: "auto",
              marginHorizontal: 20,
              borderRadius: 15,
            }}
          >
            <Image
              style={styles.PaymentDo}
              source={{
                uri: "https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg",
              }}
            />
            <Text
              style={{
                textAlign: "center",
                color: "white",
                marginVertical: 20,
              }}
            >
              Account No :{" "}
              <Text style={{ fontWeight: "bold" }}> XXXXXXXXXXXX</Text>
            </Text>

            <Text
              style={{
                textAlign: "center",
                marginTop: 40,
                marginBottom: 10,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              Remember:{" "}
              <Text style={{ fontWeight: "normal", color: "white" }}>
                Please take a screenshot after making the payment and copy the
                transaction ID as well, we need it to verify your transaction.
              </Text>
            </Text>

            <TouchableOpacity onPress={handleDone}>
              <Text style={styles.ProceedButton}>
                Done <AntDesign name="arrowright" size={15} color={"black"} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DoPayment;
