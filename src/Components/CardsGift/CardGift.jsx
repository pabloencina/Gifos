import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import dataGift from "../../Data/dataGift";
import theme from "../../Styles/Theme/theme";

const CardGift = () => {
  return (
    <FlatList
      numColumns={2}
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
  );
};

export default CardGift;

const styles = StyleSheet.create({
  container: {
    width: 210,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    width: 170,
    height: 170,
  },
  text: {
    color: theme.color.primary,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: theme.fontWeights.bold,
  },
});
