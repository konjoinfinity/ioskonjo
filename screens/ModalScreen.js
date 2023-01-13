import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';

const foundkey = "found";

export default function ModalScreen({ route }) {
  const [foundSnow, setFoundSnow] = useState("#fff");
  const [found, setFound] = useState([]);
  const {cardData} = route.params;
  
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    getFound();
    // var filtered = found.filter(function(snow) { return snow.snow != route.params.loggy.log}); 
  }, [])

  const getFound = async() => {
      // try {
      //   await AsyncStorage.removeItem(foundkey)
      // } catch(e) {
      // }
      // console.log('Done.')
    try {
      await AsyncStorage.getItem(foundkey, (error, result) => {
        result !== null && result !== "[]" && result !== undefined ? 
        setFound(JSON.parse(result)) : setFound([]);
        console.log("Get")
        console.log(result)
      });
      console.log(found)
    } catch (error) {
      console.log(error);
    }
  }

  const foundThis = async(snowtype) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      foundSnow == "#fff" ? setFoundSnow("#94C68A") : setFoundSnow("#fff")
      var newFound = found;
      console.log(found)
      if(foundSnow == "#fff") {
        newFound.unshift({ snowType: snowtype, dateFound: new Date() })
        console.log(newFound)
        setFound(newFound)
        console.log(found)
        await AsyncStorage.setItem(foundkey, JSON.stringify(newFound));
        console.log(found)
      } else {
        newFound.shift();
        console.log(newFound)
        setFound(newFound)
        console.log(found)
        await AsyncStorage.setItem(foundkey, JSON.stringify(newFound));
        console.log(found)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 5, margin: 5, alignSelf: "center" }}>{cardData.kind}</Text>
      <View style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.9, height: Dimensions.get('window').height * 0.7}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 10, backgroundColor: cardData.backgroundColor}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold", color: "black"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold", color: "black"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.045, fontWeight: "bold", padding: 10, marginTop: 12, alignSelf: "center", color: "black", textAlign: "center" }}>{cardData.title}</Text>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center", color: "black"}}>{cardData.desc}</Text>
             <TouchableOpacity style={{alignSelf: "center", maxWidth: Dimensions.get('window').width * 0.8, marginTop: Dimensions.get('window').height * 0.025,
             backgroundColor: foundSnow,
                  shadowColor: 'rgba(200,200,200, 200)', 
                shadowOffset: { height: 2.5, width: 2.5 }, 
                shadowOpacity: 1, 
                shadowRadius: 1, 
                borderRadius: 5,
                elevation: 2, 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                }} onPress={() => foundThis(cardData.title)}><Text style={{textAlign: "center", color: "#000", fontWeight:"600", fontSize: Dimensions.get('window').height * 0.02, padding: 22 }}>{foundSnow == "#fff" ? `Found ${cardData.title}?`: `You Found ${cardData.title}!`}</Text></TouchableOpacity> 
                {/* <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center", color: "black"}}>{cardData.desc}</Text> */}
                </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  separator: {
    marginVertical: 10,
    width: '80%',
  },
});
