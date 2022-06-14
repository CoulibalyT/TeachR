import React from "react";
import { Card } from "react-native-cards";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Pressable, SafeAreaView, Image } from "react-native";
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
        </View>
      </Card>
      {/* <ParallaxImage
          
          // containerStyle={styles.imageContainer}
          // style={styles.image}
          {...parallaxProps}
        /> */}
      {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
    </SafeAreaView>
    // </Pressable>
  );
}

export default CarouselItem;
