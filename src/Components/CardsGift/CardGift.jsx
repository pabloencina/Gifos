import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import theme from "../../Styles/Theme/theme";
import useApi from "../Hooks/useApi";
import BtnVerMas from "./BtnVerMas";

const CardGift = ({ fontRoboto, category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy&q=${category}&limit=10`;
  const { loading, data } = useApi(url);
  console.log(data);
  return (
    <View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item: gift }) => (
          <View style={styles.container} key={gift.id}>
            <Image
              key={gift.id}
              source={{ uri: gift.images.downsized_medium.url }}
              style={styles.image}
            />

            <Text style={[styles.text, { fontFamily: fontRoboto }]}>
              {gift.title}
            </Text>
          </View>
        )}
      />
      {data && data.length > 0 && <BtnVerMas fontRoboto={fontRoboto} />}
    </View>
  );
};

export default CardGift;

const styles = StyleSheet.create({
  container: {
    width: 210,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    //marginTop: 50,
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
