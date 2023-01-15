import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storagekey = "storage";

export default function ModalScreen({ route }) {
  const [found, setFound] = useState(false);
  const [db, setDb] = useState([]);
  const [snowDate, setSnowDate] = useState("");
  const {cardData} = route.params;
  
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    getDb();
  }, [])

  const getDb = async() => {
    try {
      await AsyncStorage.getItem(storagekey, (error, result) => {
        result !== null && result !== "[]" && result !== undefined ? 
        setDb(JSON.parse(result)) : console.log(error)
        const i = JSON.parse(result).findIndex(x => x.key === cardData.key)
        if(JSON.parse(result)[i].found == true) {
          setFound(true)
          setSnowDate(JSON.parse(result)[i].dateFound)
        } else {
          setFound(false)
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const foundThis = async() => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      setFound(!found)
      var newArr = db;
      const i = newArr.findIndex(x => x.key === cardData.key)
      newArr[i].found = !newArr[i].found
      newArr[i].dateFound = newArr[i].dateFound == "" ? new Date() : ""
      setSnowDate(snowDate == "" ? new Date() : "")
      setDb(newArr)
      await AsyncStorage.setItem(storagekey, JSON.stringify(newArr));
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 5, margin: 5, alignSelf: "center" }}>{cardData.kind}</Text>
      <View style={{backgroundColor: cardData.backgroundColor, maxWidth: Dimensions.get('window').width * 0.85, height: Dimensions.get('window').height * 0.7}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 10, backgroundColor: cardData.backgroundColor}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold", color: "black"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold", color: "black"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.045, fontWeight: "bold", padding: 10, marginTop: 12, alignSelf: "center", color: "black", textAlign: "center" }}>{cardData.title}</Text>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center", color: "black"}}>{cardData.desc}</Text>
             <TouchableOpacity style={{alignSelf: "center", maxWidth: Dimensions.get('window').width * 0.8, marginTop: Dimensions.get('window').height * 0.025,
             backgroundColor: found == true ? "#94C68A" : "#fff",
                  shadowColor: 'rgba(200,200,200, 200)', 
                shadowOffset: { height: 2.5, width: 2.5 }, 
                shadowOpacity: 1, 
                shadowRadius: 1, 
                borderRadius: 5,
                elevation: 2, 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                }} onPress={() => foundThis(cardData.title)}><Text style={{textAlign: "center", color: "#000", fontWeight:"600", fontSize: Dimensions.get('window').height * 0.02, padding: 22 }}>{found == true ? `You Found ${cardData.title}!`:`Found ${cardData.title}?`}</Text></TouchableOpacity> 
                {found == true ? <Text style={{ fontSize: Dimensions.get('window').height * 0.02, padding: 10, margin: 10, alignSelf: "center", color: "black"}}>Date Found: {new Date(snowDate).toLocaleDateString()}</Text> : ("")}
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
