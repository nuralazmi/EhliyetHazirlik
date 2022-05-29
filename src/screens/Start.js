import { View, Text, SafeAreaView, ScrollView, Button, Pressable } from "react-native";
import React from "react";
import styles from "../stylesheet";
import components from "../components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../stylesheet/colors";
import icons from "../scripts/icons";

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
  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar theme="dark" />
      <components.PageHeader quiz="true" theme="dark" text="Sınav Adı" navigation={navigation} />
      <View style={styles.app.page_container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.question.scrollbar}>
          {/*<components.Question />*/}
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
          <Pressable style={styles.question.sonuc_btn_container}>
            <Text style={styles.question.sonuc_btn_text}>Sınavı Bitir ve Sonucu Hesapla</Text>
          </Pressable>

        </ScrollView>
      </View>

    </SafeAreaView>
  );
};


export default Start;
