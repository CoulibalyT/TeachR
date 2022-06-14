import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: '50%',
  },
  title: {
    fontSize: 10,
  },
  item: {
    width: '100%',
    height: screenWidth - 300,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 300,
    backgroundColor: 'lightblue',
    width: '20%',
    marginBottom: Platform.select({ ios: 0, android: 1 }),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  dotContainer: {
    backgroundColor: 'rgb(200,0,0)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: 'rgb(255,230,230)',
  },
  card:{
    backgroundColor: 'rgb(255,230,230)',
  }
});
export default styles;
