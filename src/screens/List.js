import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "../stylesheet";
import components from "../components";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar />
      <View>
        <Text>List ekranı</Text>
      </View>

    </SafeAreaView>
  );
};


export default HomeScreen;
