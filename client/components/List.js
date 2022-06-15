import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native'
import { Card } from "react-native-cards";
import axios from 'axios'
import styles from '../styles/carousel'
import  React,{ useEffect, useState} from 'react'


export default function List({navigation}) {

    const [teachers, setTeachers] = useState([]);

 useEffect(()=> {
    axios({
      method: "get",
      url: 'http://10.41.177.18:8000/api/users',
    })
      .then(function (response) {
        console.log();
        setTeachers(response.data)
      })

      .catch(function (error) {
        console.log(error.response);
      });

  },[])

  return (
  
    <ScrollView >
      {/* <Card style={styles.card}> */}
      {teachers.map((teacher) =>{
            return (
        <View style={styles.blockMargin}>
          <View style={styles.containerFlex}>
              <Text>{teacher.name}</Text>
            {/* <Text>{item.title}</Text> */}
          </View>
          <Text style={styles.titre}>Formation</Text>
           {/* <Text>{item.title}</Text>  */}
          <Text style={styles.titre}>Description</Text>
        {/* <Text>{item.description}</Text> */}
        
        <TouchableOpacity onPress={()=>alert(teacher.name + ' à été ajouter en favorie') }style={styles.button}><Text style={styles.textButton}>Ajouter dans mes favoris</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.button2}><Text style={styles.textButton2}>Modifier ses informations</Text></TouchableOpacity>
        </View>
     ) })}
      {/* </Card> */}
    </ScrollView>



    
  )
}

