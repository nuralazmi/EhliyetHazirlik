import { StatusBar } from "react-native";
import React from "react";
import colors from "../stylesheet/colors";
const TopBar = (props) => {
  return <StatusBar
    animated={true}
    backgroundColor={props.theme === "dark" ? colors.dark.backgroundColor : colors.light.backgroundColor}
    barStyle={props.theme === "dark" ? "light-content" : "dark-content"}
  />;
};

export default TopBar;
