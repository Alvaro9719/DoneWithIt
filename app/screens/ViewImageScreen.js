import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="close"
        size={40}
        style={styles.closeIcon}
      ></MaterialCommunityIcons>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={40}
        style={styles.deleteIcon}
      ></MaterialCommunityIcons>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    color: "white",
    position: "absolute",
    top: 60,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    color: "white",
    position: "absolute",
    top: 60,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
