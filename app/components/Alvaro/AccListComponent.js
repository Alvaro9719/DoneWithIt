import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import AppText from "../components/AppText";

//Config
import colors from "../config/colors";

function AccListComponent({ children, styleView, iconName }) {
  return (
    <View style={styles.row}>
      <View style={[styles.icon, styleView]}>
        <MaterialCommunityIcons
          name={iconName}
          size={30}
          style={{ color: colors.white }}
        ></MaterialCommunityIcons>
      </View>
      <AppText style={styles.text}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  listing: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    backgroundColor: colors.white,
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textTransform: "capitalize",
    fontWeight: "800",
  },
});
export default AccListComponent;
