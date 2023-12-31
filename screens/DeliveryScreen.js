import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#0099cc] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-lg p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400 pt-3">
                Estimated arrival
              </Text>
              <Text className="text-4xl font-bold mt-1">45-55 minutes</Text>
            </View>
            <Image
              source={require("../assets/bike2.gif")}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar
            size={30}
            color="#0099cc"
            indeterminate={true}
            className="mt-2"
          />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared...
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#cc0000"
        />
      </MapView>
      <View className="bg-white flex-row items-center space-x-3 h-28">
        <Image
          source={require("../images/abidah.png")}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Nemanja Gligović</Text>
          <Text className="text-gray-400">Your rider</Text>
        </View>
        <Text className="text-[#0099cc] text-lg mr-5 font-bold">Call</Text>
      </View>
    </View>
  );
};

export default DeliveryScreen;
