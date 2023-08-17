import React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import Search from "./Search";
import Trending from "./Trending";
import TrendingGifos from "./TrendingGifos";

const Home = ({ fontRoboto, fontMontserrat }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.text, { fontFamily: fontMontserrat }]}>
          Inspirate, busca, guarda,
        </Text>
        <Text style={[styles.text, { fontFamily: fontMontserrat }]}>
          y crea los mejores{" "}
          <Text style={[styles.colorGifos, { fontFamily: fontMontserrat }]}>
            GIFOS
          </Text>
        </Text>
        <Image
          style={styles.image}
          source={require("../../Assets/Images/Image-principal.png")}
        />
        <Search />

        <Trending fontRoboto={fontRoboto} />
        <TrendingGifos fontRoboto={fontRoboto} />
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
