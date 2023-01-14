import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import snowWeather from '../constants/snowWeather';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from '@ui-kitten/components';

AnimatableView = Animatable.createAnimatableComponent(View);
const storagekey = "storage";

export function Card({navigation, cardData, border}){
    const useCheckboxState = (initialCheck = true) => { const [checked, setChecked] = useState(initialCheck); return { checked };};
    const successCheckboxState = useCheckboxState();
  
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
               <Text style={{ fontSize: Dimensions.get('window').height * 0.02, fontWeight: "bold", padding: 2, marginTop: 2, alignSelf: "center", textAlign: "center" }}>{cardData.title}</Text>
               </View>
              {cardData.dateFound !== "" ? <CheckBox style={{position: 'absolute', bottom: 5, right: 5}} status='success' {...successCheckboxState}></CheckBox> : ("")}
              </TouchableOpacity>:
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
               {cardData.dateFound !== "" ? <CheckBox style={{position: 'absolute', bottom: 5, right: 5}} status='success' {...successCheckboxState}></CheckBox> : ("")}
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

export default function TabTwoScreen({navigation}) {
    const [cards, setCards] = useState([]);
    let colorScheme = useColorScheme();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          AsyncStorage.getItem(storagekey, (error, result) => {
            result !== null && result !== "[]" && result !== undefined ? setCards(JSON.parse(result)) : console.log(error)
          });
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        })
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
               {cards.length !== 0 ? <Title title={cards[133].kind} color={colorScheme === 'dark' ? cards[133].backgroundColor : "#000000"} /> : ("")} 
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 && cards.map((cardData) => cardData.key > 132 && cardData.key < 147 ? 
                <AnimatableView key={cardData.key} animation="bounceInDown" delay={(cardData.key - 130) * 100} duration={2000}>
                    <Card cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/></AnimatableView> : (""))}
                </View>
                {cards.length !== 0 ?<Title title={cards[147].kind} color={colorScheme === 'dark' ? cards[147].backgroundColor : "#000000"} /> : ("")} 
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 146 && cardData.key < 170 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[170].kind} color={colorScheme === 'dark' ? cards[170].backgroundColor : "#000000"} /> : ("")} 
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 169 && cardData.key < 192 ? <Card key={cardData.key} cardData={cardData} navigation={navigation}border={colorScheme === 'dark' ? true : false} /> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[192].kind} color={colorScheme === 'dark' ? cards[192].backgroundColor : "#000000"} /> : ("")} 
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 191 && cardData.key < 204 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>
                {cards.length !== 0 ?<Title title={cards[204].kind} color={colorScheme === 'dark' ? cards[204].backgroundColor : "#000000"} /> : ("")} 
                    <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
                {cards.length !== 0 ? cards.map((cardData) => (cardData.key > 203 ? <Card key={cardData.key} cardData={cardData} navigation={navigation} border={colorScheme === 'dark' ? true : false}/> : (""))) : ("")}               
                </View>				
            </ScrollView>
        );
}