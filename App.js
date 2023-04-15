import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Markets</Text>
      </View>
      <View style={styles.divider} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  divider: {
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: "#A9ABB1",
    height: StyleSheet.hairlineWidth,
  },
});
