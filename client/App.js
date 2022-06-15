import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './components/PageNav';
import CustomSlider from './components/CreateCaroussel/customSlider';
import data from './components/CreateCaroussel/data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageNav from './components/PageNav';
import PageConnect from './components/PageConnect';
import List from './components/List';

// import Header from './components/header';

const Stack = createNativeStackNavigator();


export default function App() {
 

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Teach'rs" component={PageNav} options={{headerBackVisible:true}} />
      <Stack.Screen name="Accueil" component={CustomSlider} options={{headerBackVisible:true}} />
      <Stack.Screen name="Connection" component={PageConnect} options={{headerBackVisible:true}} />
      <Stack.Screen name="List" component={List} options={{headerBackVisible:true}} />
    </Stack.Navigator>
  </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <Header /> */}
     
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
