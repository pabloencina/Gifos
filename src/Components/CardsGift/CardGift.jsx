import React, { useState } from "react";
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
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy&q=${category}&limit=${limit}&offset=${offset}`;
  const { loading, data } = useApi(url);

  const handleLoadMore = () => {
    setOffset(offset + limit);
  };
  return (
    <View>
      <FlatList
        //initialNumToRender={10}
        //windowSize={5}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              key={item.id}
              source={{ uri: item.images.downsized_medium.url }}
              style={styles.image}
            />

            <Text style={[styles.text, { fontFamily: fontRoboto }]}>
              {item.title}
            </Text>
          </View>
        )}
      />
      {data && data.length > 0 && (
        <BtnVerMas handleLoadMore={handleLoadMore} fontRoboto={fontRoboto} />
      )}
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
