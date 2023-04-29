import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { deviceHeight, deviceWidth } from '../../Dimenssion/dimenssion'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Cards from './cards'

const Home = (props) => {
    const [city, setCity] = useState()


    const cities = [
        {
            name: 'New York',
            image: require("../../assets/image/img1.jpg")
        },
        {
            name: 'London',
            image: require("../../assets/image/img2.jpg")
        },
        {
            name: 'New Delhi',
            image: require("../../assets/image/img3.jpg")
        },
        {
            name: 'New Jersy',
            image: require("../../assets/image/img4.jpg")
        },
        {
            name: 'Bhubaneswar',
            image: require("../../assets/image/img5.jpg")
        },
        {
            name: 'Kerla',
            image: require("../../assets/image/img6.jpg")
        },
        {
            name: 'Bangaloor',
            image: require("../../assets/image/img7.jpg")
        },
    ]

    return (
        <View>

            <ImageBackground source={require('../../assets/image/main1.webp')} style={{ height: "100%", width: deviceWidth }}
                imageStyle={{ opacity: 0.8, backgroundColor: 'black' }} />
            <View style={{ position: 'absolute', paddingVertical: 40, paddingHorizontal: 20, }}>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: deviceWidth - 40 }}>
                    <TouchableOpacity>
                        <Ionicons name="menu-outline" size={34} color="white" />
                    </TouchableOpacity>
                    <Image source={require('../../assets/image/Profile.jpg')} style={{ height: 50, width: 50, borderRadius: 50 }} />

                </View>

                <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
                    <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>Hello Biswo !!</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginTop: 10 }}>Serch The City By The Name......</Text>
                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1, borderRadius: 20, borderColor: 'white', marginTop: 20 }}>
                    <TextInput placeholder='Serch City' placeholderTextColor='white' style={{ paddingHorizontal: 10, paddingVertical: 10, color: 'white', width: '80%' }}
                        value={city}
                        onChangeText={(val) => setCity(val)} />
                    <TouchableOpacity onPress={() => props.navigation.navigate('details', { city })}>
                        <AntDesign name="search1" size={24} color="white" style={{ paddingHorizontal: 10, paddingVertical: 10 }} />
                    </TouchableOpacity>
                </View>


                <Text style={{ color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 220, marginBottom: 20 }}>My Location</Text>
                <FlatList horizontal data={cities} renderItem={({ item }) => (
                    <Cards name={item.name} image={item.image} navigation={props.navigation} />
                )} />


                {/* {
                    cities.map((item, i) => (

                        <Cards name={item.name} image={item.image} key={i} />

                    ))
                } */}


            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})