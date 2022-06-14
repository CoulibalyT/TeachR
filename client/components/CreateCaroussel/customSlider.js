import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, Button } from 'react-native';
import styles from '../../styles/carousel';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from './carouselItem';
// import CustomPaging from './customPagin';

const { width } = Dimensions.get('window');
export default function CustomSlider({ data }) {
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    onSnapToItem: (index) => setSlideIndex(index),
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        {...settings}
      />
      {/* <CustomPaging data={data} activeSlide={slideIndex} /> */}
      {/* <Button
        onPress={() => carouselRef.current.snapToItem(0)}
        title="Go to start"
      />
      <Button
        onPress={() => carouselRef.current.snapToItem(data.length - 1)}
        title="Go to end"
      /> */}
    </View>
  );
}
