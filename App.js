import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

//Screens
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ViewScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";

//Components
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";

//Config
import colors from "./app/config/colors";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/lists/ListItem";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [selectedValue, setSelectedValue] = useState("java");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState();

  return <ListingEditScreen></ListingEditScreen>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
