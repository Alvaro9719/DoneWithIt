import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    fontFamily: "Avenir",
    color: "tomato",
    fontStyle: "normal",
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "auto",
    lineHeight: 90,
    letterSpacing: 10,
  },
});

export default AppText;
