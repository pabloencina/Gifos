import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inspirate, busca, guarda,</Text>
      <Text style={styles.text}>y crea los mejores GIFOS</Text>
      <Image
        style={styles.image}
        source={require("../../Images/Image-principal.png")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    marginTop: 20,
  },
  text: {
    color: theme.color.primary,
    fontWeight: theme.fontWeights.bold,
    fontSizes: theme.fontSizes.title,
  },
  image: {
    width: 250,
    height: 250,
  },
});
