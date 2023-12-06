import { ScrollView, Text } from "react-native";
import React from "react";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      <Text>Categories</Text>
    </ScrollView>
  );
};

export default Categories;
