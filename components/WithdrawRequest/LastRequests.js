import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
const LastRequests = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    getRequestData();
  }, []);

  const getRequestData = () => {
    axios
      .post(
        "https://step-counter-dashboard.vercel.app/api/GetWithdrawRequest",
        {
          userUniqueId: props.userId,
        }
      )
      .then((acc) => {
        // console.log(acc.data)
        setData(acc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          Withdrawal History
        </Text>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text
            style={{
              color: "#FE0097",
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Id
          </Text>
          <Text
            style={{
              color: "#FE0097",
              flex: 2,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Transection
          </Text>
          <Text
            style={{
              color: "#FE0097",
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Amount
          </Text>
          <Text
            style={{
              color: "#FE0097",
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Status
          </Text>
          <Text
            style={{
              color: "#FE0097",
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Date
          </Text>
        </View>
        {data ? (
          <>
            {data.map((hit) => {
              return (
                <View
                  style={{ flexDirection: "row", marginTop: 10 }}
                  key={hit._key}
                >
                  <Text
                    style={{ color: "white", flex: 1, textAlign: "center" }}
                  >
                    {hit._id.slice(0,6)}
                  </Text>
                  <Text
                    style={{ color: "white", flex: 2, textAlign: "center" }}
                  >
                    {hit.PaymentWallete}
                  </Text>
                  <Text
                    style={{ color: "white", flex: 1, textAlign: "center" }}
                  >
                    {hit.WithdrawCoins}
                  </Text>
                  <Text
                    style={{ color: "white", flex: 1, textAlign: "center" }}
                  >
                    {hit.Status}
                  </Text>
                  <Text
                    style={{ color: "white", flex: 1, textAlign: "center" }}
                  >
                    {hit.createdAt.slice(0,10)}
                  </Text>
                </View>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
};

export default LastRequests;
