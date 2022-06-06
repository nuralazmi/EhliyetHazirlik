import { Pressable, SafeAreaView, StatusBar, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../stylesheet";
import components from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setZero } from "../store/quiz";
import AsyncStorage from "@react-native-community/async-storage";


const HomeScreen = ({ navigation }) => {
  const [storageAnswers, setStorageAnswers] = useState({});
  const complete = useSelector(state => state.quiz.complete);
  const answers = useSelector(state => state.quiz.answers);
  const dispatch = useDispatch();
  const getStorageAnswers = async () => {
    const getAnswer = await AsyncStorage.getItem("answer");
    if (getAnswer !== null) {
      setStorageAnswers(JSON.parse(getAnswer));
      console.log(getAnswer);
    }
  };
  useEffect(() => {
    getStorageAnswers();
  }, []);
  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar />
      <View style={styles.home.logo_container}>
        <Text style={styles.home.logo_text}>Ehliyet Sınavına Hazırlık Soruları</Text>
      </View>
      <View style={styles.home.buttonContainer}>
        <Pressable
          style={({ pressed }) => [styles.home.button, styles.home.button_random, pressed ? styles.home.button_random_press : ""]}
          onPress={() => {
            dispatch(setZero(0));
            navigation.navigate("Start");
          }}
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
        {(Object.keys(storageAnswers).length > 0) &&
        <Pressable
          onPress={() => {
            navigation.navigate("Wait");
          }}
          style={({ pressed }) => [styles.home.button, pressed ? styles.home.button_press : styles.home.button]}
        >
          <Text style={styles.home.button_text}>Tamamlanmamış Sınavlar Mevcut</Text>
        </Pressable>}
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
