import React, { Component } from "react";
import { Image, View, StatusBar, BackHandler } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Item, Input, Content, Form, Label, Icon, Toast } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");

class Otp extends Component {
	// eslint-disable-line

	constructor(props) {
		super(props);
		this.state = {otp: ''};
	}

	componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}
	
	handleBackButton(){
		return true;
	}

	sendOtp(){
		if(this.state.otp != ''){
			fetch('https://ox8v34rohi.execute-api.us-east-1.amazonaws.com/dev/verify?otp='+this.state.otp)
				.then((response) => response.json())
				.then((responseJson) => {
					if(responseJson.status_code == 200){
						this.props.navigation.navigate('Home');
						Toast.show({
							text: responseJson.message,
							buttonText: "Okay"
						});
					}else{
						Toast.show({
							text: responseJson.message,
							buttonText: "Okay"
						});
					}
				})
				.catch((error) => {
					Toast.show({
						text: "OTP not matched",
						buttonText: "Okay"
					});
				}); 
		}else{
			Toast.show({
				text: "Please enter an OTP",
				buttonText: "Okay"
			})
		}
		
	}

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
				<Icon active name="person" style={{color: "#fff",alignSelf:"center",fontSize: 100,marginTop:80}}/>
				<H3 style={styles.item}>One Time Password</H3>
				<Content> 
					<Form>
						<Item floatingLabel>
							<Label style={{color: '#fff'}}>OTP</Label>
						 	<Input type="number" style={{borderColor: '#fff',color: '#fff'}} onChangeText={(text) => this.setState({otp:text})}/>
						</Item>
						<Button style={{ backgroundColor: "#6FAF98", alignSelf: "center",marginTop: 30}} onPress={() => this.sendOtp()}>
							<Text>Submit</Text>
						</Button>
					</Form> 
				</Content>
				</Image>
			</Container>
		);
	}
}

export default Otp;
