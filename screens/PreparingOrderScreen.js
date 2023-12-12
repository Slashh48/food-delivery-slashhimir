import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 6000);
  }, []);
  return (
    <SafeAreaView className="bg-[#0099cc] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/foodOrder.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-48 w-48"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg mt-10 text-white font-bold text-center"
      >
        Waiting for the restaurant
      </Animatable.Text>
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg mb-10 text-white font-bold text-center"
      >
        to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
