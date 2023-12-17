import { StatusBar } from "expo-status-bar";
import { Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-5">
        <Text className="dark:text-white">New Collection </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
