import { View, Text, StyleSheet, TextInput } from "react-native";
import CategoryType from "../types/CategoryType";

export default function CategoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category Screen</Text>
      <TextInput style={styles.input} placeholder="title" />
      <TextInput style={styles.input} placeholder="image" />
      <TextInput style={styles.input} placeholder="color" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    gap: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
  },
});
