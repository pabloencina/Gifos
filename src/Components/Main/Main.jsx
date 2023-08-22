import React, { useState } from "react";
import { View } from "react-native";
import AppBar from "../AppBar/AppBar";
import CardGift from "../CardsGift/CardGift";
import Home from "../Home-Inicio/Home";
import Footer from "../Footer/Footer";

const Main = ({ fontRoboto, fontMontserrat }) => {
  const [category, setCategory] = useState("");
  return (
    <View>
      <AppBar fontRoboto={fontRoboto} />
      <Home
        fontRoboto={fontRoboto}
        fontMontserrat={fontMontserrat}
        setCategory={setCategory}
        category={category}
      />
      <CardGift fontRoboto={fontRoboto} category={category} />
      <Footer fontMontserrat={fontMontserrat} />
    </View>
  );
};

export default Main;
