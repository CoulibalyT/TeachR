import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function PageConnect() {
  
        const [email, setEmail] = useState("");
        
        return(
      <View style={styles.container}>
        <Text style={styles.Text}>Ajouter un nouveau Teach'R</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={"Email"}
          style={styles.input}
        />
        <Button title={"Login"} style={styles.input}/>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('register')}
        >
        </TouchableOpacity>
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