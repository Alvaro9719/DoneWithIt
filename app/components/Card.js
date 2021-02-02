import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

//Config
import colors from "../config/colors";
import ViewImageScreen from "../screens/ViewImageScreen";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginTop: 7,
  },
});
export default Card;
