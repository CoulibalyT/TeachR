import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


export default function PageUpdate({route, navigation}) {

  const [formation, setFormation] = useState();
  const [description, setDescription] = useState();
  const [name, setName] = useState();
    const { teachr } = route.params;
    // const { name } = teachr.teachrs.name;
    console.log(teachr);

    var data = {
      formation: formation,
      description : description,
     
    };
// 10.41.177.18
    const submit = () => {
      axios({
        method: "put",
        url: "http://192.168.1.14:8000/api/users/" + teachr.id ,
        data: data,
        headers: {
          accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          // navigation.navigate("Teach'rs");
        })
        .catch(function (error) {
          console.log(error.response);
        });
    };





  return (
    <View style={styles.container}>
      {/* <Text style={styles.Text}>Mo</Text> */}
      <TextInput
        // value={teachr.teachrs.name}
        onChangeText={setName}
        placeholder={"Prenom"}
        style={styles.input}
      />

     <TextInput
        // value={teachr.formation}
        onChangeText={setFormation}
        placeholder={"Formation"}
        style={styles.input}
      />

     <TextInput
        // value={teachr.description}
        onChangeText={setDescription}
        placeholder={"Description"}
        style={styles.input}
      />
      <Button title={"Enregister les nouvelles données"} style={styles.input} onPress={submit}/>
      <TouchableOpacity
        style={styles.button}
      ></TouchableOpacity>
    </View>
  )
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