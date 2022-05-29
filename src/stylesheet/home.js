import { StyleSheet } from "react-native";

const home = StyleSheet.create({
  main: {},
  logo_container: {
    // backgroundColor: "red",
    height: "25%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    // backgroundColor: "#FFFFFF",
    // width: 100,
    // height: 100,
    // borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#FFFFFF",
  },
  logo_text: {
    color: "#3e4684",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
  },
  buttonContainer: {
    // backgroundColor: "blue",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  button: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
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
  button_random: {
    backgroundColor: "#3e4684",
    borderWidth: 1,
    borderColor: "#e2e2e2",
  },
  button_press: {
    borderColor: "#3b1b1b",
  },
  button_random_text: {
    color: "#FFFFFF",
  },
  button_text: {
    textAlign: "center",
    color: "#8a8a8a",
    fontSize: 15,
  },

});

export default home;
