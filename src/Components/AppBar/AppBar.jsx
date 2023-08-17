import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../Images/image.jpg")} />

      <Text style={styles.text}>Modo Nocturno</Text>
      <Text style={styles.text}>Favoritos</Text>
    </View>
  );
};

export default AppBar;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.quaternary,
    width: width,
    height: 80,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  text: {
    color: theme.color.whiteColor,
    fontSize: theme.fontSizes.text,
    //fontFamily: theme.fonts.main,
  },
  image: {
    width: 50,
    height: 50,
  },
});
