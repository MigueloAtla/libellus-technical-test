import React from "react"
import { Link } from "expo-router"
import { Text, View, StyleSheet } from "react-native"
import { useStore } from "../store"

const Navbar = () => {
  const theme = useStore((state) => state.theme)
  const styles = StyleSheet.create({
    link: {
      fontSize: 16,
      paddingTop: 10,
      color: theme === "dark" ? "#fff" : "#000",
    },
  })
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingBottom: 20,
        alignItems: "center",
        backgroundColor: theme === "dark" ? "#222632" : "#fff",
      }}
    >
      <Link style={styles.link} href="/dashboard">
        Dashboard
      </Link>
      <Link style={styles.link} href="/settings">
        Settings
      </Link>
    </View>
  )
}

export default Navbar
