import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import * as Haptics from 'expo-haptics';

export default function ModalScreen({ route }) {
  const {cardData} = route.params;
  
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{backgroundColor: cardData.backgroundColor, width: Dimensions.get('window').width * 0.85, height: Dimensions.get('window').height * 0.8, marginBottom: 1}}>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"space-between", padding: 10, backgroundColor: cardData.backgroundColor}}>
             <Text style={{fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold"}}>{cardData.anum}</Text> 
             <Text style={{fontSize: Dimensions.get('window').height * 0.04, fontWeight: "bold"}}>{cardData.acronymn}</Text>
             </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.05, fontWeight: "bold", padding: 5, marginTop: 10, alignSelf: "center" }}>{cardData.title}</Text>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.04, padding: 10, margin: 10, alignSelf: "center" }}>{cardData.desc}</Text>
                </View>
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
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
});
