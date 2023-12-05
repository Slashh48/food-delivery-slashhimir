import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../images/jesus.png")}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#0099cc" />
          </Text>
        </View>

        <UserCircleIcon size={35} color="#0099cc" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
