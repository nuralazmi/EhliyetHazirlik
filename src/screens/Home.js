import { View, Text, SafeAreaView, StatusBar, Alert, Pressable, Button } from "react-native";
import React from "react";
import styles from "../stylesheet";
import components from "../components";
import { useDispatch } from "react-redux";
import { setQuizName } from "../store/quiz";


const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  dispatch(setQuizName(""));
  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar />
      <View style={styles.home.logo_container}>
        <Text style={styles.home.logo_text}>Ehliyet Sınavına Hazırlık Soruları</Text>
      </View>
      <View style={styles.home.buttonContainer}>
        <Pressable
          style={({ pressed }) => [styles.home.button, styles.home.button_random, pressed ? styles.home.button_random_press : ""]}
          onPress={() => navigation.navigate("Start")}
        >
          <Text style={[styles.home.button_text, styles.home.button_random_text]}
          >Sınava Başla</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("List")}
          style={({ pressed }) => [styles.home.button, pressed ? styles.home.button_press : styles.home.button]}>
          <Text style={styles.home.button_text}>Sınav Listesi</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Info")}
          style={({ pressed }) => [styles.home.button, pressed ? styles.home.button_press : styles.home.button]}>
          <Text style={styles.home.button_text}>Puanım Nasıl Hesaplanıyor?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <StatusBar
    animated={true}
    backgroundColor="#f2f8fd"
    barStyle="dark-content"
  />;
};

export default HomeScreen;
