import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "../products";
const productsList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default productsList;
