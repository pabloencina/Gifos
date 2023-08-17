import React from "react";
import { FlatList, Text, View } from "react-native";
import AppBar from "../AppBar/AppBar";
import CardGift from "../CardsGift/CardGift";
import Home from "../Home-Inicio/Home";

const Main = () => {
  return (
    <View>
      <AppBar />
      <Home />
      {/* <CardGift /> */}
    </View>
  );
};

export default Main;
