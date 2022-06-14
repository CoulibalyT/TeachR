import React from 'react';
import { Card } from 'react-native-cards';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import styles from '../../styles/carousel';



function CarouselItem({ item, index }, parallaxProps) {
  return (
    // <Pressable onPress={() => alert('Image description:' + item.description)}>
      <SafeAreaView style={styles.item}>
        <Card style={styles.card}>
        <ParallaxImage
          source={{ uri: item.source }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps}
        />
        {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
        </Card>
      </SafeAreaView>
    // </Pressable>
  );
}

export default CarouselItem;
