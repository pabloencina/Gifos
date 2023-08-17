import React from "react";
import { View } from "react-native";
import AppBar from "../AppBar/AppBar";
import CardGift from "../CardsGift/CardGift";
import Home from "../Home-Inicio/Home";
import Footer from "../Footer/Footer";

const Main = ({ fontRoboto, fontMontserrat }) => {
  return (
    <View>
      <AppBar fontRoboto={fontRoboto} />
      <Home fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} />
      {/* <CardGift fontRoboto={fontRoboto} /> */}
      <Footer fontMontserrat={fontMontserrat} />
    </View>
  );
};

export default Main;
