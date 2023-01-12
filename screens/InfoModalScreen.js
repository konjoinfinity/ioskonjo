import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import { ScrollView } from 'react-native-gesture-handler';

export function Card({title, color, copy}){
  return (
      <View style={{backgroundColor: color, width: Platform.OS == "ios" ? Dimensions.get('window').width * 0.35 : Dimensions.get('window').width * 0.25, height: Platform.OS == "ios" ? Dimensions.get('window').width * 0.35 : Dimensions.get('window').width * 0.25, margin: 0.5, opacity: 0.9, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row"}}>
       <Text style={{ fontSize: Platform.OS == "ios" ? Dimensions.get('window').height * 0.03 : Dimensions.get('window').height * 0.02, fontWeight: "bold", alignSelf: "center", color: "#000" }}>{title}</Text>
       <Text style={{ fontSize: Dimensions.get('window').height * 0.018, alignSelf: "center", color: "#000"  }}>{copy}</Text>
      </View>
  )
}

export default function InfoModalScreen() {
  
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
      <Text style={{ fontSize: Dimensions.get('window').height * 0.04, alignSelf: "center", marginBottom: 10 }}>PTOS</Text>
      <View style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection: "row", marginBottom: 10}}>
      <Text style={{ fontSize: Dimensions.get('window').height * 0.04 }}>Periodic Table of Snow</Text>
      <Text style={{ fontSize: Dimensions.get('window').height * 0.015}}>©</Text>
      </View>
      <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent: "center"}}>
      <Card title={"Periodic"} color={"#5B9BD5"} />
      <Card title={"Table"} color={"#DEEAF6"} />
      <Card title={"of"} color={"#FFD965"} /> 
      <Card title={"Snow"} copy={"©"} color={"#ECECEC"} />
      </View>
             <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center"}}>
              A companion app to the Periodic Table of Snow©. Created by RS Design, PTOS is the digital version of the Periodic Table of Snow. 
              Carry it in your pocket while you ski or snowboard. Write notes about snow conditions and winter weather you come across. 
              Learn the types of snow, classifications, and descriptions.</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </ScrollView>
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
    marginVertical: 20,
    width: '80%',
  },
});
