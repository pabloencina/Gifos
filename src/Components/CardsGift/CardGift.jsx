import React from "react";
import { FlatList, Text, View } from "react-native";
import dataGift from "../../Data/dataGift";
//import { Image } from "react-native";

const CardGift = () => {
  return (
    <FlatList
      style={{ borderBlockColor: "red" }}
      data={dataGift}
      renderItem={({ item: gift }) => {
        <View key={gift.id}>
          <Text>{gift.name}</Text>
        </View>;
      }}
    />
  );
};

export default CardGift;
