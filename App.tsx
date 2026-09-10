import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Inputs } from "./src/ui/Inputs";
import { MyKeyboard } from "./src/ui/MyKeybord";
import CategoryScreen from "./src/screens/CategoryScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7cf0b0",
    justifyContent: "center", // центрує вміст по вертикалі
  },
  text: {
    textAlign: "center", // центрує текст залежно від ширини екрана
    fontSize: 20,
    fontWeight: "bold",
  },
  flatListContainer: {
    flexGrow: 0, // не дає FlatList займати весь вертикальний екран
    marginVertical: 20, //відступ зверху та знизу
  },
  listContent: {
    flexGrow: 1,
    justifyContent: "center", // центрує елементи FlatList по горизонталі
    alignItems: "center", // центрує елементи FlatList по вертикалі
    borderWidth: 1, // додає рамку навколо FlatList
    borderColor: "black",
  },
  item: {
    marginHorizontal: 10,
  },
});
