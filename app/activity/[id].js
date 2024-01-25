import React from "react"
import { StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useStore } from "../../store"

const Activity = () => {
  const activity = useLocalSearchParams()
  const { height, width } = useWindowDimensions()
  const theme = useStore((state) => state.theme)

  const styles = StyleSheet.create({
    activityContainer: {
      height: height - 200,
      width: width - 20,
      margin: 10,
      backgroundColor: "#b7b7ec",
      borderRadius: 20,
      padding: 20,
      gap: 30,
    },
    header: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      height: 60,
    },
    headerText: {
      fontSize: 36,
      color: theme === "dark" ? "grey" : "#000",
    },
    pageContainer: {
      justifyContent: "flex-start",
      flex: 1,
      backgroundColor: theme === "dark" ? "#222632" : "#fafafa",
    },
    activityName: {
      fontSize: 24,
    },
    activityDescription: {
      // marginTop: 30,
    },
  })
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ACTIVITY</Text>
      </View>
      <View style={styles.activityContainer}>
        <Text style={styles.activityName}>{activity.name}</Text>
        <Text style={styles.activityDescription}>{activity.description}</Text>
        {activity.id !== "5" && (
          <View>
            <Text>{activity.startTime}</Text>
            <Text>{activity.endTime}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default Activity
