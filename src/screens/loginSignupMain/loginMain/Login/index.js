import React, { Component } from 'react';
import { ScrollView, SafeAreaView, View, KeyboardAvoidingView } from 'react-native';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#1E2228' }}>
				<KeyboardAvoidingView style={{ flex: 1 }}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
						<View style={{ justifyContent: 'center', padding: 20, flex: 1 }}>

						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}

export default Login;