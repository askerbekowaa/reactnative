import TodoScreen from "@/screens/TodoScreen";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TodoScreen/>
    </View>
  );
}