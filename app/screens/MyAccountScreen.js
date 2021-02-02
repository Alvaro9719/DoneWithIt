import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

//Components
import Screen from "../components/Screen";

//Config
import colors from "../config/colors";

const accInfo = {
  name: "Mosh Hamedani",
  email: "pro@gmail.com",
};

function MyAccountScreen(props) {
  return (
    <Screen styles={StyleSheet.screen}>
      <View>
        <View style={styles.person}>
          <Image source={require("../assets/mosh.jpg")} style={styles.image} />
          <View style={styles.text}>
            <AppText>{accInfo.name}</AppText>
            <AppText>{accInfo.email}</AppText>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.text}>
            <AppText>My Listing</AppText>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.text}>
            <AppText>My Messages</AppText>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.text}>
            <AppText>Log O ut</AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
  screen: {
    backgroundColor: colors.ligth,
  },
  person: {
    backgroundColor: colors.white,
    padding: 7,
    flexDirection: "row",
    margin: 7,
    width: "100%",
    height: 70,
  },
  text: {
    backgroundColor: colors.white,
    padding: 7,
  },
});

export default MyAccountScreen;
