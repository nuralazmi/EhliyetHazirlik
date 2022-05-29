import { StyleSheet } from "react-native";
import colors from "./colors";
const radiobutton = StyleSheet.create({
  mainContainer: {
    // height: 30,
    marginTop: 5,
    // marginBottom: 5,
    // marginLeft: 10,
    // marginRight: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: colors.light.backgroundColor,
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonIcon: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.dark.backgroundColor,
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIconInnerIcon: {
    height: 20,
    width: 20,
    backgroundColor: colors.dark.backgroundColor,
    borderRadius: 20 / 2,
    borderWidth: 2,
    borderColor: "white",
  },
  radioButtonTextContainer: {
    // flex: 5,
    // height: 50,
    justifyContent: "center",
    // paddingLeft: 10,
  },
  radioButtonText: {
    fontSize: 15,
  },
});

export default radiobutton;
