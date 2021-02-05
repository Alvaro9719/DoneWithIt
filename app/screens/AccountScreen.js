import React from "react";
import { Image, StyleSheet, View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";

//Config
import colors from "../config/colors";

const accInfo = {
  name: "Mosh Hamedani",
  email: "pro@gmail.com",
};

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.conatainer}>
        <ListItem
          title={accInfo.name}
          subTitle={accInfo.email}
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                ></Icon>
              }
            ></ListItem>
          )}
        ></FlatList>
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor={colors.yellow}></Icon>
        }
      ></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 30,
  },
  screen: {
    backgroundColor: colors.ligth,
  },
});

export default AccountScreen;
