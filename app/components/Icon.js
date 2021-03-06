import React from "react";
import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  iconBackground = "#fff",
  backgroundColor = "#000",
  size = 50,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        color={iconBackground}
      ></MaterialCommunityIcons>
    </View>
  );
}
export default Icon;
