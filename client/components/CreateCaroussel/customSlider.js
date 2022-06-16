import React, { useRef} from "react";
import { View,Dimensions} from "react-native";
import styles from "../../styles/carousel";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./carouselItem";
import data from "./data";

// import CustomPaging from './customPagin';

const { width } = Dimensions.get("window");
export default function CustomSlider() {
  const carouselRef = useRef(null);

  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 70,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel ref={carouselRef} {...settings} />
    </View>
  );
}
