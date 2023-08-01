import React, { Component } from 'react';
import { View, StyleSheet, Image,  } from 'react-native'
import { Text } from 'react-native-paper'

class CenterBody extends Component {

    render() {
        return (
            <>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                            <View style={styles.tinyLogoView} onStartShouldSetResponder={() => this.props.navigation.navigate('Dental')}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/2818/2818318.png',
                            }} />
                        <Text style={styles.tinyLogoText}>Dental</Text>
                    </View>
                 <View style={styles.tinyLogoView} onStartShouldSetResponder={() => this.props.navigation.navigate('Cosmetology')}>
                        <Image
                            style={[styles.tinyLogo, { marginLeft: 20 }]}
                            source={require('../../../assets/icons/cosmetology.png')} />
                        <Text style={styles.tinyLogoText}>Cosmetology</Text>
                    </View>
                    <View style={styles.tinyLogoView} onStartShouldSetResponder={() => this.props.navigation.navigate('Hair')}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../../assets/icons/hair-loss.png')} />
                        <Text style={styles.tinyLogoText}>Hair</Text>
                    </View>

                </View>


                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={styles.tinyLogoView}>
                        <Image
                            style={[styles.tinyLogo,{marginLeft:25}]}
                            source={require('../../../assets/icons/homeopathy.png')} onStartShouldSetResponder={() => this.props.navigation.navigate('Homeopathy')} />
                        <Text style={styles.tinyLogoText}>Homeopathy</Text>
                    </View>
                    <View style={styles.tinyLogoView} onStartShouldSetResponder={() => this.props.navigation.navigate('Pharmacy')}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/3140/3140343.png',
                            }} />
                        <Text style={styles.tinyLogoText}>Pharmacy</Text>
                    </View>
                    <View style={styles.tinyLogoView} onStartShouldSetResponder={() => this.props.navigation.navigate('LabTest')}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../../assets/icons/labTest.png')} />
                        <Text style={styles.tinyLogoText}>Lab Tests</Text>
                    </View>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        paddingBottom: 5,
    },
    tinyLogoText: {
        fontSize: 17,
        textAlign: 'center'
    },
    tinyLogoView: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 20
    }
});
export default CenterBody;