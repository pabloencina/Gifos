import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Search = () => {
  const [text, setText] = useState(""); // Estado para almacenar el valor del texto

  const handleTextChange = (newText) => {
    setText(newText); // Actualiza el estado con el nuevo texto ingresado
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder="Busca GIFOS y más"
      >
        <FontAwesomeIcon style={styles.searchIcon} name="search" size={30} />
      </TextInput>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    //flex: 1,
  },
  input: {
    borderColor: theme.color.primary,
    borderRadius: 25,
    borderWidth: 1,
    width: 300,
    height: 50,
    paddingLeft: 30,
  },
  searchIcon: {
    color: theme.color.primary,
  },
});
