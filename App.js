import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Stopwatch from "./components/Stopwatch";
import TaskList from "./components/TaskList";
import Menus from "./components/Menus";

export default class App extends Component {
  state = {
    stopwatch_state: {
      title: "Achiever",
      playtime: "00:00:00",
      color: "#C4C4C4",
    },

    today_achieved: "1/6",
    tasks: [
      {
        name: "Project",
        completed: false,
        playtime: "00:00:00",
        goaltime: "01:00:00",
        taskcolor: "#AEC5FF",
        achievePer: "0%",
      },
      {
        name: "CS",
        completed: true,
        playtime: "01:39:54",
        goaltime: "00:00:00",
        taskcolor: "#AAE3F5",
        achievePer: "100%",
      },
      {
        name: "New Tech",
        completed: false,
        playtime: "00:00:00",
        goaltime: "00:20:00",
        taskcolor: "#FFF069",
        achievePer: "0%",
      },
      {
        name: "Blog",
        completed: false,
        playtime: "00:00:00",
        goaltime: "00:20:00",
        taskcolor: "#D2AEFF",
        achievePer: "0%",
      },
      {
        name: "Portfolio",
        completed: false,
        playtime: "00:00:00",
        goaltime: "00:20:00",
        taskcolor: "#FFAEAE",
        achievePer: "0%",
      },
      {
        name: "Translate",
        completed: false,
        playtime: "00:00:00",
        goaltime: "00:20:00",
        taskcolor: "#AEFFB6",
        achievePer: "0%",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Stopwatch stopwatch_state={this.state.stopwatch_state} />
          <TaskList
            today_achieved={this.state.today_achieved}
            tasks={this.state.tasks}
          />
        </View>
        <Menus />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
