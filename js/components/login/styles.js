const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  item:{
    marginTop: 30,
    marginBottom: 30,
	color: 'white',
	alignSelf: 'center'
  }

};
