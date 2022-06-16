import { Dimensions, StyleSheet} from "react-native";
// import {ViewPropTypes} from 'deprecated-react-native-prop-types';
const { width: screenWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    paddingTop: "50%",
  },
  title: {
    fontSize: 10,
  },
  item: {
    width: "100%",
    height: screenWidth + 60,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    width: 50,
  },

  containerFlex: {
    flexDirection: "row",
    alignItems: "center",
  },

  blockMargin: {
    marginTop: "15%",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "15%",
  },

  img: {
    borderRadius: 50 / 2,
    marginRight: "10%",
    width: 50,
    height: 50,
  },

  titre: {
    marginTop: "8%",
    color: "blue",
  },
  card: {
    backgroundColor: "#fff",
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
  },

  button: {
    marginTop: "15%",
    backgroundColor: "#0074E4",
    padding: "4%",
    borderRadius: 10,
  },

  textButton: {
    fontSize: 13,
    textAlign: "center",
    color: "#fff",
  },

  button2: {
    marginTop: "5%",
    borderColor: "#EF8A70",
    borderStyle: "solid",
    borderWidth: 1,
    padding: "4%",
    borderRadius: 10,
  },

  textButton2: {
    fontSize: 13,
    textAlign: "center",
    color: "red",
  },
});
export default styles;
