import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import RadioButton from "./RadioButton";
import { deleteAnswer, setAnswer } from "../../../store/quiz";
import { useDispatch, useSelector } from "react-redux";

export default function RadioButtonContainer({ item_type, values, onPress }) {
  const answers = useSelector(state => state.quiz.answers);

  const dispatch = useDispatch();
  const _onPress = (idx) => {

    onPress(idx);

    if (answers.filter(item => item.question_id === values[idx].question_id && item.value === values[idx].value).length > 0)
      dispatch(deleteAnswer(values[idx].question_id));
    else {
      let data = {
        value: values[idx].value,
        quiz_id: values[idx].quiz_id,
        question_id: values[idx].question_id,
      };
      dispatch(setAnswer(data));
    }
  };

  const _renderRadioButtons = () => {
    return (values || []).map((listItem, idx) => {
      // let isChecked = currentSelectedItem === idx;
      let isChecked = answers.filter(item => item.question_id === listItem.question_id && item.value === listItem.value).length > 0;
      return (
        <RadioButton
          key={idx}
          onRadioButtonPress={() => _onPress(idx)}
          isChecked={isChecked}
          text={listItem.text}
          value={listItem.value}
          item_type={item_type}
          img={listItem.img}
        />
      );
    });
  };
  return <View>{_renderRadioButtons()}</View>;
}
