import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Stopwatch from "./components/Stopwatch";
import TaskList from "./components/TaskList";
import Menus from "./components/Menus";

const App = () => {
  const [state, setState] = useState({
    stopwatch_state: {
      title: "",
      stopwatch_color: "#C4C4C4",
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
  });

  const [time, setTime] = useState("00:00:00");

  const selectTask = (task) => {
    setState({
      ...state,
      stopwatch_state: {
        title: task.name,
        stopwatch_color: task.taskcolor,
      },
    });
    setTime("00:00:00");
  };

  const handleStop = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Stopwatch
          stopwatch_state={state.stopwatch_state}
          handleStop={handleStop}
          time={time}
          setTime={setTime}
        />
        <TaskList
          today_achieved={state.today_achieved}
          tasks={state.tasks}
          selectTask={selectTask}
        />
      </View>
      <Menus />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default App;
