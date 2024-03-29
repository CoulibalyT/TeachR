import React from "react";
import { Card } from "react-native-cards";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/carousel";

function CarouselItem({ item, key }) {
  return (
    <SafeAreaView style={styles.item}>
      <Card style={styles.card}>
        <View style={styles.blockMargin}>
          <View style={styles.containerFlex}>
            <Image style={styles.img} source={{ uri: item.source }} />
            <Text>{item.name}</Text>
          </View>
          <Text style={styles.titre}>Formation</Text>
          <Text>{item.formation}</Text>
          <Text style={styles.titre}>Description</Text>
          <Text>{item.description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>
              Prendre un cours avec ce Teach'R
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.textButton2}>
              Retirer ce Teach'R de mes favoris
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </SafeAreaView>
  );
}
export default CarouselItem;
