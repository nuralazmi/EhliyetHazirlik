import { StyleSheet } from "react-native";
import colors from "./colors";

const question = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
  },
  soru_kutusu: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 0.5,
    borderColor: colors.dark.backgroundColor,
    padding: 10,
    // borderRadius: 20,
    // borderBottomWidth : 1,
    // borderColor: "#ececec",
    // shadowColor: "#acacac",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,
    // elevation: 10,
  },
  detay_kutusu: {},
  detay: {
    fontSize: 15,
  },
  soru: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 3,
    marginBottom: 5,
  },
  soru_resim_kutusu: {
    width: 250,
    height: 200,
    // backgroundColor: "red",
  },
  cevap_resim_kutusu: {
    width: 120,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
  },
  soru_resim: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  secenek_kutusu: {},
  secenek: {},
  scrollbar: {
    // flex : 1,
    // marginBottom: 38,
    // paddingBottom: 60,
    // flexGrow:1
  },
  sonuc_btn_view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark.backgroundColor,
    padding: 13,
  },
  sonuc_btn_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark.backgroundColor,
    padding: 13,
  },
  sonuc_btn_container_press: {
    backgroundColor: "#525ba0",
  },
  sonuc_btn_text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
    // fontWeight : 'bold',
  },
  txtEmailStyle: {
    color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
  listinfo_container: {
    marginTop: 4,
  },
  listinfo_complete: {
    color: "#278643",
    fontSize: 13,
  },
  listinfo_count: {
    color: "#d5903a",
    fontSize: 13,
  },
  listinfo_complete_ok: {
    color: "#278643",
  },
  listinfo_complete_fail: {
    color: "#bf2222",
  },
});

export default question;
