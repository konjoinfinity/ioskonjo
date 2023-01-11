import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, ScrollView, useColorScheme
} from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import snowWeather from '../constants/snowWeather';
import * as Animatable from 'react-native-animatable';

AnimatableView = Animatable.createAnimatableComponent(View);

export function Card({navigation, cardData, border}){
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: cardData})} style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.33, height: Dimensions.get('window').width * 0.33, margin: 0.5, borderStyle: border === false ? "solid" : "", borderColor: border === false ? "gray" : "", borderWidth: border === false ? 1 : 0}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 5}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.025, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.025, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.02, fontWeight: "bold", padding: 5, marginTop: 5, alignSelf: "center", textAlign: "center" }}>{cardData.title}</Text>
                </TouchableOpacity>
        )
    }

    export function Title({title, color}){
        return (
            <View style={{ width: Dimensions.get('window').width * 1, margin: 0.5}}>
            <Text style={{ color: color, fontSize: Dimensions.get('window').height * 0.04, fontStyle: "italic", padding: 10, textAlign: "center" }}>{title}</Text>
            </View>
            )
        }

export default function Home({navigation}) {
    const [cards, setCards] = useState([]);
    let colorScheme = useColorScheme();

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
               {cards.length !== 0 ? <Title title={cards[0].kind} color={colorScheme === 'dark' ? cards[0].backgroundColor : "#000000"} /> : ("")} 
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key < 14 ? <AnimatableView key={cardData.key} animation="bounceInDown" delay={cardData.key * 100} duration={2000}><Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/></AnimatableView> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[14].kind} color={colorScheme === 'dark' ? cards[14].backgroundColor : "#000000"} /> : ("")} 
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 13 && cardData.key < 37 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[37].kind} color={colorScheme === 'dark' ? cards[37].backgroundColor : "#000000"} /> : ("")} 
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 36 && cardData.key < 59 ? <Card key={cardData.key} cardData={cardData} navigation={navigation}border={colorScheme === 'dark' ? true : false} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[59].kind} color={colorScheme === 'dark' ? cards[59].backgroundColor : "#000000"} /> : ("")} 
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 58 && cardData.key < 71 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[71].kind} color={colorScheme === 'dark' ? cards[71].backgroundColor : "#000000"} /> : ("")} 
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 70 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>				
            </ScrollView>
        );
}