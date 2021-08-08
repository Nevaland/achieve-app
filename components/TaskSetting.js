import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TaskSetting = ({ tasks, setTasks }) => {
  const addTask = () => {
    setTasks([
      ...tasks,
      {
        name: "name",
        completed: false,
        playtime: "00:00:00",
        remaintime: "00:20:00",
        goaltime: "00:20:00",
        taskcolor: "#EFEFEF",
        achievePer: "0%",
        days: [true, true, true, true, true, true, true],
      },
    ]);
  };
  const delTask = (task_i) => {
    setTasks([
      ...tasks.slice(0, task_i),
      ...tasks.slice(task_i + 1, tasks.length),
    ]);
  };
  const selectDay = (task_i, day_i) => {
    tasks[task_i].days[day_i] = !tasks[task_i].days[day_i];
    setTasks([...tasks]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      {tasks.map((task, index) => (
        <View
          style={{ ...styles.taskItem, backgroundColor: task.taskcolor }}
          key={index}
        >
          <TextInput
            style={styles.taskItemTitle}
            value={task.name}
            onChangeText={(text) =>
              setTasks([
                ...tasks.slice(0, index),
                { ...tasks[index], name: text },
                ...tasks.slice(index + 1, tasks.length),
              ])
            }
          />
          <View style={styles.taskItemRight}>
            <TextInput
              style={styles.taskItemColor}
              value={task.taskcolor}
              onChangeText={(text) =>
                setTasks([
                  ...tasks.slice(0, index),
                  { ...tasks[index], taskcolor: text },
                  ...tasks.slice(index + 1, tasks.length),
                ])
              }
            />
            <View style={styles.taskItemDays}>
              <TouchableOpacity
                onPress={() => {
                  selectDay(index, 0);
                }}
              >
                <Text
                  style={{
                    ...styles.taskItemDay,
                    color: task.days[0] ? "#444444" : "#a4a4a4",
                  }}
                >
                  월
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  selectDay(index, 1);
                }}
              >
                <Text
                  style={{
                    ...styles.taskItemDay,
                    color: task.days[1] ? "#444444" : "#a4a4a4",
                  }}
                >
                  화
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  selectDay(index, 2);
                }}
              >
                <Text
                  style={{
                    ...styles.taskItemDay,
                    color: task.days[2] ? "#444444" : "#a4a4a4",
                  }}
                >
                  수
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  selectDay(index, 3);
                }}
              >
                <Text
                  style={{
                    ...styles.taskItemDay,
                    color: task.days[3] ? "#444444" : "#a4a4a4",
                  }}
                >
                  목
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  selectDay(index, 4);
                }}
              >
                <Text
                  style={{
                    ...styles.taskItemDay,
                    color: task.days[4] ? "#444444" : "#a4a4a4",
                  }}
                >
                  금
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  selectDay(index, 5);
                }}
              >
                <Text
                  style={{
                    ...styles.taskItemDay,
                    color: task.days[5] ? "#444444" : "#a4a4a4",
                  }}
                >
                  토
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  selectDay(index, 6);
                }}
              >
                <Text
                  style={{
                    ...styles.taskItemDay,
                    color: task.days[6] ? "#444444" : "#a4a4a4",
                  }}
                >
                  일
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.taskItemTime}
              value={task.goaltime}
              onChangeText={(text) =>
                setTasks([
                  ...tasks.slice(0, index),
                  { ...tasks[index], goaltime: text, remaintime: text },
                  ...tasks.slice(index + 1, tasks.length),
                ])
              }
            />
            <TouchableOpacity
              onPress={() => {
                delTask(index);
              }}
            >
              <MaterialCommunityIcons
                style={styles.delBtnIcon}
                size={20}
                name="delete"
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={addTask}>
        <MaterialCommunityIcons
          style={styles.addBtnIcon}
          size={40}
          name="plus-circle"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginRight: 24,
    marginLeft: 24,
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 10,
  },
  taskItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 40,
    backgroundColor: "#EFEFEF",
    marginBottom: 10,
    paddingLeft: 14,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskItemTitle: {
    color: "black",
    width: 100,
  },
  taskItemRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskItemColor: {
    width: 48,
    fontSize: 10,
  },
  taskItemDays: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
  taskItemDay: {
    color: "#848484",
    fontSize: 12,
  },
  taskItemTime: {
    color: "#646464",
    fontSize: 12,
    marginLeft: 4,
  },

  addBtnIcon: {
    color: "#848484",
  },
  delBtnIcon: {
    color: "#848484",
    marginLeft: 4,
  },
});

export default TaskSetting;
