// import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const BtnVerMas = ({ fontRoboto }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        //activeOpacity={0.6}
        style={[styles.button, { fontFamily: fontRoboto }]}
        onPress={() => alert("Pressed!")}
      >
        VER MÁS
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 110,
    height: 40,
    color: theme.color.primary,
    borderWidth: 1,
    borderColor: theme.color.primary,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BtnVerMas;
