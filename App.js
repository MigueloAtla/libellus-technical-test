import { StatusBar } from "expo-status-bar"
import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"
import { useStore } from "./store"

export default function App() {
  const theme = useStore((state) => state.theme)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style={theme === "light" ? "white" : "black"} /> /
      <Link href="/about" asChild>
        <Pressable>
          <Text>About</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
