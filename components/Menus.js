import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Menus extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            style={styles.btnIcon}
            size={48}
            name="calendar"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            style={styles.btnIcon}
            size={48}
            name="home"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            style={styles.btnIcon}
            size={48}
            name="tune"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 60,
  },
  menuItem: {
    width: 78,
    height: 78,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    borderRadius: 14,
  },
  btnIcon: { color: "white" },
});

export default Menus;
