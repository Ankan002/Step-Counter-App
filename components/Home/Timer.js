import { View, Text, Alert } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { Center } from "native-base";
import axios from "axios";
const Timer = (props) => {
  let crWallete = props.curWalleteStatus;
  console.log(crWallete);

  console.log(props.activeuserid);

  if (props.stepValue > props.goalValue) {
    let finalCurrentWallete = crWallete + 2;

    console.log(finalCurrentWallete);
    axios
      .post(
        "https://step-counter-dashboard.vercel.app/api/dynamic/increaseWallete",
        {
          wallateValue: finalCurrentWallete,
          userid: props.activeuserid,
        }
      )
      .then((acc) => {
        console.log("wallete updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View>
      <Center style={{ marginTop: 20 }}>
        <CircularProgress
          value={props.stepValue}
          maxValue={props.goalValue ? props.goalValue : 5000}
          radius={100}
          titleColor="white"
          activeStrokeColor="#FE0097"
          inActiveStrokeColor="white"
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={20}
          activeStrokeWidth={20}
        />
      </Center>
    </View>
  );
};

export default Timer;
