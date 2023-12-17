import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, CheckCircleIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const SuccessScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-green-600 flex-1 justify-center items-center">
      <CheckCircleIcon color="white" size={150} />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg mt-10 text-white font-bold text-center"
      >
        We have received your order!
      </Animatable.Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          className="text-lg mt-10 text-white font-bold text-center underline"
        >
          Back to home
        </Animatable.Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuccessScreen;
