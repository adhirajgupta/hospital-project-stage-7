import React, { useEffect } from 'react';
import {
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,

} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';




import Ionicons from '@expo/vector-icons/Ionicons'
import { Avatar, Drawer, Text, Divider, ActivityIndicator } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import db from '../config';
import { deleteItemAsync } from 'expo-secure-store';



const auth = getAuth(db)

const {width,height} = Dimensions.get('window')


const CustomDrawer = props => {
    const drawerItems = [
        {
            icon: () => (<Ionicons name='md-home' size={42} />),
            label: 'Home',
            onPress: () => { props.navigation.navigate('Home') }
        },
        {
            icon: () => (
                <Image
                    source={require('../assets/icons/Asthma.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Asthma',
            onPress: () => { props.navigation.navigate('Asthma') }
        },
        {
            icon: () => (
                <Image
                    source={require('../assets/icons/ent.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'ENT',
            onPress: () => { props.navigation.navigate('Ent') }
        },
        {
            icon: () => (
                <Image
                    source={require('../assets/icons/allergy.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Allergy',
            onPress: () => { props.navigation.navigate('Allergy') }

        },
        {
            icon: () => (
                <Image
                    source={require('../assets/icons/homeopathy.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Homeopathy',
            onPress: () => { props.navigation.navigate('Homeopathy') }

        },
        {
            icon: () => (
                <Image
                    source={require('../assets/icons/Diabetes.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Diabetes',
            onPress: () => { props.navigation.navigate('Diabetes') }

        }, {
            icon: () => (
                <Image
                    source={require('../assets/icons/teeth.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Dental',
            onPress: () => { props.navigation.navigate('Dental') }

        }, {
            icon: () => (
                <Image
                    source={require('../assets/icons/skin.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Cosmetology',
            onPress: () => { props.navigation.navigate('Cosmetology') }

        }, {
            icon: () => (
                <Image
                    source={require('../assets/icons/Pharmacy.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Pharmacy',
            onPress: () => { props.navigation.navigate('Pharmacy') }

        },
        {
            icon: () => (
                <Image
                    source={require('../assets/icons/labTest.png')}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Lab Test',
            onPress: () => { props.navigation.navigate('LabTest') }

        },
        {
            icon: () => (
                <Ionicons
                    name='people'
                    size={42}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'About Us',
            onPress: () => { props.navigation.navigate('AboutUs') }

        },
        {
            icon: () => (
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4252/4252325.png' }}
                    style={{ width: 42, height: 42 }}
                />
            ),
            label: 'Publications',
            onPress: () => { props.navigation.navigate('Publications') }

        },


    ]



    return (
        
        <View style={{ flex: 1 }}>
            {// Move drawerContentScrollView here for second type of look
            console.log("Custom Drawer auth.currentUser",auth.currentUser?.email)
            }
            <DrawerContentScrollView
                // {...props}
                contentContainerStyle={{ backgroundColor: 'white' }}>
                <ImageBackground
                    source={{ uri: 'https://raw.githubusercontent.com/itzpradip/react-navigation-v6-mix/master/src/assets/images/menu-bg.jpeg' }}
                    style={{ padding: 20 }}
                >
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Avatar.Image
                            size={90}
                            source={{ uri: auth.currentUser?.photoURL != null?auth.currentUser?.photoURL:"https://raw.githubusercontent.com/itzpradip/react-navigation-v6-mix/master/src/assets/images/user-profile.jpg" }}
                            style={{ height: 90, width: 90, borderRadius: 50, marginBottom: 10, marginRight: 15 }}
                        />
                        <View style={{ flexDirection: 'column' }}>

                            <Text
                            ellipsizeMode='tail'
                                numberOfLines={2}
                                style={{
                                    color: '#fff',
                                    fontSize: 22,
                                    marginBottom: 5,
                                    maxWidth:width*0.4

                                }}>
                                    {auth.currentUser?.displayName?auth.currentUser?.displayName:"Username not there"}
                            </Text>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 15,
                                    marginBottom: 5,
                                    textAlign: 'center',
                                }}>
                                View Account {'>'}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>


                {
                    drawerItems.map((element, index) => (
                        // console.log(element),
                        <>
                            <Drawer.Item
                                icon={element.icon}
                                label={element.label}
                                onPress={element.onPress}
                                key={index}
                            // style={{borderBottomWidth:2}}
                            />
                            <Divider style={{ height: 2, borderColor: 'black' }} />
                        </>
                    ))
                }



                {/* <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
         */}
            </DrawerContentScrollView>

            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                {/* <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { 
                    deleteItemAsync("UserDetails")
                    signOut(auth).then(()=>{
                    props.navigation.navigate('SignOut')
                    })
                    }} style={{ paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;