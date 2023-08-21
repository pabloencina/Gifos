import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import dataGift from "../../Data/dataGift";
import useApi from "../Hooks/useApi";

const TrendingGifos = ({ fontRoboto }) => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy&limit=10`;
  const { loading, data } = useApi(url);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerText}>
        <Text style={[styles.title, { fontFamily: fontRoboto }]}>
          Trending GIFOS
        </Text>
        <Text style={[styles.text, { fontFamily: fontRoboto }]}>
          Mira los últimos GIFOS de nuestra comunidad.
        </Text>
      </View>

      <FlatList
        horizontal={true} // Set horizontal to true
        pagingEnabled={true} // Enable paging for smooth sliding
        data={data}
        renderItem={({ item: gift }) => {
          return (
            <View style={styles.container} key={gift.id}>
              <Image
                source={{ uri: gift.images.downsized_medium.url }}
                style={styles.image}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default TrendingGifos;

const styles = StyleSheet.create({
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    backgroundColor: theme.color.greyColor,
  },
  container: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 5,
    backgroundColor: theme.color.greyColor,
    borderColor: theme.color.blackColor,
  },
  title: {
    color: theme.color.blackColor,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  text: {
    color: theme.color.blackColor,
    fontSize: theme.fontSizes.text,
    marginTop: 20,
    padding: 10,
  },
  image: {
    width: 180,
    height: 180,
  },
});
