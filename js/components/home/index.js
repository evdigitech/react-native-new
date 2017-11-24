import React, { Component } from "react";
import { Image, View, StatusBar,BackHandler} from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo.png");

class Home extends Component {
	// eslint-disable-line

	componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}
	
	handleBackButton(){
		return true;
	}

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					<View>
						<Button
							style={{ backgroundColor: "#6FAF98", alignSelf: "flex-end" }}
							onPress={() => this.props.navigation.navigate("Login")}
						>
							<Text>Log Out</Text>
						</Button>
					</View>
					<View style={styles.logoContainer}>
						<Image source={launchscreenLogo} style={styles.logo} />
					</View>
					<View 
						style={{
							alignItems: "center",
							marginBottom: 80,
							backgroundColor: "transparent"
						}}
					>
						<H3 style={styles.text}>Welcome to our App</H3>
						<View style={{ marginTop: 8 }} />
					</View>
					<View style={{ marginBottom: 80 }}>
						<Button
							style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
							<Text>Lets Go!</Text>
						</Button>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
