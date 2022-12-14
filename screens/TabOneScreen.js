import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, ScrollView, StyleSheet, useColorScheme, Platform
} from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import snowData from '../constants/snowData';
import * as Animatable from 'react-native-animatable';

AnimatableView = Animatable.createAnimatableComponent(View);
var width;
var height;

export function Card({navigation, cardData, border}){
        return (
            Platform.OS == "ios" ? 
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: cardData})} 
            style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.33, 
            height: Dimensions.get('window').width * 0.33, margin: 0.5, opacity: 0.9, 
            borderStyle: border === false ? "solid" : "", borderColor: border === false ? "gray" : "", borderWidth: border === false ? 1 : 0}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 5}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.025, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.025, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.02, fontWeight: "bold", padding: 5, marginTop: 5, alignSelf: "center", textAlign: "center" }}>{cardData.title}</Text>
             </View>
            </TouchableOpacity> :
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: cardData})} 
            style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.33, 
            height: Dimensions.get('window').width * 0.33, margin: 0.5, opacity: 0.9, 
            borderStyle: "solid", borderColor: "gray", borderWidth: border === false ? 1 : 0}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 5}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.025, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.025, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <View style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.02, fontWeight: "bold", padding: 5, marginTop: 5, alignSelf: "center", textAlign: "center" }}>{cardData.title}</Text>
             </View>
            </TouchableOpacity>
        )
    }

export function Title({title, color}){
;
    return (
        <View style={{ width: Dimensions.get('window').width * 1, height: Dimensions.get('window').width * 0.2, margin: 0.5}}>
        <Text style={{ color: color, fontSize: Dimensions.get('window').height * 0.04, fontStyle: "italic", padding: 10, alignSelf: "center" }}>{title}</Text>
        </View>
        )
    }

export default function Home({navigation}) {
    const [cards, setCards] = useState([]);
    const [snowing, setSnowing] = useState(true)
    let colorScheme = useColorScheme();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setCards(snowData)
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
            <ScrollView style={{ flex: 1 }}  onLayout={(event) => {width, height = event.nativeEvent.layout}}>
                {cards.length !== 0 ? <Title title={cards[0].kind} color={colorScheme === 'dark' ? cards[0].backgroundColor : "#000000"} /> : ("")} 
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key < 23 ? <AnimatableView key={cardData.key} animation="bounceInDown" delay={cardData.key * 100} duration={2000}><Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false} /></AnimatableView> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[23].kind} color={colorScheme === 'dark' ? cards[23].backgroundColor : "#000000"} /> : ("")} 
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 22 && cardData.key < 35 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[35].kind} color={colorScheme === 'dark' ? cards[35].backgroundColor : "#000000"} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 34 && cardData.key < 51 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[51].kind} color={colorScheme === 'dark' ? cards[51].backgroundColor : "#000000"} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 50 && cardData.key < 72 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[72].kind} color={colorScheme === 'dark' ? cards[72].backgroundColor : "#000000"} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 71 && cardData.key < 95 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[95].kind} color={colorScheme === 'dark' ? cards[95].backgroundColor : "#000000"} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 94 && cardData.key < 102 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[102].kind} color={colorScheme === 'dark' ? cards[102].backgroundColor : "#000000"} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 101 && cardData.key < 116 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[116].kind} color={colorScheme === 'dark' ? cards[116].backgroundColor : "#000000"} /> : ("")}
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 115 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} /> : (""))) : ("")}               
                </View>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    snowContainer: {
      width: width,
      height: height,
      position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.001)'
    }
  });