import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stopwatch = ({ stopwatch_state, handleStop, time, setTime }) => {
  const { title, stopwatch_color } = stopwatch_state;
  const [isRunning, setIsRunning] = useState(false);

  const handlePlay = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const secTime =
            Number(prevTime.substr(0, 2)) * 3600 +
            Number(prevTime.substr(3, 2)) * 60 +
            Number(prevTime.substr(6, 2)) +
            1;
          var hours = Math.floor(secTime / 3600);
          var minutes = Math.floor((secTime - hours * 3600) / 60);
          var seconds = secTime - hours * 3600 - minutes * 60;

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
          z;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ? title : "Achiever"}</Text>
      <View style={styles.stopwatch}>
        <View
          style={{
            ...styles.clock,
            backgroundColor: stopwatch_color,
          }}
        >
          <Text style={styles.clockText}>{time}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={handlePlay}>
            <View style={styles.startBtn}>
              <MaterialCommunityIcons
                style={styles.btnIcon}
                size={30}
                name={isRunning ? "pause" : "play"}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleStop(title, time);
              setTime("00:00:00");
            }}
          >
            <View style={styles.pauseBtn}>
              <MaterialCommunityIcons
                style={styles.btnIcon}
                size={30}
                name="stop"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginRight: 24,
    marginLeft: 24,
  },
  title: {
    fontSize: 20,
    paddingBottom: 4,
  },

  stopwatch: {
    flexDirection: "row",
  },
  clock: {
    flex: 1,
    marginRight: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  clockText: {
    color: "#545454",
    fontSize: 60,
  },

  startBtn: {
    backgroundColor: "#6091CB",
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  pauseBtn: {
    backgroundColor: "#C97474",
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  btnIcon: {
    color: "#ffffff",
  },
});

export default Stopwatch;
