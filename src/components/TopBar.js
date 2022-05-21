import { StatusBar } from "react-native";
import React from "react";

const TopBar = () => {
  return <StatusBar
    animated={true}
    backgroundColor="#f2f8fd"
    barStyle="dark-content"
  />;
};

export default TopBar
