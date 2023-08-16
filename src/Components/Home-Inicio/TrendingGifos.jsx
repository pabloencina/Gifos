import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import dataGift from "../../Data/dataGift";

const TrendingGifos = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Trending GIFOS</Text>
      <FlatList
        data={dataGift}
        renderItem={({ item: gift }) => {
          return (
            <View style={styles.container} key={gift.id}>
              <Image
                style={styles.image}
                source={require("../../Images/image.jpg")}
              />
              <Text style={styles.text}>{gift.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TrendingGifos;

const styles = StyleSheet.create({
  container: {
    height: 180,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: theme.color.primary,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
  },
  text: {
    color: theme.color.primary,
    fontSize: theme.fontSizes.text,
    marginTop: 20,
    padding: 10,
  },
});
