import { View, Text, StatusBar } from "react-native";
import React from "react";
import styles from "../stylesheet";

const Logo = ({ navigation, route }) => {
  return (
    <View style={styles.home.logo}>
      <Text style={styles.home.logo_text}>Ehliyet Sınavına Hazırlık Soruları</Text>
    </View>
  );
};

export default Logo;
