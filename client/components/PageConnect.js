import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

export default function PageConnect({ navigation }) {
  const [email, setEmail] = useState("");

  var data = {
    name: email,
  };

  const submit = () => {
    axios({
      method: "post",
      url: "http://10.41.177.18:8000/api/users",
      data: data,
      headers: {
        accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        navigation.navigate("Teach'rs");
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Ajouter un nouveau Teach'R</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={"Prenom"}
        style={styles.input}
      />
      <Button title={"Ajoutez Teachrs"} style={styles.input} onPress={submit} />
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('register')}
      ></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  Text: {
    marginBottom: 30,
    fontSize: 25,
  },
});
