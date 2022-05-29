import { View, Text, SafeAreaView, ScrollView, Button, Pressable, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import styles from "../stylesheet";
import components from "../components";
import { useSelector } from "react-redux";

const Start = ({ navigation }) => {
  const question_data = [
    {
      header: "Header",
      details: [
        "detay 1",
        "detay 2",
        "detay 3",
      ],
      question_type: "image",
      img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
      item_type: "text",
      items: [
        {
          text: "secenekler 1",
          value: "A",
          quiz_id: "1",
          question_id: "1",
          answer_id: "1",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
        {
          text: "secenekler 2",
          value: "B",
          quiz_id: "1",
          question_id: "1",
          answer_id: "2",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
        {
          text: "secenekler 3",
          value: "C",
          quiz_id: "1",
          question_id: "1",
          answer_id: "3",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
      ],
    },
    {
      header: "soru iki başlık",
      details: [],
      question_type: "text",
      img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
      item_type: "text",
      items: [
        {
          text: "secenekler 1",
          value: "A",
          quiz_id: "1",
          question_id: "2",
          answer_id: "1",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
        {
          text: "secenekler 2",
          value: "B",
          quiz_id: "1",
          question_id: "2",
          answer_id: "2",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
        {
          text: "secenekler 3",
          value: "C",
          quiz_id: "1",
          question_id: "2",
          answer_id: "3",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
      ],
    },
    {
      header: "soru iki başlık",
      details: [],
      question_type: "text",
      img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
      item_type: "text",
      items: [
        {
          text: "secenekler 1",
          value: "A",
          quiz_id: "1",
          question_id: "3",
          answer_id: "1",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
        {
          text: "secenekler 2",
          value: "B",
          quiz_id: "1",
          question_id: "3",
          answer_id: "2",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
        {
          text: "secenekler 3",
          value: "C",
          quiz_id: "1",
          question_id: "3",
          answer_id: "3",
          img: "https://ehliyetsinavihazirlik.com/images/23araliksorulari/21.png",
        },
      ],
    },
  ];
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
          showsVerticalScrollIndicator={false}
          style={styles.question.scrollbar}>
          {question_data.map((value, index) => {
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
