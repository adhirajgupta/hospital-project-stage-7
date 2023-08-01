import React, { Component } from 'react';
import { View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Text, Headline, Caption, Subheading, Title, Provider, Menu, Divider, DarkTheme, } from 'react-native-paper';
import { OneLiner } from '../../globalComponents/OneLiners';
import TableSkin from './components/TableSkin';
export default class Skin extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>

	
					<ScrollView>
						<View style={{ margin: 15 }}>
							{/* <Button
						icon={"phone"}
						labelStyle={{ fontSize: 25 }}
						mode="contained"
						contentStyle={[styles.button, { width: width - 40, }]}
						style={styles.button}
						color='red'
						onPress={() => console.log("Emergency helpline")}>
						<Text style={[styles.buttonText, { color: 'white' }]}>Emergency Helpline</Text>
					</Button> */}
							<Headline style={{ textAlign: 'center' }}>Skin</Headline>
							<Subheading style={{ textAlign: 'center', }}>
								{OneLiner.skin}
							</Subheading>
							{/* <Headline style={{ textAlign: 'center', fontSize: 22, }}>Doctor: Unknown {'\n'}</Headline> */}
							{/* <TouchableOpacity
						// onPress={() => navigation.navigate('Home')}
						style={[styles.button, {
							borderColor: '#009387',
							borderWidth: 1,
							marginTop: 15,
						}]}
					>
						<LinearGradient
							colors={['#08d4c4', '#01ab9d']}
							style={styles.button}

						>
							<Text
								onPress={() => this.getFirestoreDocs()}
								style={[styles.buttonText, {
									color: '#fff'
								}]}>Schedule Now</Text>
						</LinearGradient>
					</TouchableOpacity> */}
							<TableSkin off />
						</View>
					</ScrollView>
			</View>
		)
	}
}