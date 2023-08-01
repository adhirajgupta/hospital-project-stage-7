import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { Text, Button, ActivityIndicator } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { db } from '../../config';
import { setDoc, doc, getFirestore, collection, getDocs, deleteDoc, } from 'firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient'
import * as SecureStore from 'expo-secure-store';
import { async } from '@firebase/util';
import { checkEmail } from './components/extraFunctions';
import { useFocusEffect } from '@react-navigation/native';

const firestore = getFirestore(db);
const usersRef = collection(firestore, "Users");


const auth = getAuth(db);
const { width, height } = Dimensions.get("window")



//! Saves login in expo-secure-store
saveLoginDetailsInStore = async (email, password) => {
    await SecureStore.setItemAsync("UserDetails", JSON.stringify({ email: email, password: password }))
}

const forgotPassword = async (email) => {
    if (checkEmail(email)) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                console.log("password reset mail send")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    } else {
        Alert.alert("Invalid email address", "Please type in a valid email in the input", [{
            text: 'OK',

        }],
        );
    }
}


const SignInScreen = ({ navigation }) => {

    const [ready, setReady] = useState(false)

    //! Checks if the user has previously logged in or not and directs him to the screen
    useEffect(() => {
        async function autoLogin() {
            try {

                const jsonValue = await SecureStore.getItemAsync('UserDetails')
                let user = jsonValue != null ? JSON.parse(jsonValue) : null;
                console.log("user details login.js", user)
                if (user) {
                    signInWithEmailAndPassword(auth, user.email, user.password).then(() => {
                        navigation.navigate('Home')
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode)
                        console.log(errorMessage)
                        Alert.alert('Unsuccessful log in', `${errorCode}`, [

                            {
                                text: 'OK',
                            }
                        ])
                    });
                }
                await new Promise(resolve => setTimeout(resolve, 2000));

            } finally {
                setReady(true)
            }
        }

        //! Checks for an active network connection so user does not face any errors
        async function checkNetwork() {
            const response = await fetch('https://google.com');
            if (response.status === 200) {
                return true
            } else {
                return false
            }
        }

        if (checkNetwork()) {
            autoLogin()
        } else {
            Alert.alert("Check your network connection", "You need an internet connection to proceed", [
                {
                    text: 'OK',
                    onPress: () => {
                        autoLogin()

                    }
                }
            ])
        }
    }, [])


    useFocusEffect(
        React.useCallback(() => {
            console.log("Login entered")
            return () => {
                // Clean up function here (optional)
                console.log("Login exited")
                setData({
                    username: '',
                    password: '',
                    check_textInputChange: false,
                    secureTextEntry: true,
                })
                // console.log(data)

            };
        }, [])
    );

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });
    //* State for Activity indicator after login is pressed
    const [ai, setAi] = useState(false)


    const login = (email, password, navigation) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                saveLoginDetailsInStore(email, password)
                setAi(false)    //* Activity indicator state to false after login is done
                Alert.alert('Successfully Logged in', 'You are now logged in with ' + email, [

                    {
                        text: 'OK', onPress: () => {
                            navigation.navigate('Home')

                        }
                    }
                ])
                console.log("Login.js", auth.currentUser.email)
                // ...
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                setAi(false)    //* Activity indicator state

                Alert.alert('Unsuccessful log in', `${errorCode}`, [

                    {
                        text: 'OK',
                    }
                ])
            });
    }


    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: checkEmail(val)
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }



    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    if (ready) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Login Now!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <ScrollView>
                        <Text style={styles.text_footer}>Username</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Username"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val)}
                                value={data.username}
                            />
                            {data.check_textInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}
                                    />
                                </Animatable.View>
                                : null}
                        </View>

                        <Text style={[styles.text_footer, {
                            marginTop: 35
                        }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handlePasswordChange(val)}
                                value={data.password}
                            />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Button mode="text" style={{ marginLeft: width - (width / 2 - 5) }} onPress={() => forgotPassword(data.username)}>
                                Forgot Password
                            </Button>
                        </View>
                        {
                            ai && <ActivityIndicator />
                        }

                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => {
                                    setAi(true)
                                    login(data.username, data.password, navigation)
                                }}
                                style={[styles.signIn, {
                                    borderColor: '#009387',
                                    borderWidth: 1,
                                    marginTop: 15,
                                }]}
                            >
                                <LinearGradient
                                    colors={['#08d4c4', '#01ab9d']}
                                    style={styles.signIn}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]}>Sign In</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignUpScreen')}
                                style={[styles.signIn, {
                                    borderColor: '#009387',
                                    // opacity:0.1,
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#009387',
                                }]}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </View>
        );
    } else {
        return (
            <ActivityIndicator />
        )
    }
};


export default SignInScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});