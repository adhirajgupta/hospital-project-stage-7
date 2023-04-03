import 'react-native-gesture-handler'
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerComponent from './navigation/drawer';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import db from './config';
import * as SplashScreen from 'expo-splash-screen';
import { getItemAsync } from 'expo-secure-store';
import { Provider } from 'react-native-paper';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {

	const [appIsReady, setAppIsReady] = useState(false);
	const [fontsLoaded] = useFonts({
		'Lato-Black': require('./assets/fonts/Lato/Lato-Regular.ttf'),
	});

	useEffect(() => {
		async function prepare() {
			try {
				const jsonValue = await getItemAsync("UserDetails")
				let val = jsonValue != null ? JSON.parse(jsonValue) : null;
				console.log("App.js jsonValue", val)
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	if (appIsReady) {
		return (

			<NavigationContainer onReady={onLayoutRootView}>
				<DrawerComponent />
			</NavigationContainer>
		);
	}
}

