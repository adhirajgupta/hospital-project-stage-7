import { createDrawerNavigator } from '@react-navigation/drawer';
import AppBar from '../globalComponents/AppBar';
import CustomDrawer from '../globalComponents/CustomDrawer';
import { useEffect, useState } from 'react';
import Home from '../screens/HomeScreen/Home';
import Affiliations from '../screens/AffiliationsScreen/Affiliations';
import Asthma from '../screens/AsthmaScreen/Asthma';
import AboutUs from '../screens/AboutUsScreen/AboutUs';
import Ent from '../screens/EntScreen/Ent';
import Allergy from '../screens/AllergyScreen/Allergy';
import Homeopathy from '../screens/HomeopathyScreen/Homeopathy';
import Diabetes from '../screens/DiabetesScreen/Diabetes';
import Dental from '../screens/DentalScreen/Dental';
import Cosmetology from '../screens/CosmetologyScreen/Cosmetology';
import Pharmacy from '../screens/PharmacyScreen/Pharmacy';
import LabTest from '../screens/LabTestScreen/LabTest';
import StackAuth from './stackAuth';
import Piles from '../screens/PilesScreen/Piles';
import Hair from '../screens/HairScreen/Hair';
import Skin from '../screens/SkinScreen/Skin';
import { getAuth } from 'firebase/auth';
import db from '../config';
import { getItemAsync } from 'expo-secure-store';


// TODO Do not change the code under any circumstance before completely understanding how it works
//! Both if conditions get executed at different times
const auth = getAuth(db)
const Drawer = createDrawerNavigator()

function DrawerComponent() {

    const getLoggedInState = async () => {
        const jsonValue = await getItemAsync("UserDetails")
        let val = jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log("drawer.js jsonValue", val)
        setLog(val != null ? true : false)
    }

    useEffect(() => {
        getLoggedInState()
    }, [])

    const [log, setLog] = useState("")


    if (log == true) {

        return (
            
            <Drawer.Navigator
            
                // initialRouteName={log == false ? "SignOut" : "Home"}
                drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    header: AppBar,
                    drawerActiveBackgroundColor: '#aa18ea',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontSize: 15,
                    },
                }}
            >
                {console.log("drawer.js log 1", log == false ? "SignOut" : "Home")}
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="SignOut" component={StackAuth} options={{ headerShown: false }} />
                <Drawer.Screen name="Affiliations" component={Affiliations} />
                <Drawer.Screen name='Asthma' component={Asthma} />
                <Drawer.Screen name="AboutUs" component={AboutUs} />
                <Drawer.Screen name="Ent" component={Ent} />
                <Drawer.Screen name="Allergy" component={Allergy} />
                <Drawer.Screen name="Homeopathy" component={Homeopathy} />
                <Drawer.Screen name="Piles" component={Piles} />
                <Drawer.Screen name="Hair" component={Hair} />
                <Drawer.Screen name="Skin" component={Skin} />
                <Drawer.Screen name='Diabetes' component={Diabetes} />
                <Drawer.Screen name='Dental' component={Dental} />
                <Drawer.Screen name='Cosmetology' component={Cosmetology} />
                <Drawer.Screen name='Pharmacy' component={Pharmacy} />
                <Drawer.Screen name='LabTest' component={LabTest} />

            </Drawer.Navigator>
        );
    } else if (log == false) {
        return (
            <Drawer.Navigator
                // initialRouteName={log == false ? "SignOut" : "Home"}
                drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    header: AppBar,
                    drawerActiveBackgroundColor: '#aa18ea',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontSize: 15,
                    },
                }}
            >
                {console.log("drawer.js log 2", log == false ? "SignOut" : "Home")}
                <Drawer.Screen name="SignOut" component={StackAuth} options={{ headerShown: false }} />
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Affiliations" component={Affiliations} />
                <Drawer.Screen name='Asthma' component={Asthma} />
                <Drawer.Screen name="AboutUs" component={AboutUs} />
                <Drawer.Screen name="Ent" component={Ent} />
                <Drawer.Screen name="Allergy" component={Allergy} />
                <Drawer.Screen name="Homeopathy" component={Homeopathy} />
                <Drawer.Screen name="Piles" component={Piles} />
                <Drawer.Screen name="Hair" component={Hair} />
                <Drawer.Screen name="Skin" component={Skin} />
                <Drawer.Screen name='Diabetes' component={Diabetes} />
                <Drawer.Screen name='Dental' component={Dental} />
                <Drawer.Screen name='Cosmetology' component={Cosmetology} />
                <Drawer.Screen name='Pharmacy' component={Pharmacy} />
                <Drawer.Screen name='LabTest' component={LabTest} />

            </Drawer.Navigator>
        )
    }

}

export default DrawerComponent;