import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserCircleIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Cattegories from "../components/Cattegories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white py-5">
      {/* Header */}
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

      {/* Search box */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="#0099cc" size={25} />
          <TextInput placeholder="Restaurants" keyboardType="default" />
        </View>
        <AdjustmentsHorizontalIcon color="#0099cc" />
      </View>

      {/* Main */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Cattegories />

        {/* Featured */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Today's sponsored restaurants"
        />
        {/* Discounts */}
        <FeaturedRow
          id="2"
          title="Discounts"
          description="Special discounts for you to enjoy!"
        />
        {/* Near you */}
        <FeaturedRow
          id="3"
          title="Near you"
          description="Check out these restaurants nearby!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
