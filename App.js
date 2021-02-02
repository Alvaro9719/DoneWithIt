import React from "react";
import { Button, StyleSheet, View } from "react-native";

//Screens
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ViewScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";

//Components
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

//Config
import colors from "./app/config/colors";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MyAccountScreen></MyAccountScreen>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.CardBackground,
    paddingTop: 100,
    padding: 20,
  },
});
