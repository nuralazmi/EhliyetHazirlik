import { StyleSheet } from "react-native";
import home from "./home";
import question from "./question";
import start from "./start";
import radiobutton from "./radiobutton";
import colors from "./colors";


const app = StyleSheet.create({
  page: {
    backgroundColor: colors.light.backgroundColor,
    // backgroundColor: "#3e4684",
    width: "100%",
    height: "100%",
    // padding: 10,
  },
  page_header: {
    padding: 10,
    // backgroundColor: "#FFFFFF",
  },
  header_icon_container: {
    // backgroundColor: "red",
    // display: "flex",
    // justifyContent: "center",
    paddingTop: 10,
    // paddingBottom : 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems : 'center',
  },
  header_icon: {
    marginLeft: -4,
  },
  header_text_container: {
    marginTop: 15,
  },
  header_text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  header_info_text: {
    fontSize: 15,
  },
  page_container: {
    // marginTop: 5,
    marginBottom: 50,
  },
  content_box: {
    // backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 5,
  },
});

const styles = {
  app,
  home,
  question,
  start,
  radiobutton,
};
export default styles;


