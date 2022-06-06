import { Platform, StatusBar } from "react-native";
import React from "react";
import colors from "../stylesheet/colors";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";

const TopBar = (props) => {
  // const navigation = useNavigation();
  //
  // const netInfo = useNetInfo();
  // if (netInfo.isConnected === false) navigation.navigate("Info");

  return <StatusBar
    animated={true}
    backgroundColor={props.theme === "dark" ? colors.dark.backgroundColor : colors.light.backgroundColor}
    barStyle={props.theme === "dark" ? "light-content" : "dark-content"}
  />;
};

export default TopBar;
