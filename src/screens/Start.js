import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  PermissionsAndroid,
  Button,
  Pressable,
  Dimensions,
  Alert, Animated, FlatList, ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../stylesheet";
import components from "../components";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../api";
import {
  setLoading,
  setQuestion,
  setPage,
  setAnswersKey,
  setQuiz,
  setEnd,
  setLastPage,
  setQuizName,
} from "../store/quiz";


const Start = ({ navigation }) => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);
  const isLoading = useSelector(state => state.quiz.isLoading);
  const page = useSelector(state => state.quiz.page);
  const lastpage = useSelector(state => state.quiz.last_page);
  const end = useSelector(state => state.quiz.end);
  const answers = useSelector(state => state.quiz.answers);
  const answer_keys = useSelector(state => state.quiz.answer_key);
  const quiz_id = useSelector(state => state.quiz.quiz_id);
  const quiz_name = useSelector(state => state.quiz.quiz_name);
  const question_limit = 50;
  const page_counter = 5;
  const getData = () => {
    if (end === false) {
      dispatch(setLoading(true));
      dispatch(setLastPage(page));
      axiosInstance.get(`/get_quiz.php?quiz_id=${quiz_id}&page=${page}`)
        .then(response => {
          response = response.data;
          dispatch(setQuestion(response.questions));
          dispatch(setAnswersKey(response.answers));
          dispatch(setQuiz(response.quiz_id));
          dispatch(setLoading(false));
          dispatch(setQuizName(response.quiz_name));
          dispatch(setEnd(response.end));
          console.log(response.end);
        });
    }
  };

  const renderItem = ({ item }) => {
    return (
      <components.Question
        index={item.index}
        details={item.details}
        items={item.items}
        question={item.header}
        question_type={item.question_type}
        item_type={item.item_type}
        img={item.img}
      />
    );
  };

  const loadMoreItem = () => {
    if (end !== true) dispatch(setPage(page + 1));
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

  // componentDidMount ve componentDidUpdate kullanımına benzer bir kullanım sunar:

  useEffect(() => {
    if (page === 0 || page !== lastpage) {
      getData();
    }
  }, [page]);


  const quizResult = () => {
    navigation.navigate("Result");
  };

  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar theme="dark" />
      <components.PageHeader quiz="true" theme="dark" text={quiz_name} navigation={navigation} />
      <View style={[styles.app.page_container]}>
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={item => item.header}
          onEndReached={loadMoreItem}
          ListFooterComponent={renderLoader}
          onEndReachedThreshold={0.5}
        />
        {questions.length >= question_limit &&
        <Pressable
          onPress={quizResult}
          style={({ pressed }) => [styles.question.sonuc_btn_container, pressed ? styles.question.sonuc_btn_container_press : styles.question.sonuc_btn_container]}>
          <Text style={styles.question.sonuc_btn_text}>Sınavı Bitir ve Sonucu Hesapla</Text>
        </Pressable>
        }
      </View>
    </SafeAreaView>
  );
};


export default Start;
