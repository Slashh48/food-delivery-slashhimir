import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import Hezu from "../images/jesus.png";

const HezuKristo = Image.resolveAssetSource(Hezu).uri;

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#0099cc" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant cards */}
        <RestaurantCard
          id={123}
          imgUrl={HezuKristo}
          title="Djes ba"
          rating={4.7}
          genre="Seljacka kujna"
          address="Svilajnac 2"
          short_description="Sta cekate?"
          dishes={[]}
          long={20}
          lat={5}
        />
        <RestaurantCard
          id={123}
          imgUrl={HezuKristo}
          title="Djes ba"
          rating={4.7}
          genre="Seljacka kujna"
          address="Svilajnac 2"
          short_description="Sta cekate?"
          dishes={[]}
          long={20}
          lat={5}
        />
        <RestaurantCard
          id={123}
          imgUrl={HezuKristo}
          title="Djes ba"
          rating={4.7}
          genre="Seljacka kujna"
          address="Svilajnac 2"
          short_description="Sta cekate?"
          dishes={[]}
          long={20}
          lat={5}
        />
        <RestaurantCard
          id={123}
          imgUrl={HezuKristo}
          title="Djes ba"
          rating={4.7}
          genre="Seljacka kujna"
          address="Svilajnac 2"
          short_description="Sta cekate?"
          dishes={[]}
          long={20}
          lat={5}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
