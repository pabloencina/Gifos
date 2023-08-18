import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const Trending = ({ fontRoboto, fontMontserrat }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: fontRoboto }]}>Trending:</Text>
      <Text style={[styles.text, { fontFamily: fontMontserrat }]}>
        Anthony Davis, Kodak Black, Michel Jackson, Bust, Scammers, Autumn, Rat,
        Grinch, Picture, Chair, Sweet Dreams, Show.{" "}
      </Text>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    height: 140,
    justifyContent: "flex-end",
    alignItems: "center",
    //flex: 1,
  },
  title: {
    color: theme.color.primary,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
  },
  text: {
    color: theme.color.blackColor,
    fontSize: theme.fontSizes.text,
    marginTop: 20,
    padding: 10,
  },
});
