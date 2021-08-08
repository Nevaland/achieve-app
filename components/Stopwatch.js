import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Stopwatch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.stopwatch_state.title}</Text>
        <View style={styles.stopwatch}>
          <View
            style={{
              ...styles.clock,
              backgroundColor: this.props.stopwatch_state.color,
            }}
          >
            <Text style={styles.clockText}>
              {this.props.stopwatch_state.playtime}
            </Text>
          </View>

          <View>
            <TouchableOpacity>
              <View style={styles.startBtn}>
                <MaterialCommunityIcons
                  style={styles.btnIcon}
                  size={30}
                  name="play"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.pauseBtn}>
                <MaterialCommunityIcons
                  style={styles.btnIcon}
                  size={30}
                  name="pause"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

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
