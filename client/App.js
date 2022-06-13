import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';


export default function App() {


  useEffect(()=> {
    axios({
      method: "get",
      url: 'http://127.0.0.1:8000/api/users',
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })

      .catch(function (error) {
        console.log(error.response, "error2");
      });

  },[])

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
