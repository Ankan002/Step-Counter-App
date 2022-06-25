import { View, Text ,ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/globalcss";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.backall}>
      <View
        style={{ flexDirection: "row", marginTop: 35, marginHorizontal: 15 }}
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
            flex: 3,
            color: "white",
            textAlign: "auto",
            marginLeft: 30,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Notifications
        </Text>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <View
          style={{
            flexWrap: "nowrap",
            backgroundColor: "#00DCFF",
            padding: 20,
            borderTopStartRadius: 30,
            borderBottomEndRadius: 30,
          }}
        >
          <Text>
            This is some notification for you and you will see this only
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            flexWrap: "nowrap",
            backgroundColor: "#00DCFF",
            padding: 20,
            borderTopStartRadius: 30,
            borderBottomEndRadius: 30,
          }}
        >
          <Text>
            This is some notification for you and you will see this only
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            flexWrap: "nowrap",
            backgroundColor: "#00DCFF",
            padding: 20,
            borderTopStartRadius: 30,
            borderBottomEndRadius: 30,
          }}
        >
          <Text>
            This is some notification for you and you will see this only
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            flexWrap: "nowrap",
            backgroundColor: "#00DCFF",
            padding: 20,
            borderTopStartRadius: 30,
            borderBottomEndRadius: 30,
          }}
        >
          <Text>
            This is some notification for you and you will see this only
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            flexWrap: "nowrap",
            backgroundColor: "#00DCFF",
            padding: 20,
            borderTopStartRadius: 30,
            borderBottomEndRadius: 30,
          }}
        >
          <Text>
            This is some notification for you and you will see this only
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            flexWrap: "nowrap",
            backgroundColor: "#00DCFF",
            padding: 20,
            borderTopStartRadius: 30,
            borderBottomEndRadius: 30,
          }}
        >
          <Text>
            This is some notification for you and you will see this only
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;
