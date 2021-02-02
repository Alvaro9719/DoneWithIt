import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "sans-serif",
    color: "black",
    fontStyle: "normal",
    fontWeight: "900",
    textAlign: "auto",
  },
});

export default AppText;
