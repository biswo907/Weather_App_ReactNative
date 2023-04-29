import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from '../../Dimenssion/dimenssion'

const Cards = ({ name, image, navigation }) => {
    return (
        <View>

            <TouchableOpacity style={{ marginHorizontal: 7 }} onPress={() => navigation.navigate('details', { name })}>
                <ImageBackground source={image} style={{ height: deviceHeight / 5, width: deviceWidth / 2 - 50 }} imageStyle={{ borderRadius: 16, opacity: 0.5, backgroundColor: 'black' }} />

                <View style={{ position: "absolute", height: '100%', width: '100%' }}>
                    <Text style={{ fontSize: 22, width: '100%', height: '100%', textAlign: 'center', textAlignVertical: 'center', color: 'white', fontWeight: 'bold', }}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({})