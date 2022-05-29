import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../../stylesheet";

export default function RadioButton({ item_type, img, isChecked, text, value, onRadioButtonPress }) {
  const _renderCheckedView = () => {
    return isChecked ? (
      <View style={[styles.radiobutton.radioButtonIconInnerIcon]} />
    ) : null;
  };

  return (
    <TouchableOpacity style={styles.radiobutton.mainContainer} onPress={onRadioButtonPress}>
      <View style={[styles.radiobutton.radioButtonIcon]}>{_renderCheckedView()}</View>
      {item_type === "image" &&
      <View style={styles.question.cevap_resim_kutusu}>
        <Text style={styles.radiobutton.radioButtonText}>{value + ") "}</Text>
        <Image
          style={styles.question.soru_resim}
          source={{
            uri: img,
          }}
        />
      </View>
      }
      {item_type === "text" &&
      <View style={[styles.radiobutton.radioButtonTextContainer]}>
        <Text style={styles.radiobutton.radioButtonText}>{value + ") " + text}</Text>
      </View>
      }
    </TouchableOpacity>
    // <TouchableOpacity style={styles.radiobutton.mainContainer} onPress={onRadioButtonPress}>
    //   <View style={[styles.radiobutton.radioButtonIcon]}>{_renderCheckedView()}</View>
    //   <View style={[styles.radiobutton.radioButtonTextContainer]}>
    //     <Text style={styles.radiobutton.radioButtonText}>{text}</Text>
    //   </View>
    // </TouchableOpacity>
  );
}
