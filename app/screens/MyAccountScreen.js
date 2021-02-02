import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";
import AppText from "../components/AppText";

//Config
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const accInfo = {
  name: "Mosh Hamedani",
  email: "pro@gmail.com",
};

function MyAccountScreen({ require }) {
  return (
    <Screen style={{ backgroundColor: colors.ligth }}>
      <ListItem></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  email: {
    textTransform: "none",
    fontWeight: "normal",
    fontSize: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  logout: {
    marginTop: 30,
  },
  name: {
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "500",
  },
  personContainer: {
    backgroundColor: colors.white,
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    width: "100%",
    height: 100,
  },
  text: {
    paddingLeft: 7,
  },
});

export default MyAccountScreen;
