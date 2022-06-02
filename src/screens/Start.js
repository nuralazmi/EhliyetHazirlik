import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  PermissionsAndroid,
  Button,
  Pressable,
  Dimensions,
  Alert, Animated,
} from "react-native";
import React, { useState } from "react";
import styles from "../stylesheet";
import components from "../components";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../api";
import { setSelectedDetails, setPage } from "../store/quiz";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - 10;
};


const Start = ({ navigation }) => {
  const selectedDetails = useSelector(state => state.quiz.selectedDetails);
  const page = useSelector(state => state.quiz.page);
  const dispatch = useDispatch();
  let bottomCount = 0;
  let requestEnd = true;
  const request = () => {
    test = false;
    axiosInstance.get("/get_quiz.php?page=" + page)
      .then(function(response) {
        response = response.data;
        if (response.hasOwnProperty("ok") && response.ok === true) {
          requestEnd = true;
          let details = {
            quiz_id: response.quiz_id,
            questions: response.questions,
            answers: response.answers,
          };
          dispatch(setSelectedDetails(details));
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  // navigation.addListener("beforeRemove", (e) => {
  //   console.log("çıkıyor");
  //   let details = {
  //     quiz_id: 0,
  //     questions: [],
  //     answers: [],
  //   };
  //   dispatch(setSelectedDetails(details));
  // });

  if (selectedDetails.quiz_id === 0) {
    request();
  }

  console.log(selectedDetails);
  const answers = useSelector(state => state.quiz.answers);
  const quizResult = () => {
    let true_answers = [
      {
        quiz_id: "1",
        question_id: "1",
        value: "A",
      },
      {
        quiz_id: "1",
        question_id: "2",
        value: "B",
      },
      {
        quiz_id: "1",
        question_id: "3",
        value: "C",
      },
    ];
    let point = {
      success: 0,
      error: 0,
      empty: 0,
    };
    answers.map(answer => {
      true_answers.map(trueanswer => {
        if (trueanswer.quiz_id === answer.quiz_id && trueanswer.question_id === answer.question_id) {
          if (trueanswer.value === answer.value) point.success++;
          else point.error++;
        }
      });
    });
    Alert.alert("Doğru" + point.success + " Yanlış" + point.error + " Boş" + (question_data.length - (point.success + point.error)));
  };


  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar theme="dark" />
      <components.PageHeader quiz="true" theme="dark" text="Sınav Adı" navigation={navigation} />
      <View style={[styles.app.page_container]}>
        <ScrollView
          onMomentumScrollEnd={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              bottomCount++;
              if (bottomCount % 3 === 0 && requestEnd) {
                dispatch(setPage(1));
                request();
                bottomCount = 0;
                requestEnd = false;
              }
            }
          }}
          showsVerticalScrollIndicator={false}
          style={styles.question.scrollbar}>
          {selectedDetails.questions.map((value, index) => {
            return <components.Question
              key={(index + 1)}
              index={(index + 1)}
              details={value.details}
              items={value.items}
              question={value.header}
              question_type={value.question_type}
              item_type={value.item_type}
              img={value.img}
            />;
          })}
          {answers.length > 0 &&
          <Pressable
            onPress={quizResult}
            style={({ pressed }) => [styles.question.sonuc_btn_container, pressed ? styles.question.sonuc_btn_container_press : styles.question.sonuc_btn_container]}>
            <Text style={styles.question.sonuc_btn_text}>Sınavı Bitir ve Sonucu Hesapla</Text>
          </Pressable>
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};


export default Start;
