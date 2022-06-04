import { View, Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React from "react";
import styles from "../stylesheet";
import components from "../components";
import { useSelector } from "react-redux";

const Result = ({ navigation }) => {
  const answers = useSelector(state => state.quiz.answers);
  const answer_keys = useSelector(state => state.quiz.answer_key);
  const questions = useSelector(state => state.quiz.questions);
  let point = {
    success: 0,
    error: 0,
    empty: 0,
  };
  answers.map(answer => {
    answer_keys.map(trueanswer => {
      if (trueanswer.quiz_id === answer.quiz_id && trueanswer.question_id === answer.question_id) {
        if (trueanswer.value === answer.value) point.success++;
        else point.error++;
      }
    });
  });
  point.empty = questions.length - (point.success + point.error);
  const totalpoint = point.success * 2;
  const result = totalpoint >= 70 ? "GEÇTİ" : "KALDI";
  // Alert.alert("Doğru" + point.success + " Yanlış" + point.error + " Boş" + (questions.length - (point.success + point.error)));
  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar theme="dark" />
      <components.PageHeader theme="dark" text="Sınav Sonucu" navigation={navigation} />
      <View style={[styles.app.page_container, styles.result.container]}>
        <View style={styles.result.text_container}>
          <Text style={styles.result.text}>Doğru Sayısı</Text>
          <Text style={[styles.result.text, styles.result.result_true]}>{point.success}</Text>
        </View>
        <View style={styles.result.text_container}>
          <Text style={styles.result.text}>Yanlış Sayısı</Text>
          <Text style={[styles.result.text, styles.result.result_wrong]}>{point.error}</Text>
        </View>
        <View style={styles.result.text_container}>
          <Text style={styles.result.text}>Boş Sayısı</Text>
          <Text style={[styles.result.text, styles.result.result_empty]}>{point.empty}</Text>
        </View>
        <View style={styles.result.text_container}>
          <Text style={styles.result.text}>Sınav Puanı</Text>
          <Text style={[styles.result.text, styles.result.result_empty]}>{totalpoint}</Text>
        </View>
        <View style={styles.result.text_container}>
          <Text style={styles.result.text}>Sonuç</Text>
          <Text
            style={[styles.result.text, totalpoint >= 70 ? styles.result.result_ok : styles.result.result_fail]}>{result}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Result;
