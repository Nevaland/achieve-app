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
        remaintime: "01:00:00",
        goaltime: "01:00:00",
        taskcolor: "#AEC5FF",
        achievePer: "0%",
      },
      {
        name: "CS",
        completed: true,
        playtime: "01:39:54",
        remaintime: "00:00:00",
        goaltime: "00:00:00",
        taskcolor: "#AAE3F5",
        achievePer: "100%",
      },
      {
        name: "New Tech",
        completed: false,
        playtime: "00:00:00",
        remaintime: "00:20:00",
        goaltime: "00:20:00",
        taskcolor: "#FFF069",
        achievePer: "0%",
      },
      {
        name: "Blog",
        completed: false,
        playtime: "00:00:00",
        remaintime: "00:20:00",
        goaltime: "00:20:00",
        taskcolor: "#D2AEFF",
        achievePer: "0%",
      },
      {
        name: "Portfolio",
        completed: false,
        playtime: "00:00:00",
        remaintime: "00:20:00",
        goaltime: "00:20:00",
        taskcolor: "#FFAEAE",
        achievePer: "0%",
      },
      {
        name: "Translate",
        completed: false,
        playtime: "00:00:00",
        remaintime: "00:00:20",
        goaltime: "00:00:20",
        taskcolor: "#AEFFB6",
        achievePer: "0%",
      },
    ],
  });

  const [time, setTime] = useState("00:00:00");

  const selectTask = (task) => {
    handleStop(state.stopwatch_state.title, time);
    setState({
      ...state,
      stopwatch_state: {
        title: task.name,
        stopwatch_color: task.taskcolor,
      },
    });
    setTime("00:00:00");
  };

  const handleStop = (task_name, time) => {
    if (task_name) {
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].name === task_name) {
          const sec = timeToSec(time);
          state.tasks[i].playtime = secToTime(
            timeToSec(state.tasks[i].playtime) + sec
          );
          if (!state.tasks[i].completed) {
            const goalSec = timeToSec(state.tasks[i].remaintime);
            if (goalSec < sec) {
              state.tasks[i].completed = true;
              state.tasks[i].remaintime = "00:00:00";
              state.tasks[i].achievePer = "100%";
            } else {
              console.log("------");
              console.log(goalSec - sec);
              console.log(timeToSec(state.tasks[i].goaltime));
              console.log(
                (100.0 * (goalSec - sec)) / timeToSec(state.tasks[i].goaltime) +
                  "%"
              );
              state.tasks[i].remaintime = secToTime(goalSec - sec);
              state.tasks[i].achievePer =
                100 -
                (100.0 * (goalSec - sec)) / timeToSec(state.tasks[i].goaltime) +
                "%";
            }
          }
        }
      }
    }
  };

  const timeToSec = (time) => {
    return (
      Number(time.substr(0, 2)) * 3600 +
      Number(time.substr(3, 2)) * 60 +
      Number(time.substr(6, 2))
    );
  };
  const secToTime = (sec) => {
    var hours = Math.floor(sec / 3600);
    var minutes = Math.floor((sec - hours * 3600) / 60);
    var seconds = sec - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let time = hours + ":" + minutes + ":" + seconds;
    time = time.substr(0, 8);

    return time;
  };

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
