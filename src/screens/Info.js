import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "../stylesheet";
import components from "../components";

const Info = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.app.page, styles.home.main]}>
      <components.StatusBar theme="dark" />
      <components.PageHeader theme="dark" text="Puan Nasıl Hesaplanıyor?" navigation={navigation} />
      <View style={[styles.app.page_container, styles.info.container]}>
        <Text style={styles.info.text}>
          Adayların sorulara verdikleri doğru cevap sayıları tespit edilecek,
          yanlış cevaplar dikkate alınmayacak, tespit edilen doğru cevap sayıları ile 100 puan üzerinden hesaplama
          yapılacaktır. Merkezi sistem sınavında her soru, puan olarak eşit ağırlığa sahip olacaktır.
        </Text>
      </View>
    </SafeAreaView>
  );
};


export default Info;
