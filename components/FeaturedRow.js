import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import Hezu from "../images/jesus.png";
import createClient from "../sanity";

const HezuKristo = Image.resolveAssetSource(Hezu).uri;

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    createClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

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

        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
