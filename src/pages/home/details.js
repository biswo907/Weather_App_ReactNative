import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { deviceHeight, deviceWidth } from '../../Dimenssion/dimenssion';
import { Ionicons } from '@expo/vector-icons';
import { API_KEY } from '../../constant/apikey';

const Details = (props) => {
    const { name } = props.route.params;
    const [data, setData] = useState([])



    const GetApi = async () => {
        const url = (`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
        let result = await fetch(url);
        let response = await result.json();
        console.log(response)
        setData(response)
    }

    console.log(data);

    useEffect(() => {
        GetApi()
    }, [])

    // console.log(data);

    const Data = ({ title, value }) =>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
            <Text style={{ color: 'gray', fontSize: 22 }}>{title}</Text>
            <Text style={{ color: 'white', fontSize: 22 }}>{value}</Text>
        </View>



    return (
        <SafeAreaView>
            <ImageBackground source={require('../../assets/image/Weather_Background.jpg')} style={{ height: "100%", width: deviceWidth }}
                imageStyle={{ opacity: 0.8, backgroundColor: 'black' }} />
            <View style={{ position: 'absolute', paddingVertical: 40, paddingHorizontal: 20, }}>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: deviceWidth - 40 }}>
                    <TouchableOpacity>
                        <Ionicons name="menu-outline" size={34} color="white" />
                    </TouchableOpacity>
                    <Image source={require('../../assets/image/Profile.jpg')} style={{ height: 50, width: 50, borderRadius: 50 }} />

                </View>
                {
                    data ? <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: "center", height: deviceHeight - 100 }}>


                        <View>
                            <Text style={{ color: "white", fontSize: 60, top: -120 }} >{name}</Text>
                            <Text style={{ color: "white", fontSize: 22, textAlign: "center", top: -130 }}  >{data['weather'][0]['main']}</Text>
                        </View>
                        <Text style={{ color: "white", fontSize: 64 }} >{(data['main']['temp'] - 273).toFixed(2)} &deg; C</Text>

                        <View>
                            <Text style={{ color: 'white', fontSize: 22, marginBottom: 16 }} >Wheather Details</Text>
                            <View style={{ width: deviceWidth - 60 }}>
                                <Data title="Wind" value={data['wind']['speed']} />
                                <Data title="Preasure" value={data['main']['pressure']} />
                                <Data title="Humidity" value={`${data['main']['humidity']}%`} />
                                <Data title="Visibility" value={data['visibility']} />
                            </View>
                        </View>



                    </View> : null

                }
            </View>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({})