import { Dimensions, StyleSheet, Platform } from 'react-native';
// import {ViewPropTypes} from 'deprecated-react-native-prop-types';
const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: '50%',
  },
  title: {
    fontSize: 10,
  },
  item: {
    width: '90%',
    height: screenWidth,
  },
  // imageContainer: {
  //   flex: 1,
  //   borderRadius: 300,
  //   width: '30%',
  //   // marginBottom: Platform.select({ ios: 0, android: 1 }),
  // },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: 50,
  },

  containerFlex:{
    marginTop: '20%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },

  img:{
    borderRadius:50/2,
    width:50,
    height: 50,
    alignSelf: 'center',
    marginLeft: '10%' 
  },
  // dotContainer: {
  //   backgroundColor: 'rgb(200,0,0)',
  // },
  // dotStyle: {
  //   width: 10,
  //   height: 10,
  //   borderRadius: 5,
  //   backgroundColor: 'black',
  // },
  // inactiveDotStyle: {
  //   backgroundColor: 'rgb(255,230,230)',
  // },
  card:{
    backgroundColor: 'rgb(255,230,230)',
    height: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
  },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  }
});
export default styles;
