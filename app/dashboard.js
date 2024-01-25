import React, { useEffect } from "react"
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import * as activitiesData from "../activities.json"
import { Link } from "expo-router"
import { useStore } from "../store"

const DashBoard = () => {
  const [activities, setActivities] = React.useState([])

  const theme = useStore((state) => state.theme)
  console.log("🚀 ~ DashBoard ~ theme:", theme)
  useEffect(() => {
    console.log("🚀 ~ DashBoard ~ theme:", theme)
  }, [theme])

  useEffect(() => {
    const activitiesMap = activitiesData.activities.map((activity) => {
      return {
        id: activity.id,
        name: activity.name,
        description: activity.description,
        startTime: new Date(activity.startTime),
        endTime: new Date(activity.endTime),
      }
    })
    setActivities(activitiesMap)
  }, [])

  const addNewActivity = () => {
    const newActivity = {
      id: 6,
      name: "New Activity",
      description: "New Activity Description",
      startTime: new Date(),
      endTime: new Date(),
    }
    setActivities([...activities, newActivity])
  }

  const removeLastElement = () => {
    const newArray = activities.slice(0, -1)
    setActivities(newArray)
    if (newArray.length <= 0) {
      setActivities(null)
    }
  }

  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      height: 60,
    },
    headerText: {
      fontSize: 36,
      color: theme === "dark" ? "#fff" : "#000",
    },
    pageContainer: {
      flex: 1,
      width: "100%",
      backgroundColor: theme === "dark" ? "#222632" : "#fff",
    },
    activitiesContainer: {
      gap: 10,
      margin: 10,
    },
    activity: {
      backgroundColor: "#b7b7ec",
      alignItems: "center",
      justifyContent: "center",
      height: 80,
      borderRadius: 8,
      padding: 10,
    },
    activityName: {},
    buttonsContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      position: "absolute",
      bottom: 80,
      margin: 10,
    },
    addButton: {
      backgroundColor: "#d9d9d9",
      height: 60,
      width: "30%",
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    textButton: {
      color: "black",
    },
  })

  return (
    <>
      <ScrollView style={styles.pageContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>DashBoard</Text>
        </View>
        <View style={styles.activitiesContainer}>
          {activities.map((activity) => (
            <Link
              style={styles.activity}
              key={activity.id}
              href={{ pathname: "/activity/id", params: activity }}
            >
              <View>
                <Text style={styles.activityName}>{activity.name}</Text>
              </View>
            </Link>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.addButton} onPress={removeLastElement}>
          <Text style={styles.textButton}>Remove</Text>
        </Pressable>
        <Pressable style={styles.addButton} onPress={addNewActivity}>
          <Text style={styles.textButton}>Add</Text>
        </Pressable>
      </View>
    </>
  )
}

export default DashBoard
