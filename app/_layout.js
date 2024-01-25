import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import Navbar from "../components/Navbar"
import { StyleSheet, View } from "react-native"

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Slot />
      <Navbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
