import React, { Component } from 'react';
import { View, Dimensions, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler';
import { Button, Text, Headline, Caption, Subheading, Title, Provider, Menu, Divider, DarkTheme, } from 'react-native-paper';
import { OneLiner, getText } from '../../globalComponents/OneLiners';
import TableEnt from './components/TableEnt';
import AppBar from '../../globalComponents/AppBar';

export default class Ent extends Component {
	constructor() {
		super()
		this.state = {
			refresh: false,
			para:""
		}
	}

	componentDidMount(){
		console.log("Ent.js ",OneLiner.then(res=>{
			console.log(res)
			this.setState({
				para:res
			})
		}))
	}


	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<AppBar navigation={this.props.navigation} />
				<View>


					<ScrollView
					// refreshControl={
					// 	<RefreshControl
					// 		refreshing={this.state.refresh}
					// 		onRefresh={()=>{
					// 			this.forceUpdate(this.componentDidMount())
					// 		}}
					// 	/>
					// }
					>
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
							<Headline style={{ textAlign: 'center' }}>ENT</Headline>
							<Subheading style={{ textAlign: 'center', }}>
								{this.state.para.ent}
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
							<TableEnt navigation={this.props.navigation} />
						</View>
					</ScrollView>
				</View>
			</View>
		)
	}
}