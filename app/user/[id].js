import React, { useState } from "react"
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  useWindowDimensions,
  Pressable,
} from "react-native"
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router"
import styled from "styled-components/native"
import { useStore } from "../../store"

const User = () => {
  const activity = useLocalSearchParams()
  const { height, width } = useWindowDimensions()
  const handleEditPress = () => {
    setEditing(true)
  }
  const handleSavePress = () => {
    setEditing(false)
    console.log("User data updated:", userData)
  }
  const handleChange = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    })
  }
  const theme = useStore((state) => state.theme)

  const styles = StyleSheet.create({
    headerText: {
      fontSize: 36,
      color: theme === "dark" ? "#fff" : "#000",
    },
    text: {
      color: theme === "dark" ? "#fff" : "#000",
    },
    pageContainer: {
      flex: 1,
      width: "100%",
      padding: 10,
      backgroundColor: theme === "dark" ? "#222632" : "#fff",
      alignItems: "center",
      gap: 20,
    },
    userName: {
      fontSize: 30,
    },
    userDataContainer: {
      borderWidth: 1,
      padding: 20,
      borderRadius: 10,
      width: "100%",
      borderColor: theme === "dark" ? "#fafafa" : "#EAEBED",
    },
    input: {
      height: 40,
      borderColor: theme === "dark" ? "#fafafa" : "#EAEBED",
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    editLabel: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
    },
    buttonContainer: {
      marginTop: 20,
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
  const [user, setUser] = React.useState("Tester")
  const logOut = () => {
    if (user !== null) {
      setUser(null)
    } else {
      console.log("error")
      throw new Error("var user is null")
    }
  }
  const logIn = () => {
    if (user === null) {
      setUser("tester")
    }
  }
  const [editing, setEditing] = useState(false)
  const [userData, setUserData] = useState({
    username: "Tester",
    email: "tester@example.com",
    age: 25,
  })

  return (
    <View style={styles.pageContainer}>
      <Text style={[styles.headerText, styles.text]}>USER</Text>
      <Text style={[styles.userName, styles.text]}>Hi {user}!</Text>

      {user === null ? (
        <>
          <Text style={styles.text}>You are logged out</Text>
          <Pressable style={styles.button} title="log in" onPress={logIn}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.userDataContainer}>
          <Text style={styles.text}>Username: {userData.username}</Text>
          <Text style={styles.text}>Email: {userData.email}</Text>
          <Text style={styles.text}>Age: {userData.age}</Text>

          {editing ? (
            <View>
              <Text style={[styles.editLabel, styles.text]}>
                Edit User Data:
              </Text>
              <TextInput
                style={[styles.input, styles.text]}
                placeholder="New Username"
                value={userData.username}
                onChangeText={(text) => handleChange("username", text)}
              />
              <TextInput
                style={[styles.input, styles.text]}
                placeholder="New Email"
                value={userData.email}
                onChangeText={(text) => handleChange("email", text)}
              />
              <TextInput
                style={[styles.input, styles.text]}
                placeholder="New Age"
                value={userData.age.toString()}
                keyboardType="numeric"
                onChangeText={(text) =>
                  handleChange("age", parseInt(text, 10) || 0)
                }
              />
            </View>
          ) : null}

          <View style={styles.buttonContainer}>
            {editing ? (
              <Pressable style={styles.button} onPress={handleSavePress}>
                <Text style={styles.buttonText}>SAVE</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.button} onPress={handleEditPress}>
                <Text style={styles.buttonText}>EDIT</Text>
              </Pressable>
            )}
          </View>
        </View>
      )}
      <Pressable style={styles.button} title="log out" onPress={logOut}>
        <Text style={styles.buttonText}>LOG OUT</Text>
      </Pressable>
    </View>
  )
}

export default User
