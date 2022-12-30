import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import snowWeather from '../constants/snowWeather';

export function Card({navigation, cardData}){
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: cardData})} style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.33, height: Dimensions.get('window').width * 0.33, margin: 0.5}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 5}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.03, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.03, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.026, fontWeight: "bold", padding: 5, marginTop: 5, alignSelf: "center" }}>{cardData.title}</Text>
                </TouchableOpacity>
        )
    }

export default function Home({navigation}) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        var result = snowWeather.filter(sno => sno.key <= 34);
        setCards(result)
        const unsubscribe = navigation.addListener('focus', () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          });
          return unsubscribe;
      }, [navigation])

        return(
            <ScrollView style={{ flex: 1 }}>
                <View style={{ width: Dimensions.get('window').width * 1, height: Dimensions.get('window').width * 0.2, margin: 0.5}}>
                    <Text style={{ color: "#DDEBF7", fontSize: Dimensions.get('window').height * 0.05, fontStyle: "italic", padding: 10, alignSelf: "center" }}>Snow Formations</Text>
                    </View>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key < 14 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                <View style={{ width: Dimensions.get('window').width * 1, height: Dimensions.get('window').width * 0.2, margin: 0.5}}>
                    <Text style={{ color: "#BFBFBF", fontSize: Dimensions.get('window').height * 0.05, fontStyle: "italic", padding: 10, alignSelf: "center" }}>Snow Weather</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 13 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                <View style={{ width: Dimensions.get('window').width * 1, height: Dimensions.get('window').width * 0.2, margin: 0.5}}>
                    <Text style={{ color: "#BDD7EE", fontSize: Dimensions.get('window').height * 0.05, fontStyle: "italic", padding: 10, alignSelf: "center" }}>Snow Oddities</Text>
                    </View>
            </ScrollView>
        );
}