import { View, Text } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { Center } from "native-base";
const Timer = () => {
  const handleCompleted = () => {
    console.log("completed");
    // alert("completed");
  };
  return (
    <View>
      <Center style={{ marginTop: 20 }}>
        <CircularProgress
          value={150}
          maxValue={200}
          radius={100}
          titleColor="white"
          activeStrokeColor="#00DCFF"
          inActiveStrokeColor="white"
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={20}
          activeStrokeWidth={20}
          onAnimationComplete={handleCompleted}
        />
      </Center>
    </View>
  );
};

export default Timer;
