import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import Search from "./Search";
import Trending from "./Trending";
import TrendingGifos from "./TrendingGifos";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Inspirate, busca, guarda,</Text>
      <Text style={styles.text}>
        y crea los mejores <Text style={styles.colorGifos}>GIFOS</Text>
      </Text>
      <Image
        style={styles.image}
        source={require("../../Images/Image-principal.png")}
      />
      <Search />

      <Trending /> */}
      <TrendingGifos />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    //flex: 1,
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
  },
});
