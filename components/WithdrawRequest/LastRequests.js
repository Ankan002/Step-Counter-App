import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
const LastRequests = (props) => {

  const [data, setData] = useState();
  useEffect(() => {
    getRequestData();
  }, []);

  const getRequestData = () => {
    axios
      .post("http://192.168.43.53:3000/api/GetWithdrawRequest", {
        userUniqueId: props.userId,
      })
      .then((acc) => {
        // console.log(acc.data)
        setData(acc.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{ marginHorizontal: 20, marginTop: 10 }}>
      {/* <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
        Previous Requests
      </Text>
    
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        
        <Text style={{ color: "white", flex: 1, textAlign: "center" }}>
          Coins
        </Text>
        <Text style={{ color: "white", flex: 1, textAlign: "center" }}>
          Status
        </Text>
      </View> */}
    </View>
  );
};

export default LastRequests;
