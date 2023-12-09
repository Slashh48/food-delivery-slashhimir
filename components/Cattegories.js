import { ScrollView, Text, Image } from "react-native";
import CatCard from "./CatCard";
import React, { useEffect, useState } from "react";
import Hezu from "../images/jesus.png";
import createClient, { urlFor } from "../sanity";

const HezuKristo = Image.resolveAssetSource(Hezu).uri;

const Cattegories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    createClient
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}

      {categories.map((category) => (
        <CatCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Cattegories;
