import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class TaskList extends Component {
  tasks = [
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
  ];

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.todayTitle}>Today 1/6</Text>
        <View>
          {this.tasks.map((data) => (
            <TouchableOpacity style={styles.taskContainer} key={data.key}>
              <View
                style={{ ...styles.taskItem, backgroundColor: data.taskcolor }}
              >
                <Text>{data.name}</Text>
                <View style={styles.taskItemTime}>
                  <Text style={styles.taskItemPlaytime}>{data.playtime}</Text>
                  <Text
                    style={{
                      ...styles.taskItemGoaltime,
                      color: data.completed ? "#52BB63" : "#C1463E",
                    }}
                  >
                    {data.goaltime}
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.taskBar, borderColor: data.taskcolor }}>
                <View
                  style={{
                    ...styles.taskBarPaint,
                    backgroundColor: data.taskcolor,
                    width: data.achievePer,
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginRight: 24,
    marginLeft: 24,
  },

  todayTitle: {
    marginBottom: 8,
  },

  taskContainer: {
    marginBottom: 12,
  },
  taskItem: {
    height: 40,
    paddingLeft: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskItemTitle: {
    fontSize: 14,
  },

  taskItemTime: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 2,
  },
  taskItemPlaytime: {
    paddingRight: 10,
  },
  taskItemGoaltime: {
    paddingRight: 10,
  },

  taskBar: {
    height: 12,
    borderWidth: 1,
  },
  taskBarPaint: {
    height: 10,
    opacity: 0.5,
  },
});

export default TaskList;
