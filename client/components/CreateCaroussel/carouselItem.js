import React from "react";
import { Card } from "react-native-cards";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Pressable, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "../../styles/carousel";

function CarouselItem({ item, index }, parallaxProps) {
  return (
    // <Pressable onPress={() => alert('Image description:' + item.description)}>
    <SafeAreaView style={styles.item}>
      <Card style={styles.card}>
        <View style={styles.blockMargin}>
          <View style={styles.containerFlex}>
            <Image style={styles.img} source={{ uri: item.source }} />
            <Text>{item.title}</Text>
          </View>
          <Text style={styles.titre}>Formation</Text>
           <Text>{item.title}</Text> 
          <Text style={styles.titre}>Description</Text>
        <Text>{item.description}</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Prendre un cours avec ce Teach'R</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button2}><Text style={styles.textButton2}>Retirer ce Teach'R de mes favoris</Text></TouchableOpacity>
        </View>
      </Card>
    </SafeAreaView>
    // </Pressable>
  );
}
export default CarouselItem;
