import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

import {ThemeProvider} from 'styled-components';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './global/themes/theme';
import {Dashboard} from './screens/Dashboard';

export default function App() {
    SplashScreen.preventAutoHideAsync();
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return;
    }

    SplashScreen.hideAsync();

    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    );
}
