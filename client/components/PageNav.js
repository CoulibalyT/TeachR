import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";

// import Carousel from 'react-native-snap-carousel'

export default function PageNav({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Accueil")}
        >
          <Text style={styles.textButton}>Voir mes Teach'rs favoris</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Connection")}
        >
          <Text style={styles.textButton}>Ajouter un Teach'rs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Liste des Teachrs",)}
        >
          <Text style={styles.textButton}>Liste des Teachrs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textButton: {
    color: "#fff",
    textAlign: "center",
  },

  button: {
    marginTop: "15%",
    backgroundColor: "#0074E4",
    padding: "4%",
    borderRadius: 10,
    width: "80%",

    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    height: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
