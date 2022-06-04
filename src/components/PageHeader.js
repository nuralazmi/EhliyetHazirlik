import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../stylesheet";
import colors from "../stylesheet/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import icons from "../scripts/icons";
import { useSelector } from "react-redux";

const PageHeader = (props) => {
  const answers = useSelector(state => state.quiz.answers);


  return <View style={[styles.app.page_header,
    { backgroundColor: props.theme === "dark" ? colors.dark.backgroundColor : colors.light.backgroundColor }]}>
    <View style={styles.app.header_icon_container}>
      <Pressable
        style={styles.app.header_icon_pressable}
        onPress={() => props.navigation.goBack()}
      >
        <FontAwesomeIcon size={21} style={[styles.app.header_icon,
          { color: props.theme === "dark" ? colors.dark.textColor : colors.light.textColor }]}
                         icon={icons.faAngleLeft} />
      </Pressable>
      {props.quiz === "true" &&
      <Text
        style={[styles.app.header_info_text, { color: props.theme === "dark" ? colors.dark.textColor : colors.light.textColor }]}>{answers.length}/50</Text>}

    </View>
    <View style={styles.app.header_text_container}>
      <Text style={[styles.app.header_text,
        { color: props.theme === "dark" ? colors.dark.textColor : colors.light.textColor }]}>{props.text}</Text>
    </View>
  </View>;
};

export default PageHeader;
