import React, { useState } from "react"
import { Button, Text, View, StyleSheet, Pressable } from "react-native"
import { useStore } from "../store"

const DataManagement = () => {
  const theme = useStore((state) => state.theme)
  const [dataPercentage, setDataPercentage] = useState(30)
  const [dataUsage, setDataUsage] = useState(1.5)
  const [statistics] = useState({
    activitiesCompletedWeek: 15,
    activitiesCompletedMonth: 50,
    productivityWeek: {
      tasksCompleted: 10,
      tasksPending: 5,
      efficiency: "70%",
    },
    productivityMonth: {
      tasksCompleted: 40,
      tasksPending: 10,
      efficiency: "80%",
    },
  })
  const syncData = () => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Promise rejected: api response timeout"), 5000)
    })
    myPromise.then(() => {
      console.log("Success")
    })
  }
  const clearData = () => {
    if (dataUsage === 0) {
      setDataUsage(10)
    } else {
      setDataUsage(0)
      setDataPercentage(0.1)
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      padding: 20,
      gap: 20,
      backgroundColor: theme === "dark" ? "#222632" : "#fff",
    },
    header: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      height: 60,
    },
    headerText: {
      fontSize: 36,
    },
    // pageContainer: {
    //   backgroundColor: theme === "dark" ? "#222632" : "#fff",
    //   justifyContent: "flex-start",
    //   flex: 1,
    // },
    activityName: {
      fontSize: 24,
    },
    statisticsContainer: {
      marginTop: 20,
    },
    statisticsHeader: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    progressBarContainer: {
      marginTop: 5,
      height: 15,
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "lightgray",
    },
    text: {
      color: theme === "dark" ? "#fff" : "#000",
    },
    button: {
      backgroundColor: "#5A75FF",
      borderRadius: 10,
      width: "100%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
    },
  })
  return (
    <View style={styles.container}>
      <Text style={[styles.headerText, styles.text]}>DataManagement</Text>

      <View style={styles.statisticsContainer}>
        <Text style={[styles.statisticsHeader, styles.text]}>Statistics</Text>
        <Text style={[styles.text]}>
          Activities Completed (Week): {statistics.activitiesCompletedWeek}
        </Text>
        <Text style={[styles.text]}>Productivity (Week):</Text>
        <Text style={[styles.text]}>
          - Tasks Completed: {statistics.productivityWeek.tasksCompleted}
        </Text>
        <Text style={[styles.text]}>
          - Tasks Pending: {statistics.productivityWeek.tasksPending}
        </Text>
        <Text style={[styles.text]}>
          - Efficiency: {statistics.productivityWeek.efficiency}
        </Text>
        <Text style={[styles.text]}>
          Activities Completed (Month): {statistics.activitiesCompletedMonth}
        </Text>
        <Text style={[styles.text]}>Productivity (Month):</Text>
        <Text style={[styles.text]}>
          - Tasks Completed: {statistics.productivityMonth.tasksCompleted}
        </Text>
        <Text style={[styles.text]}>
          - Tasks Pending: {statistics.productivityMonth.tasksPending}
        </Text>
        <Text style={[styles.text]}>
          - Efficiency: {statistics.productivityMonth.efficiency}
        </Text>
      </View>

      <Text style={[styles.statisticsHeader, styles.text]}>Data usage</Text>
      <Text style={[styles.statisticsHeader, styles.text]}>
        {dataUsage}GB - {dataPercentage}% / 5GB
      </Text>
      <View style={styles.progressBarContainer}>
        <View
          style={{
            width: `${dataPercentage}%`,
            height: 15,
            backgroundColor: "#5A75FF",
            borderRadius: 10,
          }}
        />
      </View>

      <Pressable style={styles.button} onPress={syncData}>
        <Text style={[styles.buttonText, { color: "#fff" }]}>SYNC DATA</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={clearData}>
        <Text style={[styles.buttonText, { color: "#fff" }]}>
          CLEAR USAGE DATA
        </Text>
      </Pressable>
    </View>
  )
}

export default DataManagement
