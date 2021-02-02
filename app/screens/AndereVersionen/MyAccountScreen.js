import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AccListComponent from "../components/AccListComponent";

//Config
import colors from "../config/colors";

const accInfo = {
  name: "Mosh Hamedani",
  email: "pro@gmail.com",
};

function MyAccountScreen({ require }) {
  return (
    <Screen style={{ backgroundColor: colors.ligth }}>
      <View>
        <View style={styles.personContainer}>
          <Image source={require} style={styles.image} />
          <View style={styles.text}>
            <AppText style={styles.name}>{accInfo.name}</AppText>
            <AppText style={styles.email}>{accInfo.email}</AppText>
          </View>
        </View>
        <AccListComponent
          children={"My Listing"}
          styleView={{ backgroundColor: colors.primary }}
          iconName={"format-list-bulleted"}
        ></AccListComponent>
        <AccListComponent
          children={"My Messages"}
          styleView={{ backgroundColor: colors.secondary }}
          iconName={"email"}
        ></AccListComponent>
        <View style={styles.logout}>
          <AccListComponent
            children={"Log Out"}
            styleView={{ backgroundColor: colors.yellow }}
            iconName={"logout"}
          ></AccListComponent>
        </View>
      </View>
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
