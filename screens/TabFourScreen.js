import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Text, View, useColorScheme } from 'react-native';
import { TextInput } from "@react-native-material/core";
import * as Haptics from 'expo-haptics';
import snowData from '../constants/snowData';
import { useNavigation } from '@react-navigation/native';
import snowWeather from '../constants/snowWeather';
import * as Animatable from 'react-native-animatable';
import { Input } from '@ui-kitten/components';
import { useTheme } from '@react-navigation/native';

AnimatableView = Animatable.createAnimatableComponent(View);
let textInput;
let cardSearch = "";

export function Card({title, color}){
  return (
      <View style={{backgroundColor: color, width: Platform.OS == "ios" ? Dimensions.get('window').width * 0.3 : Dimensions.get('window').width * 0.25, height: Platform.OS == "ios" ? Dimensions.get('window').width * 0.3 : Dimensions.get('window').width * 0.25, margin: 0.5, opacity: 0.9}}>
       <Text style={{ fontSize: Platform.OS == "ios" ? Dimensions.get('window').height * 0.03 : Dimensions.get('window').height * 0.02, fontWeight: "bold", padding: 5, marginTop: Platform.OS == "ios" ? Dimensions.get('window').width * 0.1 : Dimensions.get('window').width * 0.08, alignSelf: "center" }}>{title}</Text>
      </View>
  )
}

export default function TabFourScreen() {
  const navigation = useNavigation();
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("")
  const { colors } = useTheme();
  let colorScheme = useColorScheme();
  
  useEffect(() => {
    let snowdat = [...snowData, ...snowWeather];
    setCards(snowdat)
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
      <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ height: Dimensions.get('window').height * 0.3, width: Dimensions.get('window').width * 1, alignItems: "center", justifyContent:"center", display: "flex", flexDirection: "row", flexWrap: "wrap"}}>{search.length !== 0 && cardSearch.length < 20 ? cardSearch.map((card) => 
      (<TouchableOpacity onPress={() => navigation.navigate('Modal', {cardData: card})}style={{backgroundColor: card.backgroundColor, width: Dimensions.get('window').width * 0.23, height: Dimensions.get('window').width * 0.18, margin: 0.5}} key={card.key}><Text style={{color: "black", fontSize: Dimensions.get('window').width * 0.03,  padding: 10, }}>{card.title}</Text></TouchableOpacity>)) : 
      (<View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent: "center"}}>
      <AnimatableView animation="bounceInDown" delay={500} duration={2000}><Card title={"Periodic"} color={"#5B9BD5"} /></AnimatableView>      
      <AnimatableView animation="bounceInDown" delay={750} duration={2000}><Card title={"Table"} color={"#DEEAF6"} /></AnimatableView>  
      <AnimatableView animation="bounceInDown" delay={1000} duration={2000}><Card title={"of"} color={"#FFD965"} /></AnimatableView>  
      <AnimatableView animation="bounceInDown" delay={1250} duration={2000}><Card title={"Snow©"} color={"#ECECEC"} /></AnimatableView>          
      </View>)}</ScrollView>
      <Input autoFocus={true} textAlign="center" variant="outlined" textAlignVertical="center" textStyle={{color: colors.text}}
      style={{ width: Dimensions.get('window').width * 0.95,  alignSelf: "center", marginBottom: Platform.OS == "ios" ? Dimensions.get('window').width * 0.7 : 0, backgroundColor: colorScheme === "dark" ? colors.border : colors.background}} 
      placeholder='❅❆❄ Which snow? ❅❆❄' name="search" id="search" onChangeText={handleChange} ref={(input) => { textInput = input; }}/>
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
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
