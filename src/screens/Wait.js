import { View, Text, SafeAreaView, ScrollView, FlatList, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../stylesheet";
import components from "../components";
import AsyncStorage from "@react-native-community/async-storage";
import { setZero, fromStorageAnswer } from "../store/quiz";
import { useDispatch } from "react-redux";

const Wait = ({ navigation }) => {
  const dispatch = useDispatch();

  const [list, setList] = useState({});

  const getStorage = async () => {
    const getAnswer = await AsyncStorage.getItem("answer");
    if (getAnswer !== null) {
      setList(JSON.parse(getAnswer));
    }
  };

  useEffect(() => {
    getStorage();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => {
        dispatch(setZero(item));
        dispatch(fromStorageAnswer(list[item].answers));
        navigation.navigate("Start");
      }}>
        <View style={styles.question.itemWrapperStyle}>
          <View style={styles.question.contentWrapperStyle}>
            <Text style={styles.question.txtNameStyle}>{list[item].quiz_name}</Text>
            <View style={styles.question.listinfo_container}>
              <Text style={styles.question.listinfo_count}>{list[item].answers.length} / 50</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar theme="dark" />
      <components.PageHeader theme="dark" text="Tamamlanmamış Sınavlar" navigation={navigation} />
      <View style={[styles.app.page_container]}>
        <FlatList
          data={Object.keys(list)}
          renderItem={renderItem}
          keyExtractor={item => item}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
};


export default Wait;
