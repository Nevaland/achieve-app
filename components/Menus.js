import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Menus = ({ setPage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setPage(0);
        }}
      >
        <MaterialCommunityIcons
          style={styles.btnIcon}
          size={48}
          name="calendar"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setPage(1);
        }}
      >
        <MaterialCommunityIcons style={styles.btnIcon} size={48} name="home" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setPage(2);
        }}
      >
        <MaterialCommunityIcons style={styles.btnIcon} size={48} name="tune" />
      </TouchableOpacity>
    </View>
  );
};

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
