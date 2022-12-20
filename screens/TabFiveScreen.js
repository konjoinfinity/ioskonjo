import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from "@react-native-material/core";
import { Text, View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import snowData from '../constants/snowData';

let textInput;
let cardSearch = "";

export default function TabFiveScreen({ navigation }) {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    setCards(snowData)
    const unsubscribe = navigation.addListener('focus', () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      textInput.focus();
    });
    return unsubscribe;
  }, [navigation])

  const handleChange = (search) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    search = search.trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").toLowerCase()
    setSearch({ search }); 
    cardSearch = cards.filter(function (card) { return card.title.toLowerCase().match(search) })
}

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <ScrollView contentContainerStyle={{paddingLeft: 12, height: Dimensions.get('window').height * 0.3, width: Dimensions.get('window').width * 1, alignItems: "center", justifyContent:"flex-start", display: "flex", flexDirection: "row", flexWrap: "wrap"}}>{search.length !== 0 && cardSearch.length < 20 ? cardSearch.map((card) => 
      (<TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: card})}style={{backgroundColor: card.backgroundColor, width: Dimensions.get('window').width * 0.23, height: Dimensions.get('window').width * 0.18, margin: 0.5}} key={card.key}><Text style={{color: "black", fontSize: Dimensions.get('window').width * 0.035,  padding: 10, }}>{card.title}</Text></TouchableOpacity>)) : 
      ("")}</ScrollView>
      <TextInput textAlign="center" variant="outlined" color="#5B9BD5" textAlignVertical="center" style={{ width: Dimensions.get('window').width * 0.95,  alignSelf: "center", marginBottom: Dimensions.get('window').width * 0.6  }} placeholder='❅❆❄ Which snow? ❅❆❄' name="search" id="search" onChangeText={handleChange} ref={(input) => { textInput = input; }}/>
      {/* Use a light status bar on iOS to account for the black space above the modal */}

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '90%'
  },
});
