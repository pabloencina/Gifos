import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const Search = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSearchGif = () => {
    if (value === "") {
      setError(true);
      //setValue(value);
      return;
    }
    setValue("");
  };

  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(newValue) => {
            setError(false);
            setCategory(value);
            setValue(newValue);
          }}
          placeholder="Busca GIFOS y más"
          onSubmitEditing={handleSearchGif}
        />
      </View>
      {error && <Text>El campo no puede estar vació</Text>}
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
    paddingLeft: 50,
  },
  input: {
    width: 300,
  },
});
