const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 20
  },
  logo: {
    top: Platform.OS === "android" ? 35 : 60,
    width: 120,
    height: 135,
    alignSelf: "center"
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
};
