import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            NavigatePage()
        }, 1000);
    }, [])

    const NavigatePage = () => {
        navigation.navigate('home')
    }

    return (
        <View>


            <View style={styles.loadingView}>
                <ActivityIndicator size="large" color="lightgreen" style={styles.loader} />
                <Text style={styles.text}>Loading...</Text>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    loadingView: {
        // backgroundColor: 'red',
        marginTop: 150

    },
    loader: {
        // backgroundColor: "green"
    },
    text: {
        textAlign: 'center',
        fontSize: 21
    }
})