import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "../stylesheet";
import components from "../components";

const List = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar theme="dark" />
      <components.PageHeader theme="dark" text="Sınav Listesi" navigation={navigation} />
    </SafeAreaView>
  );
};


export default List;
