import { StyleSheet } from "react-native";

const result = StyleSheet.create({
  container: {
    // paddingHorizontal : 20,
    // paddingVertical : 100,
    padding: 20,
    justifyContent: "center",
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
});

export default result;
