import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../styles/globalcss";
import SelectPaymentMethodNext from "../components/SelectPaymentMethodNext";
import axios from "axios";
import {useRoute} from '@react-navigation/native';
const SelectPaymentMethod = () => {
  const [showNextScreen, setShowNextScreen] = useState(false);
  const [datas, setDatas] = useState("");
  const [putData, setPutData] = useState("");
  const route = useRoute();
  const selectedPrice = route.params.selectedprice;
  


  useEffect(() => {
    axios
      .get("https://step-counter-dashboard.vercel.app/api/AddCurrencys")
      .then((acc) => {
        setDatas(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleGo = (id,TokenName,Symbol,Conversion,WalletAddress,QRCode) => {
    setPutData({id,TokenName,Symbol,Conversion,WalletAddress,QRCode,selectedPrice})
    // console.log(trialObject)
    setShowNextScreen(true);
  };

  return (
    <>
      {showNextScreen ? (
        <>
          <SelectPaymentMethodNext data={putData} />
        </>
      ) : (
        <ImageBackground
          source={require("../assets/img/layoutBack.png")}
          resizeMode="cover"
          style={styles.image}
        >
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
            {datas ? (
              <>
                {datas.map((hit) => {
                  return (
                    <TouchableOpacity key={hit._id} onPress={() => handleGo(hit._id,hit.TokenName,hit.Symbol,hit.Conversion,hit.WalletAddress,hit.QRCode)}>
                      <View
                        style={{
                          backgroundColor: "#FE0097",
                          padding: 5,
                          marginTop: 50,
                          borderRadius: 10,
                          borderColor: "white",
                          borderStyle: "solid",
                          borderWidth: 1,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: 30,
                          }}
                        >
                          {hit.Symbol}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </View>
        </ImageBackground>
      )}
    </>
  );
};

export default SelectPaymentMethod;
