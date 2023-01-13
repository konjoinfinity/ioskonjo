import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Dimensions, Button, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ModalScreen({ route }) {
  const [foundSnow, setFoundSnow] = useState("#fff");
  const { colors } = useTheme();
  const {cardData} = route.params;
  
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }, [])

  const found = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    foundSnow == "#fff" ? setFoundSnow("#94C68A") : setFoundSnow("#fff")
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
             {Platform.OS == "ios" ? <TouchableOpacity style={{alignSelf: "center", width: Dimensions.get('window').width * 0.6, marginTop: Dimensions.get('window').height * 0.025, height: Dimensions.get('window').height * 0.09,
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
                }} onPress={() => found()}><Text style={{textAlign: "center", color: "#000" }}>{`Found ${cardData.title}?`}</Text></TouchableOpacity> :
                <Pressable style={{alignSelf: "center", width: Dimensions.get('window').width * 0.6, marginTop: Dimensions.get('window').height * 0.025, height: Dimensions.get('window').height * 0.09,
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
                }} onPress={() => found()}><Text style={{textAlign: "center", color: "#000" }}>{`Found ${cardData.title}?`}</Text></Pressable>}
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
