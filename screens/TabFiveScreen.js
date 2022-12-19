import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, ScrollView, StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import snowData from '../constants/snowData';

export function Card({navigation, cardData}){
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: cardData})} style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.33, height: Dimensions.get('window').width * 0.33, margin: 0.5}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 5}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.03, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.03, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: cardData.title == "Chowder Powder (Chowdah Powdah)" ? Dimensions.get('window').height * 0.023 : Dimensions.get('window').height * 0.028, fontWeight: "bold", padding: 5, marginTop: 5, alignSelf: "center" }}>{cardData.title}</Text>
                </TouchableOpacity>
        )
    }

export default function Home({navigation}) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(snowData)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      }, [])

        return(
            <ScrollView style={{ flex: 1 }}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (<Card key={cardData.key} cardData={cardData} navigation={navigation} /> )) : ("")}               
                </View>
            </ScrollView>
        );
}