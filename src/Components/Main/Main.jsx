import React from "react";
import { FlatList, Text, View } from "react-native";
import AppBar from "../AppBar/AppBar";
import CardGift from "../CardsGift/CardGift";
import Home from "../Home-Inicio/Home";
import Footer from "../Footer/Footer";

const Main = ({ customFont, customFontMontserrat }) => {
  return (
    <View>
      <AppBar customFont={customFont} />
      <Home
        customFontMontserrat={customFontMontserrat}
        customFont={customFont}
      />
      {/* <CardGift /> */}
      <Footer customFontMontserrat={customFontMontserrat} />
    </View>
  );
};

export default Main;
