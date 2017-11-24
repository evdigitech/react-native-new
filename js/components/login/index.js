import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Item, Input, Content, Form , Label, Icon, Toast} from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");

class Login extends Component {
	// eslint-disable-line
	constructor(props) {
		super(props);
		this.state = {email: ''};
	}
 
	signIn(){
		if(this.state.email != ''){
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var checkNum = /^\d+$/.test(this.state.email);
			if(re.test(this.state.email) == true){
				fetch('https://ox8v34rohi.execute-api.us-east-1.amazonaws.com/dev/login?email='+this.state.email)
				.then((response) => response.json())
				.then((responseJson) => {
					if(responseJson.status_code == 200){
						this.props.navigation.navigate('Otp');
						Toast.show({
							text: responseJson.message,
							buttonText: "Okay"
						})
					}else{
						Toast.show({
							text: responseJson.message,
							buttonText: "Okay"
						})
					}
				})
				.catch((error) => {
					console.error(error);
				});
			}else if(checkNum == true && this.state.email.toString().length == 11){
				fetch('https://ox8v34rohi.execute-api.us-east-1.amazonaws.com/dev/login?mobile=+86'+this.state.email)
				.then((response) => response.json())
				.then((responseJson) => {
					if(responseJson.status_code == 200){
						this.props.navigation.navigate('Otp');
						Toast.show({
							text: 'Successfully Logged in',
							buttonText: "Okay"
						})
					}else{
						Toast.show({
							text: 'Can not Log in',
							buttonText: "Okay"
						})
					}
				})
				.catch((error) => {
					console.error(error);
				});
			}else{
				Toast.show({
					text: "Please Enter a valid email id or phone number",
					buttonText: "Okay"
				})
			}
			
		}else{
			Toast.show({
				text: "Please Enter an email id or phone number",
				buttonText: "Okay"
			})
		}
	}

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					<Icon active name="person" style={{color: "#fff",alignSelf:"center",fontSize: 100,marginTop:80}} />
					<H3 style={styles.item}>LOGIN</H3>
					<Content>
						<Form> 
							<Item floatingLabel>
								<Label style={{color: '#fff'}}>Email or Phone no.</Label>
								<Input style={{borderColor: '#fff',color: '#fff'}} onChangeText={(text) => this.setState({email:text})}/>
							</Item>
							<Button
							style={{ backgroundColor: "#6FAF98", alignSelf: "center",marginTop: 30}}
							onPress={() => this.signIn()}
							>
								<Text>Sign In</Text>
							</Button>
						</Form>
						<Text style={{textAlign:'center',marginTop: 30}}>
							<Text style={{color: '#fff'}}>Don't have an account? </Text>
							<Text style={{color: 'aqua'}} onPress={() => this.props.navigation.navigate('Register')}>Sign up here</Text>
						</Text>
					</Content>
				</Image>
			</Container> 
		);
	}
}

export default Login;
