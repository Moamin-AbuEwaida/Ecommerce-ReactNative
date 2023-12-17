import { StatusBar } from "expo-status-bar";
import { Switch, Text, View, SafeAreaView } from "react-native";
import { useColorScheme } from "nativewind";
import ProductsList from "./components/productsList";
import { Fontisto, Ionicons } from "@expo/vector-icons";
export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="flex-row justify-between w-full gap-5">
        <Text className="text-2xl pt-2 font-bold dark:text-white">
          New Collection{" "}
        </Text>
        <View className="flex-row gap-2 pb-2 ">
          {colorScheme === "light" ? (
            <Fontisto
              name="day-sunny"
              size={24}
              color="black"
              style={{ paddingVertical: 4 }}
            />
          ) : (
            <Ionicons
              name="moon"
              size={24}
              color="white"
              style={{ paddingVertical: 4 }}
            />
          )}
          <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        </View>
      </View>
      <ProductsList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
