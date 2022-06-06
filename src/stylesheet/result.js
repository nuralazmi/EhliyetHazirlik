import { StyleSheet } from "react-native";

const result = StyleSheet.create({
  container: {
    // paddingHorizontal : 20,
    // paddingVertical : 100,
    padding: 20,
    // justifyContent: "center",
  },
  text_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  result_true: {
    color: "#278643",
  },
  result_wrong: {
    color: "#bf2222",
  },
  result_empty: {},
  result_ok: {
    color: "#278643",
  },
  result_fail: {
    color: "#bf2222",
  },
  btn: {
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0,
    borderColor: "#FFFFFF",
    shadowColor: "#acacac",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btn_next: {
    backgroundColor: "#3e4684",
  },
  btn_end: {
    backgroundColor: "#278643",
  },
  btn_text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
  addbox: {
    backgroundColor: "gray",
    width: "100%",
    height: 100,
    marginTop: 20,
  },
});

export default result;
