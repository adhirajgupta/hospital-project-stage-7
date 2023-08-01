import React, { Component } from 'react';
import { View, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Text, Headline, Caption, Subheading, Title, Provider, Menu, Divider, DarkTheme, } from 'react-native-paper';
import { OneLiner } from '../../globalComponents/OneLiners';
import TableAllergy from './components/TableAllergy';

export default class Allergy extends Component {
	render() {
		return (
			<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
				<View style={{ margin: 15 }}>

					<Headline style={{ textAlign: 'center' }}>Allergy</Headline>
					<Subheading style={{ textAlign: 'center', }}>
						{OneLiner.allergy}
					</Subheading>
					{/* <Headline style={{ textAlign: 'center', fontSize: 22, }}>Doctor: Unknown {'\n'}</Headline> */}
					<TableAllergy />
				</View>
			</ScrollView>
		)
	}
}