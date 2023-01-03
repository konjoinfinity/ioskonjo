import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, ScrollView,
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
             <Text style={{ fontSize: cardData.title == "Chowder Powder (Chowdah Powdah)" ? Dimensions.get('window').height * 0.023 : Dimensions.get('window').height * 0.026, fontWeight: "bold", padding: 5, marginTop: 5, alignSelf: "center" }}>{cardData.title}</Text>
                </TouchableOpacity>
        )
    }

export function Title({title, color}){
    return (
        <View style={{ width: Dimensions.get('window').width * 1, height: Dimensions.get('window').width * 0.2, margin: 0.5}}>
                    <Text style={{ color: color, fontSize: Dimensions.get('window').height * 0.05, fontStyle: "italic", padding: 10, alignSelf: "center" }}>{title}</Text>
                    </View>
        )
    }

export default function Home({navigation}) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(snowData)
        const unsubscribe = navigation.addListener('focus', () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          });
          return unsubscribe;
      }, [navigation])

        return(
            <ScrollView style={{ flex: 1 }}>
                {cards.length !== 0 ?<Title title={cards[0].kind} color={cards[0].backgroundColor} /> : ("")} 
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key < 23 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[23].kind} color={cards[23].backgroundColor} /> : ("")} 
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 22 && cardData.key < 35 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[35].kind} color={cards[35].backgroundColor} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 34 && cardData.key < 51 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[51].kind} color={cards[51].backgroundColor} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 50 && cardData.key < 72 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[72].kind} color={cards[72].backgroundColor} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 71 && cardData.key < 95 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[95].kind} color={cards[95].backgroundColor} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 94 && cardData.key < 102 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[102].kind} color={cards[102].backgroundColor} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 101 && cardData.key < 116 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[116].kind} color={cards[116].backgroundColor} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 115 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
            </ScrollView>
        );
}