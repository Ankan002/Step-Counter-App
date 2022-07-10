import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import * as ImagePicker from "expo-image-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

// WaitingForConfirmation
const VerifyPayment = () => {
  const navigation = useNavigation();

  const [image, setImage] = useState(null);
  const [photo, setPhoto] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [activeUser, setActiveUser] = useState("");

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const value = await AsyncStorage.getItem("jwt");

        let parsedValue = JSON.parse(value);

        let userId = parsedValue._id;
        console.log(userId);
        setActiveUser(userId);
      } catch (error) {}
    };
    getCurrentUser();
  }, []);

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    console.log(Response);

    if (status === "granted") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  const handlePress = async () => {
    setModalVisible(false);
    setShowLoading(true);
    let newFile = {
      uri: image,
      type: `test/${image.split(".")[1]}`,
      name: `test.${image.split(".")[1]}`,
    };

    const data = new FormData();
    data.append("file", newFile);
    data.append("upload_preset", "mystore");
    data.append("cloud_name", "learnerboy");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/learnerboy/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhoto(data.secure_url);
        handleUploadToDatabase(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("An Error Occured While Uploading");
      });
    // console.log(photo);
  };

  const handleUploadToDatabase = (img) => {
    console.log(activeUser, transactionId.transactionId, img);
    axios
      .post("https://step-counter-dashboard.vercel.app/api/Deposit/PaymentRequest", {
        UserId: activeUser,
        transectionId: transactionId.transactionId,
        paymentScreenshort: img,
      })
      .then((acc) => {
        console.log(acc.data);
        navigation.navigate("WaitingForConfirmation")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(image);

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
          <View
            style={{
              backgroundColor: "white",
              padding: 30,
              borderRadius: 20,
              marginHorizontal: 10,
              marginVertical: 50,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
            >
              Hey Wait...
            </Text>
            <View style={{ marginVertical: 20 }}>
              <Image
                style={styles.infoIcon}
                source={require("../assets/img/time.png")}
              />
            </View>

            <Text>
              This request may take up to 24 to 48 hours to be approved. So
              please wait for this time to end.
            </Text>
            <TouchableOpacity onPress={handlePress}>
              <Text
                style={{
                  textAlign: "center",
                  backgroundColor: "#FE0097",
                  color: "white",
                  marginHorizontal: 50,
                  padding: 5,
                  borderRadius: 10,
                  marginTop: 15,
                }}
              >
                Ok I Agree
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 35,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Verify Your Payment
          </Text>

          <View style={{ marginHorizontal: 30, marginTop: 50 }}>
            <Text style={{ color: "white" }}>Enter Your Transaction ID</Text>
            <TextInput
              onChangeText={(text) => {
                setTransactionId({ transactionId: text });
              }}
              style={styles.input}
            />

            <TouchableOpacity onPress={handleImageUpload}>
              <View
                style={{
                  backgroundColor: "#FE0097",
                  padding: 10,
                  marginTop: 20,
                  borderRadius: 12 / 2,
                  marginHorizontal: 10,
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Upload Screenshot
                </Text>
                <AntDesign
                  style={{ marginLeft: 10 }}
                  name="camera"
                  size={20}
                  color={"white"}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, alignSelf: "center" }}
              />
            )}
          </View>

          <View style={{ marginHorizontal: 100, marginTop: 30 }}>
            {showLoading ? (
              <TouchableOpacity
                // onPress={handlePress}
                onPress={() => setModalVisible(true)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#FE0097",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <ActivityIndicator color="white" />
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                // onPress={handlePress}
                onPress={() => setModalVisible(true)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#FE0097",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  SEND
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default VerifyPayment;
