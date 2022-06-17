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

//Cette fonction vas me permettre de faire une mise à jour sur les donnée de l'utilisateur pointé grâce à l'ID 

export default function PageUpdate({ route, navigation }) {
  const [formation, setFormation] = useState();
  const [description, setDescription] = useState();
  const [name, setName] = useState();
  const { teachr } = route.params;

  var data = JSON.stringify({
    formation: formation,
    description: description,
    teachrs: {
      name: name,
    },
  });
  const submit = () => {
    axios({
      method: "PUT",
       //CHANGER L'ADRESSE IPV4 PAR LA VOTRE
      url: "http://10.41.177.18:8000/api/users/" + teachr.id,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(JSON.stringify(response));
        navigation.navigate("Liste des Teachrs");
      })
      .catch(function (error) {
        console.log(error.response, "ERROR");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setName}
        placeholder={"Prenom"}
        style={styles.input}
      />

      <TextInput
        onChangeText={setFormation}
        placeholder={"Formation"}
        style={styles.input}
      />

      <TextInput
        onChangeText={setDescription}
        placeholder={"Description"}
        style={styles.input}
      />
      <Button
        title={"Enregister les nouvelles données"}
        style={styles.input}
        onPress={submit}
      />
      <TouchableOpacity style={styles.button}></TouchableOpacity>
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
