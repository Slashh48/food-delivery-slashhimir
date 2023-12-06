import { ScrollView, Text, Image } from "react-native";
import CatCard from "./CatCard";
import React from "react";
import Hezu from "../images/jesus.png";

const HezuKristo = Image.resolveAssetSource(Hezu).uri;

const Cattegories = () => {
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
      <CatCard imgUrl={HezuKristo} title="Test1" />
      <CatCard imgUrl={HezuKristo} title="Test2" />
      <CatCard imgUrl={HezuKristo} title="Test3" />
      <CatCard imgUrl={HezuKristo} title="Test3" />
      <CatCard imgUrl={HezuKristo} title="Test3" />
      <CatCard imgUrl={HezuKristo} title="Test3" />
    </ScrollView>
  );
};

export default Cattegories;
