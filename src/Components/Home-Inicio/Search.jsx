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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={handleTextChange}
          placeholder="Busca GIFOS y más"
        >
          <FontAwesomeIcon style={styles.searchIcon} name="search" size={30} />
        </TextInput>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row", // Alinea los elementos horizontalmente
    borderColor: theme.color.quaternary,
    borderRadius: 25,
    borderWidth: 1,
    width: 300,
    height: 50,
    alignItems: "center", // Alinea verticalmente en el centro
    paddingLeft: 250,
  },
  input: {
    flex: 1,
  },
  searchIcon: {
    color: theme.color.quaternary,
  },
});
