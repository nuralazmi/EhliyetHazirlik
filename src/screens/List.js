import { View, Text, SafeAreaView, ScrollView, FlatList, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
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
  setAnswersKey, setQuiz, setQuizName, setListEnd, setPage, setZero,
} from "../store/quiz";
import axiosInstance from "../api";

const List = ({ navigation }) => {
    const dispatch = useDispatch();
    const { quiz_list, quiz_list_page, quiz_list_last_page, isLoading, list_end } = useSelector(state => state.quiz);
    const question_limit = 50;
    const page_counter = 5;
    const getData = () => {
      if (list_end === false) {
        console.log("aa");
        dispatch(setLoading(true));
        dispatch(setQuizListLastPage(quiz_list_page));
        axiosInstance.get(`/quiz_list.php?page=${quiz_list_page}`)
          .then(response => {
            response = response.data;
            dispatch(setLoading(false));
            dispatch(setQuizList(response.data));
            dispatch(setListEnd(response.end));
          });
      }
    };

    const renderItem = ({ item }) => {
      return (
        <Pressable onPress={() => {
          dispatch(setZero(item.quiz_id));
          navigation.navigate("Start");
        }}>
          <View style={styles.question.itemWrapperStyle}>
            <View style={styles.question.contentWrapperStyle}>
              <Text style={styles.question.txtNameStyle}>{`${item.quiz_name}`}</Text>
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

    useEffect(() => {
      if (quiz_list_page === 0 || quiz_list_page !== quiz_list_last_page) {
        getData();
      }
    }, [quiz_list_page]);

    return (
      <SafeAreaView style={[styles.app.page, styles.home.main]}>
        <components.StatusBar theme="dark" />
        <components.PageHeader theme="dark" text="Sınav Listesi" navigation={navigation} />
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
  }
;


export default List;
