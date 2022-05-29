import { View, Text, Image, Pressable } from "react-native";
import styles from "../../stylesheet";
import React from "react";
import RadioButtonContainer from "../Input/RadioButton/RadioButtonContainer";
import { useDispatch } from "react-redux";
import { setAnswer } from "../../store/quiz";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../stylesheet/colors";
import icons from "../../scripts/icons";

const Question = (props) => {
  const dispatch = useDispatch();
  const onRadioButtonPress = (itemIdx) => {
    let data = {
      value: props.items[itemIdx].value,
      quiz_id: props.items[itemIdx].quiz_id,
      question_id: props.items[itemIdx].question_id,
    };
    dispatch(setAnswer(data));
  };

  return (
    <View style={styles.question.soru_kutusu}>
      <View style={styles.question.detay_kutusu}>
        {props.details.map((value, index) => {
          return <Text style={styles.question.detay}>{value}</Text>;
        })}
      </View>
      <Text style={styles.question.soru}>{props.index + ". " + props.question}</Text>
      {props.question_type === "image" &&
      <View style={styles.question.soru_resim_kutusu}>
        <Image
          style={styles.question.soru_resim}
          source={{
            uri: props.img,
          }}
        />
      </View>
      }
      <View style={styles.question.secenek_kutusu}>
        <RadioButtonContainer
          values={props.items}
          item_type={props.item_type}
          onPress={onRadioButtonPress} />
      </View>
    </View>
  );
};

export default Question;
