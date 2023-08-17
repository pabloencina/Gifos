import React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import Search from "./Search";
import Trending from "./Trending";
import TrendingGifos from "./TrendingGifos";

const Home = ({ customFontMontserrat, customFont }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.text, { fontFamily: customFontMontserrat }]}>
          Inspirate, busca, guarda,
        </Text>
        <Text style={[styles.text, { fontFamily: customFontMontserrat }]}>
          y crea los mejores{" "}
          <Text
            style={[styles.colorGifos, { fontFamily: customFontMontserrat }]}
          >
            GIFOS
          </Text>
        </Text>
        <Image
          style={styles.image}
          source={require("../../Assets/Images/Image-principal.png")}
        />
        <Search />

        <Trending customFont={customFont} />
        <TrendingGifos customFont={customFont} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    //flex: 0,
    marginTop: 20,
  },
  text: {
    color: theme.color.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title2,
  },
  image: {
    width: 250,
    height: 250,
  },
  colorGifos: {
    color: theme.color.secondary,
    fontWeight: theme.fontWeights.bold,
  },
});
