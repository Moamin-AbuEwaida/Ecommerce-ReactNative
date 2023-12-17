import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";

const productCard = ({ image, category, title, price, description }) => {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default productCard;
