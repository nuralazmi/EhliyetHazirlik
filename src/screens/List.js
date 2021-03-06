import { View, Text, SafeAreaView, ScrollView, FlatList, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../stylesheet";
import components from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuizList,
  setQuizListPage,
  setQuizListLastPage,
  setLoading,
  setLastPage,
  setQuestion,
  setAnswersKey, setQuiz, setQuizName, setListEnd, setPage, setZero, fromStorageAnswer,
} from "../store/quiz";
import axiosInstance from "../api";
import AsyncStorage from "@react-native-community/async-storage";
import ListData from "../datas/ListData";

const List = ({ navigation }) => {
  const dispatch = useDispatch();
  const [storage, setStorage] = useState({});
  const [complete, setComplete] = useState({});
  const { quiz_list, quiz_list_page, quiz_list_last_page, isLoading, list_end } = useSelector(state => state.quiz);
  const question_limit = 50;
  const page_counter = 5;
  const getData = () => {
    dispatch(setLoading(true));
    dispatch(setQuizListLastPage(quiz_list_page));

    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setQuizList(ListData.data));
      dispatch(setListEnd(true));
    }, 1500);

    // axiosInstance.get(`/quiz_list.php?page=${quiz_list_page}`)
    //   .then(response => {
    //     response = response.data;
    //     dispatch(setLoading(false));
    //     dispatch(setQuizList(response.data));
    //     dispatch(setListEnd(response.end));
    //   });
  };

  const renderItem = ({ item }) => {
    let point = 0;
    if (complete.hasOwnProperty(item.quiz_id)) {
      point = complete[item.quiz_id].result.success * 2;
    }
    return (
      <Pressable onPress={() => {
        dispatch(setZero(item.quiz_id));
        if (storage.hasOwnProperty(item.quiz_id)) {
          dispatch(fromStorageAnswer(storage[item.quiz_id].answers));
        }
        navigation.navigate("Start");
      }}
                 disabled={complete.hasOwnProperty(item.quiz_id)}
      >
        <View style={styles.question.itemWrapperStyle}>
          <View style={styles.question.contentWrapperStyle}>
            <Text style={styles.question.txtNameStyle}>{`${item.quiz_name}`}</Text>
            {storage.hasOwnProperty(item.quiz_id) &&
            <View style={styles.question.listinfo_container}>
              <Text style={styles.question.listinfo_count}>Ba??land?? ancak tamamlanmad??</Text>
              <Text style={styles.question.listinfo_count}>{storage[item.quiz_id].answers.length} / 50</Text>
            </View>
            }
            {complete.hasOwnProperty(item.quiz_id) &&
            <View style={styles.question.listinfo_container}>
              <Text style={styles.question.listinfo_complete}>Tamamland??</Text>
              <Text
                style={[styles.question.listinfo_complete, point >= 70 ? styles.question.listinfo_complete_ok : styles.question.listinfo_complete_fail]}>{point} Puan</Text>
            </View>
            }
          </View>
        </View>
      </Pressable>
    );
  };

  const loadMoreItem = () => {
    if (list_end !== true) dispatch(setQuizListPage(quiz_list_page + 1));
  };

  const renderLoader = () => {
    return isLoading ? (
      <View
        style={{
          padding: 20,
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

  const getStorage = async () => {
    const getAnswer = await AsyncStorage.getItem("answer");
    if (getAnswer !== null) {
      setStorage(JSON.parse(getAnswer));
    }
  };

  const getComplete = async () => {
    const storageComplete = await AsyncStorage.getItem("complete");
    if (storageComplete !== null) {
      setComplete(JSON.parse(storageComplete));
    }
  };

  useEffect(() => {
    if (quiz_list_page === 0 || quiz_list_page !== quiz_list_last_page) {
      getData();
    }

    if (Object.keys(storage).length === 0) {
      getStorage();
    }

    if (Object.keys(complete).length === 0) {
      getComplete();
    }

  }, []);

  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar theme="dark" />
      <components.PageHeader theme="dark" text="S??nav Listesi" navigation={navigation} />
      <View style={[styles.app.page_container]}>
        <FlatList
          data={quiz_list}
          renderItem={renderItem}
          keyExtractor={item => item.quiz_name}
          onEndReached={loadMoreItem}
          ListFooterComponent={renderLoader}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;
