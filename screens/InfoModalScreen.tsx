import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, StyleSheet, Dimensions, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

export function Card({title, color, copy}){
  return (
      <View style={{backgroundColor: color, width: Platform.OS == "ios" ? Dimensions.get('window').width * 0.35 : Dimensions.get('window').width * 0.25, height: Platform.OS == "ios" ? Dimensions.get('window').width * 0.35 : Dimensions.get('window').width * 0.25, margin: 0.5, opacity: 0.9, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row"}}>
       <Text style={{ fontSize: Platform.OS == "ios" ? Dimensions.get('window').height * 0.03 : Dimensions.get('window').height * 0.02, fontWeight: "bold", alignSelf: "center", color: "#000" }}>{title}</Text>
       <Text style={{ fontSize: Dimensions.get('window').height * 0.018, alignSelf: "center", color: "#000"  }}>{copy}</Text>
      </View>
  )
}

export default function InfoModalScreen() {
  const { colors } = useTheme();
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }, [])

  return (
    <View style={[styles.container,{backgroundColor: colors.background}]}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
      <Text style={{ fontSize: Dimensions.get('window').height * 0.04, alignSelf: "center", marginBottom: 10 }}>PTOS</Text>
      <View style={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection: "row", marginBottom: 20, backgroundColor: colors.background}}>
      <Text style={{ fontSize: Dimensions.get('window').height * 0.04 }}>Periodic Table of Snow</Text>
      <Text style={{ fontSize: Dimensions.get('window').height * 0.015}}>©</Text>
      </View>
      <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent: "center", marginBottom: 20, backgroundColor: colors.background}}>
      <Card title={"Periodic"} copy={""} color={"#5B9BD5"} />
      <Card title={"Table"} copy={""}color={"#DEEAF6"} />
      <Card title={"of"} copy={""} color={"#FFD965"} /> 
      <Card title={"Snow"} copy={"©"} color={"#ECECEC"} />
      </View>
        <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center"}}>
              A companion app to the Periodic Table of Snow. Created by RS Design, PTOS is the digital version of the Periodic Table of Snow. 
              Carry it in your pocket while you ski or snowboard. Write notes about snow conditions and winter weather you come across. 
              Learn the types of snow, classifications, and descriptions.</Text>
              <Text style={{ fontSize: Dimensions.get('window').height * 0.04, alignSelf: "center", margin: 10, padding: 10 }}>About RS Design</Text>
              <Text style={{ fontSize: Dimensions.get('window').height * 0.03, alignSelf: "center", margin: 10, padding: 10, fontStyle: "italic" }}>What I Did During the Covid-19 Shelter-in-Place</Text>
              <Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center"}}>
It was the best of times; it was the worst of times. The spring of 2020 was confusing, free-wheeling, frightening, eye-opening, lonely and boring. And it also presented a singular opportunity to do something “new and different” with all this time on my hands, living by myself, shut inside a tiny condo high in the Colorado mountains.
</Text>
<Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center"}}>
But first, I started out doing typical things, probably like so many others in the ski industry. I watched ski and snowboard movies, read and researched about ski trips I want to take in the future, read a ski book or two, and then watched even more Warren Miller movies.</Text>
<Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center"}}>
Then, out of nowhere, a brainstorm hit me regarding an idea that had been percolating in my mind for quite some time. I had finally come up with a catchy way to display all the names for types of snow that I had been collecting over the years. A flash of insight, a bolt of “clever-osity”, a divine inspiration. Whatever it was that hit me, I now had something to run-with.</Text>
<Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center"}}>
You know what I mean when I'm talking about the different names for “types of snow”. All those whacky names we give the various snow conditions we try to ski in each season: Powder, Cold Smoke, Free Refills, Granular, Hardpack, Bulletproof, Wind Crust, Death Cookies, Pow Pow, and on and on. Since the names spanned the full spectrum from exquisite snow to merely good snow, and from marginal snow to tricky snow and more, I needed a versatile way to organize all the types. 
</Text>
<Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center"}}>
Grouping them by overall quality and desirability seemed to be best approach. And what better way to accomplish this, than to use a universally recognized organizational convention: the Periodic Table of Elements. Yes, that famous chart of chemicals and metals and so much more! Okay, truth be told, my version is a hack version. And at best, it's a fun adaptation (“irreverent, stupid in places, but clever” is how my wife describes it) of this exceptional chart of scientific facts and knowledge.</Text>
<Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center"}}>  
So, here it is: the “Periodic Table of Snow”, in all its laughable glory. I hope you have a few chuckles as you read it, and maybe use some of the terms in the future. Although it took many hours of research and preparation, as you might imagine, I had a blast developing it. But what else was I going to do during a pandemic shelter-in-place? I had plenty of hours to fill. Time was something I had plenty of, in the spring of 2020.</Text>
      <Image source={require('../assets/images/rs.jpeg')} style={{width: Dimensions.get('window').width * 0.6, height: Dimensions.get('window').height * 0.4, alignSelf: "center"}} />
<Text style={{ fontSize: Dimensions.get('window').height * 0.03, padding: 10, margin: 10, alignSelf: "center", fontStyle: "italic"}}>
Russ Scholl is a PSIA-certified Level II alpine instructor, teaching primarily kids and families at Breckenridge Ski School, Colorado. He’s a 39-year veteran ski instructor, teaching in New England, Arizona, the mid-Atlantic region and the Colorado Rockies.</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
