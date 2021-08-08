import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Stopwatch from "./components/Stopwatch";
import TaskList from "./components/TaskList";
import Menus from "./components/Menus";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stopwatch />
      <TaskList />
      <Menus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
