const SignUpScreen2 = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        firstName: '',
        lastName: '',
        phoneNum: ''
    });

    const handleUserInfo = (attribute, val) => {
        setData({
            ...data,
            [attribute]: val
        })
    }

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
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

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
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

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>

                    <Text style={[styles.text_footer]}>First Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your first name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleUserInfo("firstName", val)}
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
                    }]}>Last Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your last name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleUserInfo("lastName", val)}
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
                    }]}>Phone Number</Text>
                    <View style={styles.action}>
                        <Feather
                            name="phone"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your phone number"
                            keyboardType='phone-pad'
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleUserInfo("phoneNum", val)}
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
                    }]}>Username</Text>
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

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm Your Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
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
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View>
                    <View style={styles.button}>

                        <TouchableOpacity
                            onPress={() => {
                                signUp(data.username, data.password, data.firstName + " " + data.lastName, data.phoneNum)
                                navigation.navigate('Home')
                            }}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15,
                                backgroundColor: '#08d4c4'
                            }]}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LoginScreen')}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15,
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};



import React from 'react';
import {
    View,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { Text } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword, updateProfile, updatePhoneNumber } from "firebase/auth";
import { db } from '../../config';
import { setDoc, doc, getFirestore, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient'
import * as SecureStore from 'expo-secure-store';
import { checkEmail, isValidPhoneNumber } from '../LoginScreen/components/extraFunctions';

const firestore = getFirestore(db);
const usersRef = collection(firestore, "Users");


const auth = getAuth(db);

const signUp = (email, password, username, phone, navigation) => {
    console.log("Running sign up function")
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            createFirestoreUser(username, email, password, phone)

            Alert.alert('Successfully Signed up', 'You are now logged in with ' + email, [

                {
                    text: 'OK', onPress: () => {
                        navigation.navigate('Home')
                    }
                }
            ])


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
        });
}

const createFirestoreUser = async (username, email, password, phone) => {
    await setDoc(doc(usersRef, email), {
        name: username,
        emailId: email,
        password: password,
        phoneNum: phone
    })
    await SecureStore.setItemAsync("UserDetails", JSON.stringify({ email: email, password: password }))

    const user = auth.currentUser;
    console.log("signUp function", user.email)

    await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: "https://raw.githubusercontent.com/itzpradip/react-navigation-v6-mix/master/src/assets/images/user-profile.jpg"
    })

    await updatePhoneNumber(auth.currentUser, phone)

    console.log("SignUp.js to check if the update profile worked \n", user.displayName, user.phoneNumber)


}





const SignUpScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '', //! Basically Email id in the text input
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        firstName: '',
        lastName: '',
        phoneNum: '',
        //* If the phone number is valid or not
        checkPhoneValid: false
    });

    //! Function for when first or last name changes
    const handleUserInfo = (attribute, val) => {
        setData({
            ...data,
            [attribute]: val.trim(),
        })
    }

    //! Function for when phone number changes
    const phoneInfo = (attribute, val) => {
        setData({
            ...data,
            [attribute]: val.trim(),
            checkPhoneValid: isValidPhoneNumber(val)
        })
    }

    const textInputChange = (val) => {
        //! Basically Email id in the text input
        if (val.length !== 0) {
            setData({
                ...data,
                username: val.trim(),
                //* The data value for the green colour icon on the right of text input
                check_textInputChange: checkEmail(val)
            });
        }
        //  else {
        //     setData({
        //         ...data,
        //         username: val,
        //         check_textInputChange: false
        //     });
        // }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
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

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>

                    <Text style={[styles.text_footer]}>First Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your first name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleUserInfo("firstName", val)}
                        />
                        {/* {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null} */}
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Last Name</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your last name"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleUserInfo("lastName", val)}
                        />
                        {/* {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null} */}
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Phone Number</Text>
                    <View style={styles.action}>
                        <Feather
                            name="phone"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your phone number"
                            keyboardType='phone-pad'
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => phoneInfo("phoneNum", val)}
                        />
                        {data.checkPhoneValid ?
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
                    }]}>Email Id</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Email Id"
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType='email-address'
                            onChangeText={(val) => textInputChange(val)}
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

                    <Text style={{ fontSize: 12, color: 'gray' }}>
                        Password must be at least 6 characters
                    </Text>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm Your Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.confirm_secureTextEntry ?
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
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View>
                    <View style={styles.button}>

                        <TouchableOpacity
                            onPress={() => {
                                // if (data.password === data.confirm_password && data.phoneNum != "" && data.firstName != "" && data.lastName != "" && data.checkPhoneValid && data.check_textInputChange && data.confirm_password.length>5)
                                //     signUp(data.username, data.password, data.firstName + " " + data.lastName, data.phoneNum, navigation)
                                // else Alert.alert("Incorrect input in fields","Incorrect input in fields",  [
                                //     {
                                //         text: 'OK'
                                //     }
                                // ])

                                if (data.password === data.confirm_password &&
                                    data.phoneNum !== "" &&
                                    data.firstName !== "" &&
                                    data.lastName !== "" &&
                                    data.checkPhoneValid &&
                                    data.check_textInputChange &&
                                    data.confirm_password.length > 5) {
                                    signUp(data.username, data.password, data.firstName + " " + data.lastName, data.phoneNum, navigation)
                                } else if (data.password !== data.confirm_password) {
                                    Alert.alert("Incorrect input in fields", "Passwords do not match", [{ text: 'OK' }]);
                                } else if (data.phoneNum === "") {
                                    Alert.alert("Incorrect input in fields", "Phone number is required", [{ text: 'OK' }]);
                                } else if (data.firstName === "") {
                                    Alert.alert("Incorrect input in fields", "First name is required", [{ text: 'OK' }]);
                                } else if (data.lastName === "") {
                                    Alert.alert("Incorrect input in fields", "Last name is required", [{ text: 'OK' }]);
                                } else if (!data.checkPhoneValid) {
                                    Alert.alert("Incorrect input in fields", "Invalid phone number", [{ text: 'OK' }]);
                                } else if (!data.check_textInputChange) {
                                    Alert.alert("Incorrect input in fields", "Invalid email id", [{ text: 'OK' }]);
                                } else if (data.confirm_password.length <= 5) {
                                    Alert.alert("Incorrect input in fields", "Password must be at least 6 characters", [{ text: 'OK' }]);
                                } else {
                                    Alert.alert("Incorrect input in fields", "Incorrect input in fields", [{ text: 'OK' }]);
                                }

                            }}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15,
                                backgroundColor: '#08d4c4'
                            }]}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LoginScreen')}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15,
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default SignUpScreen;

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