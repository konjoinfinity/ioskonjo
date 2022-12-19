import React, { useEffect, useState } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions, ScrollView, Modal, StyleSheet, Pressable,
} from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import GestureRecognizer from 'react-native-swipe-gestures';

export function Card({navigation, cardData}){
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: cardData})} style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.33, height: Dimensions.get('window').width * 0.33, marginBottom: 1}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 5}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.03, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.03, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.028, fontWeight: "bold", padding: 5, marginTop: 10, alignSelf: "center" }}>{cardData.title}</Text>
                </TouchableOpacity>
        )
    }

export default function Home({navigation}) {
    const [cards, setCards] = useState([
        {
            key: 0,
            anum: "1",
            acronymn: "P",
            kind: 'Exquisite Snow ❄️',
            title: 'Powder (Pow)',
            desc: 'Fresh, uncompacted, light snow;  8%-11% avg. moisture across North America; Yum!',
            backgroundColor: "#5B9BD5",
        },
        {
            key: 1,
            anum: "2",
            acronymn: "CP",
            kind: 'Exquisite Snow ❄️',
            title: 'Champagne Powder®*',
            desc: 'Fresh, light very dry, loose, uncompacted; 6% average moisture - *Registered Trademark of Steamboat Ski Resort.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 2,
            anum: "3",
            acronymn: "OP",
            kind: 'Exquisite Snow ❄️',
            title: 'Optimal Powder',
            desc: 'Medium density 8%; Light for easy turns w/ “body" for floatation.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 3,
            anum: "4",
            acronymn: "UT",
            kind: 'Exquisite Snow ❄️',
            title: 'Untracted Powder',
            desc: 'Fresh, light, dry, uncompacted snow without tracks. None!',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 4,
            anum: "5",
            acronymn: "CS",
            kind: 'Exquisite Snow ❄️',
            title: 'Cold Smoke',
            desc: 'Very cold light snow, a plume behind rider appears to float in air.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 5,
            anum: "6",
            acronymn: "F",
            kind: 'Exquisite Snow ❄️',
            title: 'Fresh (Freshies)',
            desc: 'New-fallen soft snow, untracked, ready to go.',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 6,
            anum: "7",
            acronymn: "CK",
            kind: 'Exquisite Snow ❄️',
            title: 'Chokable',
            desc: 'Powder so fine and eep = hard to breath; Might need a snorkel!',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 7,
            anum: "8",
            acronymn: "HS",
            kind: 'Exquisite Snow ❄️',
            title: 'Hero Snow',
            desc: 'Snow so deep & soft you get super powers; So forgiving it will make you feel like a...',
            backgroundColor: "#5B9BD5"
        },
        {
            key: 8,
            anum: "9",
            acronymn: "SO",
            kind: 'Exquisite Snow ❄️',
            title: 'New Snow',
            desc: "Snow that has fallen since the previous day's report made by a ski resort or website.",
            backgroundColor: "#5B9BD5"
        },
        {
            key: 9,
            anum: "8",
            acronymn: "HS",
            kind: 'Good Snow ❄️',
            title: 'Groomed',
            desc: '"Farmed" snow that is rolled, smoothed, tilled, manicured into a consistent surface.',
            backgroundColor: "#6A9ED0"
        },
        {
            key: 10,
            anum: "8",
            acronymn: "HS",
            kind: 'Good Snow ❄️',
            title: 'Windbuff',
            desc: 'Fine snow that is redistributed by the wind and consolidated.',
            backgroundColor: "#6A9ED0"
        },
        {
            key: 11,
            anum: "8",
            acronymn: "HS",
            kind: 'Good Snow ❄️',
            title: 'Crud',
            desc: 'Heavily skied and cut-up powder, uneven consistency & depth; Needs grooming, now!',
            backgroundColor: "#6A9ED0"
        },
        {
            key: 12,
            anum: "8",
            acronymn: "HS",
            kind: 'Marginal Snow ❅',
            title: 'Mashed Potatoes',
            desc: 'Soft lumpy spring snow, heavy like the namesake side dish.',
            backgroundColor: "#B5C4D7"
        },
        {
            key: 13,
            anum: "8",
            acronymn: "HS",
            kind: 'Marginal Snow ❅',
            title: 'Breakable Crust',
            desc: 'A hard layer that gives way to soft snow underneath; a tough go.',
            backgroundColor: "#B5C4D7"
        },
        {
            key: 14,
            anum: "8",
            acronymn: "HS",
            kind: 'Marginal Snow ❅',
            title: 'Bulletproof',
            desc: 'Solid, frozen hard snow; Hard to set an edge = "slide-for-life".',
            backgroundColor: "#B5C4D7"
        },
        {
            key: 15,
            anum: "8",
            acronymn: "HS",
            kind: "Tricky Snow ❆",
            title: "Bulletproof",
            desc: 'Solid, frozen hard snow; Hard to set an edge = "slide-for-life".',
            backgroundColor: "#DBD4CA",
          },
          {
            key: 16,
            anum: "8",
            acronymn: "HS",
            kind: "Tricky Snow ❆",
            title: "Bulletproof",
            desc: 'Solid, frozen hard snow; Hard to set an edge = "slide-for-life".',
            backgroundColor: "#DBD4CA",
          },
          {
            key: 17,
            anum: "8",
            acronymn: "HS",
            kind: "Tricky Snow ❆",
            title: "Bulletproof",
            desc: 'Solid, frozen hard snow; Hard to set an edge = "slide-for-life".',
            backgroundColor: "#DBD4CA",
          },
          {
            key: 18,
            anum: "8",
            acronymn: "HS",
            kind: "Marginal Snow ❅",
            title: "Mashed Potatoes",
            desc: "Soft lumpy spring snow, heavy like the namesake side dish.",
            backgroundColor: "#FEF2CB",
          },
          {
            key: 19,
            anum: "8",
            acronymn: "HS",
            kind: "Tricky Snow ❆",
            title: "Breakable Crust",
            desc: "A hard layer that gives way to soft snow underneath; a tough go.",
            backgroundColor: "#FFD965",
          },
          {
            key: 20,
            anum: "8",
            acronymn: "HS",
            kind: "Tricky Snow ❆",
            title: "Bulletproof",
            desc: 'Solid, frozen hard snow; Hard to set an edge = "slide-for-life".',
            backgroundColor: "#FEF2CB",
          }
    ]);

    useEffect(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      }, [])

        return(
            <ScrollView style={{ flex: 1 }}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-around"}}>
                {cards.length !== 0 ? cards.map((cardData) => (<Card key={cardData.key} cardData={cardData} navigation={navigation} /> )) : ("")}               
                </View>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.8,
      backgroundColor: "#1c1c1e",
      borderRadius: 5,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: "white",
      fontSize: Dimensions.get('window').height * 0.08
    }
  });