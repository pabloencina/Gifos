import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/Components/Main/Main";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

const loadFonts = async () => {
  await Font.loadAsync({
    Montserrat: require("./assets/MontserratAlternates-ExtraLight.ttf"),
    Roboto: require("./assets/RobotoCondensed-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading screen
  }

  return (
    <View style={styles.container}>
      <Main customFont="Roboto" customFontMontserrat="Montserrat" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
