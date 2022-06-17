import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import styles from "../styles/carousel";
import React, { useEffect, useState } from "react";

// Cette fonction vas recuperer toutes les données de l'api pour pouvoir listé tout les teachrs 

export default function List({ navigation }) {
  const [teachr, setTeachr] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      //CHANGER L'ADRESSE IPV4 PAR LA VOTRE
      url: "http://10.41.177.18:8000/api/users",
    })
      .then(function (response) {
        console.log(response.data);
        setTeachr(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  return (
    <ScrollView>
      {teachr.map((teachr,key) => {
        return (
          <View style={styles.blockMargin}>
            <View style={styles.containerFlex}>
              <View>
                <Text>{teachr.teachrs.name}</Text>
              </View>
            </View>
            <Text style={styles.titre}>Formation</Text>
            <Text>{teachr.formation}</Text>
            <Text style={styles.titre}>Description</Text>
            <Text>{teachr.description}</Text>

            <TouchableOpacity
              onPress={() => alert(teachr.name + " à été ajouter en favoris")}
              style={styles.button}
            >
              <Text style={styles.textButton}>Ajouter dans mes favoris</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() =>
                navigation.navigate("Modifier un profil", { teachr })
              }
            >
              <Text style={styles.textButton2}>Modifier ses informations</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: "center" }}>
              Ajouté le {teachr.teachrs.createdAt}{" "}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
