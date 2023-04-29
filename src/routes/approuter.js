import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as pages from '../pages'
import * as RouteKey from '../constant'

const Stack = createNativeStackNavigator()

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={RouteKey.SPLASH} component={pages.Splash} />
                <Stack.Screen name={RouteKey.HOME} component={pages.Home} options={{ headerShown: false }} />
                <Stack.Screen name={RouteKey.DETAILS} component={pages.Details} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppRouter

const styles = StyleSheet.create({})