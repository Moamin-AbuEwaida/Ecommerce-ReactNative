import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "../products";
import ProductCard from "./productCard";

const productsList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
};

export default productsList;
