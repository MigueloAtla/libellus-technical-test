import React, { useEffect } from "react"
import { StyleSheet, Switch, Text, View } from "react-native"
import { useState } from "react"
import { Link } from "expo-router"
import { useStore } from "../store"

const Settings = () => {
  const theme = useStore((state) => state.theme)

  useEffect(() => {
    console.log("theme changed", theme)
  }, [theme])

  const styles = StyleSheet.create({
    headerText: {
      fontSize: 36,
      color: theme === "dark" ? "#fff" : "#000",
    },
    pageContainer: {
      flex: 1,
      width: "100%",
      backgroundColor: theme === "dark" ? "#222632" : "#fff",
    },
    settingContainer: {
      margin: 20,
      borderRadius: 16,
      backgroundColor: theme === "dark" ? "#4a4a5f" : "#fafafa",
      borderWidth: 1,
      borderColor: "#eeeff0",
      padding: 10,
    },
    divider: {
      height: 1,
      width: "100%",
      backgroundColor: theme === "dark" ? "#fafafa" : "#EAEBED",
    },
    settingRow: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    link: {
      height: 30,
      width: "100%",
      marginTop: 10,
    },
    text: {
      color: theme === "dark" ? "#fff" : "#000",
    },
  })

  return (
    <View style={styles.pageContainer}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={[styles.headerText, styles.text]}>SETTINGS</Text>
      </View>
      <View style={styles.settingContainer}>
        <View style={styles.settingRow}>
          <Text style={styles.text}>Dark Mode</Text>
          <SettingSwitch />
        </View>
        <View style={styles.divider} />

        <Link
          href="dataManagement"
          style={[
            styles.settingRow,
            styles.link,
            {
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <View>
            <Text style={styles.text}>Data Management</Text>
          </View>
        </Link>
        <View style={styles.divider} />
        <Link
          href={{ pathname: "/user/id", params: null }}
          style={[styles.settingRow, styles.link]}
        >
          <View>
            <Text style={styles.text}>User Profile</Text>
          </View>
        </Link>
      </View>
    </View>
  )
}

const SettingSwitch = () => {
  const theme = useStore((state) => state.theme)
  const setTheme = useStore((state) => state.setTheme)
  const [isEnabled, setIsEnabled] = useState(theme === "dark" ? true : false)

  // useEffect(() => {
  //   console.log("theme changed", theme)
  // }, [theme])

  useEffect(() => {
    if (isEnabled) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [isEnabled])

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <View>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  )
}

export default Settings
