import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import useApi from "../Hooks/useApi";

const Trending = ({ fontRoboto, fontMontserrat }) => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy&limit=10`;
  const { loading, data } = useApi(url);
  console.log(data);
  if (data === null) {
    return null; // O puedes mostrar un mensaje de carga, por ejemplo
  }
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.title, { fontFamily: fontRoboto }]}>Trending:</Text>
      {data.map((trend) => {
        return (
          <Text
            key={trend.id}
            style={[styles.text, { fontFamily: fontMontserrat }]}
          >
            {trend.title}
          </Text>
        );
      })} */}
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
