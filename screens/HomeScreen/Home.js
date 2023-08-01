import { getAuth } from 'firebase/auth';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Linking, StatusBar, Platform,Modal,Button as Button2 } from 'react-native';
import { Button, Provider, Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../../config';
import CenterBody from './components/CenterBody';
import LowerBody from './components/LowerBody';
import SpeedDialComponent from './components/SpeedDialComponent'
import UpperBody from './components/UpperBody';


const { width, height } = Dimensions.get('screen')
const auth = getAuth(db)
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            visible: true,
            slide: 1,
            x: auth.currentUser,
            modal: 0
        }
    }


    componentDidUpdate() {
        // console.log(this.state.x)
    }



    displayModal = () => {
        return (
            <View>
                <Modal
                    visible={this.state.modal}
                    animationType="slide"
                    onRequestClose={() => this.setState({ modal: false })}
                >
                    <View style={{ padding: 20 }}>
                        <Image
                            source={{ uri: 'https://via.placeholder.com/100x100' }}
                            style={{ width: 100, height: 100, alignSelf: 'center' }}
                        />
                        <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center' }}>
                            This is a custom alert!
                        </Text>
                        <Button2
                            title="Close"
                            onPress={() => this.setState({ modal: false })}
                            style={{ marginTop: 20 }}
                        />
                    </View>
                </Modal>
            </View >
        );

    }

    render() {
        return (
            <SafeAreaProvider>
                <View style={{ flex: 1, }}>
                    {/* <StatusBar backgroundColor="#fff" barStyle="light-content"  /> */}

                    {this.displayModal()}

                    <ScrollView>
                        <View
                            style={styles.container}
                        >
                            <UpperBody navigation={this.props.navigation} />
                            <CenterBody navigation={this.props.navigation} />
                            <View style={styles.buttonContainer}>
                                <Button
                                    icon={"phone"}
                                    labelStyle={{ fontSize: 25 }}
                                    mode="contained"
                                    contentStyle={[styles.button, { width: width - 40, }]}
                                    style={styles.button}
                                    buttonColor='red'
                                    onPress={() => Linking.openURL('tel:+919079737008')}>
                                    <Text style={[styles.buttonText, { color: 'white' }]}>Emergency Helpline</Text>
                                </Button>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button
                                    icon={"qrcode-scan"}
                                    labelStyle={{ fontSize: 25 }}
                                    mode="contained"
                                    contentStyle={[styles.button, { width: width - 40, }]}
                                    style={styles.button}
                                    buttonColor="blue"
                                    onPress={() => {
                                        this.setState({ modal: !this.state.modal });
                                    }}>
                                    <Text style={[styles.buttonText, { color: 'white' }]}>Payment</Text>
                                </Button>
                            </View>
                            <LowerBody navigation={this.props.navigation} />
                        </View>
                    </ScrollView>
                    <Snackbar
                        style={{ height: 75, alignItems: 'center' }}
                        visible={this.state.visible}
                        onDismiss={() => this.setState({ visible: true })}

                    >

                        {
                            this.state.slide === 1 && (
                                <View style={{ flexDirection: 'row', marginTop: 7.5 }}>
                                    <Button
                                        labelStyle={{ fontSize: 25 }}
                                        style={{ marginLeft: -10 }}
                                        onPress={() => {
                                            this.setState({
                                                slide: 2
                                            })
                                        }}
                                    >
                                        <Text style={{ color: 'white' }}>{'<'}</Text>
                                    </Button>
                                    <Text style={{ textAlign: 'center', color: 'white', marginTop: 5, marginLeft: 60 }}>
                                        ADVERTISEMENT
                                    </Text>
                                </View>

                            )
                        }{
                            this.state.slide === 2 && (
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ marginTop: 25 }}>

                                        <Button
                                            labelStyle={{ fontSize: 25 }}
                                            style={{ marginLeft: -10, marginBottom: 10 }}
                                            onPress={() => {
                                                this.setState({
                                                    slide: 1
                                                })
                                            }}
                                        >
                                            <Text style={{ color: 'white' }}>{'<'}</Text>
                                        </Button>
                                    </View>
                                    <Image
                                        source={require('../../assets/icons/img_bg1.jpg')}
                                        style={{ height: 75, width: width - 170 }}

                                    />
                                </View>
                            )
                        }
                    </Snackbar>
                    <SpeedDialComponent />
                </View>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        width: width - 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonContainer: {
        justifyContent: 'center', alignItems: 'center', marginTop: 20
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

});
