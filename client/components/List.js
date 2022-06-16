import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";
import styles from "../styles/carousel";
import React, { useEffect, useState } from "react";

export default function List({ navigation }) {
  const [teachers, setTeachers] = useState([]);
// 10.41.177.18
  useEffect(() => {
    axios({
      method: "get",
      url: "http://192.168.1.14:8000/api/users",
    })
      .then(function (response) {
        console.log(response.data);
        setTeachers(response.data);
      })

      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  return (
    <ScrollView>
      {teachers.map((teachr) => {
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
            <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate("Modifier un profil", {teachr})}>
              <Text style={styles.textButton2} >Modifier ses informations</Text>
            </TouchableOpacity>
            <Text style={{textAlign: "center"}}>Ajouté le {teachr.teachrs.createdAt} </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
