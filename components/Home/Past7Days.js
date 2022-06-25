import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Past7Days = () => {
  return (
    <View style={{ marginHorizontal: 15, marginTop: 10 }}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
        Past 7 Day’s Performance
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <View style={{ margin: 8 }}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Sun
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>75</Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            <MaterialCommunityIcons
              name="trending-up"
              size={18}
              color="white"
            />
          </Text>
        </View>
        <View style={{ margin: 8 }}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Mon
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>55</Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            <MaterialCommunityIcons
              name="trending-up"
              size={18}
              color="white"
            />
          </Text>
        </View>
        <View style={{ margin: 8 }}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Tue
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>25</Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            <MaterialCommunityIcons
              name="trending-up"
              size={18}
              color="white"
            />
          </Text>
        </View>
        <View style={{ margin: 8 }}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Wed
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>78</Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            <MaterialCommunityIcons
              name="trending-up"
              size={18}
              color="white"
            />
          </Text>
        </View>
        <View style={{ margin: 8 }}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Thu
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>63</Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            <MaterialCommunityIcons
              name="trending-up"
              size={18}
              color="white"
            />
          </Text>
        </View>
        <View style={{ margin: 8 }}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Fri
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>12</Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            <MaterialCommunityIcons
              name="trending-up"
              size={18}
              color="white"
            />
          </Text>
        </View>
        <View style={{ margin: 8 }}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            Sat
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>98</Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            <MaterialCommunityIcons
              name="trending-up"
              size={18}
              color="white"
            />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Past7Days;
