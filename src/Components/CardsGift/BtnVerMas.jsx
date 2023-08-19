// import React from "react";
import { Image, TouchableHighlight, StyleSheet } from "react-native";

const BtnVerMas = () => {
  return (
    <TouchableHighlight style={styles.button}>
      <Image
        source={require("../../../src/Assets/Images/ImageBtnVerMas.png")}
        style={styles.image}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    //backgroundColor: "blue", // Puedes cambiar el color de fondo como desees
    // padding: 10,
    // borderRadius: 5,
    // alignSelf: "center",
  },
  image: {
    width: 160,
    height: 50,
  },
});

export default BtnVerMas;
