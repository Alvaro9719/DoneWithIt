import React from "react";
import { Button, StyleSheet, View } from "react-native";

//Components
import AppText from "./AppText";

//Config
import colors from "../config/colors";

function RoundButton({ children }) {
  console.log(colors.primary);
  return (
    <View style={styles.button}>
      <AppText style={styles.apptext}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  apptext: {
    color: colors.white,
  },
});

export default RoundButton;
