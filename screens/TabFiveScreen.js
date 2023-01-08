import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import snowWeather from '../constants/snowWeather';
import * as Animatable from 'react-native-animatable';

AnimatableView = Animatable.createAnimatableComponent(View);

export function Card({navigation, cardData}){
        return (
            <AnimatableView
            animation="bounceInUp"
            delay={cardData.key * 100}
            duration={2000}>
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: cardData})} style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.33, height: Dimensions.get('window').width * 0.33, margin: 0.5}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 5}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.025, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.025, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.02, fontWeight: "bold", padding: 5, marginTop: 5, alignSelf: "center" }}>{cardData.title}</Text>
                </TouchableOpacity>
                </AnimatableView>
        )
    }

export default function Home({navigation}) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setCards(snowWeather)
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          });
          return unsubscribe;
      }, [navigation])

      useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setCards([])
        });
        return unsubscribe;
    }, [navigation]);

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
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 13 && cardData.key < 37 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                <View style={{ width: Dimensions.get('window').width * 1, height: Dimensions.get('window').width * 0.2, margin: 0.5}}>
                    <Text style={{ color: "#BDD7EE", fontSize: Dimensions.get('window').height * 0.05, fontStyle: "italic", padding: 10, alignSelf: "center" }}>Snow Oddities</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 36 && cardData.key < 59 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>

                <View style={{ flex: 1, alignItems: "center"}}>
                    <Text style={{ color: "#B3F7F5", fontSize: Dimensions.get('window').height * 0.05, fontStyle: "italic", textAlign: "center", padding: 10, margin: 0.5 }}>International Snow Classification for Seasonal Snow (Grain Shape)</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 58 && cardData.key < 71 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>

                    <View style={{ flex: 1, alignItems: "center"}}>
                    <Text style={{ color: "#ACE7FD", fontSize: Dimensions.get('window').height * 0.05, fontStyle: "italic", textAlign: "center", padding: 10, margin: 0.5 }}>Snow Flake Types Precipitation Particles (Subclasses)</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:""}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 70 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
                					
            </ScrollView>
        );
}