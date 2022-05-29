import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import RadioButton from "./RadioButton";
import { deleteAnswer } from "../../../store/quiz";
import { useDispatch } from "react-redux";

export default function RadioButtonContainer({ item_type, values, onPress }) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState();

  const dispatch = useDispatch();
  const _onPress = (idx) => {
    onPress(idx);
    if (currentSelectedItem === idx) {
      setCurrentSelectedItem();
      dispatch(deleteAnswer(values[idx].question_id));
    } else setCurrentSelectedItem(idx);
  };

  const _renderRadioButtons = () => {
    return (values || []).map((listItem, idx) => {
      let isChecked = currentSelectedItem === idx;
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
