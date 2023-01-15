import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Dimensions, useColorScheme, Image, Animated, Easing, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import * as Haptics from "expo-haptics";
import { Card, Text } from '@ui-kitten/components';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

AnimatableView = Animatable.createAnimatableComponent(View);
const logskey = "logs";

export function PCard({title, color}){
  return (
      <View style={{backgroundColor: color, width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').width * 0.4, margin: 0.5, opacity: 0.9}}>
       <Text style={{ fontSize: Dimensions.get('window').height * 0.035, fontWeight: "bold", padding: 5, marginTop: 50, alignSelf: "center", color: "#000" }}>{title}</Text>
      </View>
  )
}

export default function TabThreeScreen({ navigation }) {
const [logs, setLogs] = useState([])
let colorScheme = useColorScheme();
const { colors } = useTheme();
var spinValue = new Animated.Value(0);


Animated.loop(
  Animated.timing(
    spinValue,
    {
     toValue: 1,
     duration: 20000,
     easing: Easing.linear,
     useNativeDriver: true
    }
  )
 ).start();
const spin = spinValue.interpolate({
inputRange: [0, 1],
outputRange: ['0deg', '360deg']
})

useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getLogs();
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      });
      return unsubscribe;
  }, [navigation])

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
        setLogs([]);
      });
      return unsubscribe;
  }, [navigation])


  const getLogs = async() => {
    try {
      await AsyncStorage.getItem(logskey, (error, result) => {
        result !== null && result !== "[]"
          ? setLogs(JSON.parse(result))
          : setLogs([]);
      })
    } catch (error) {
      console.log(error);
    }
  }

return (
    <View>
        <View>
        <View style={{height: Dimensions.get("window").height > 1000 ? Dimensions.get("window").height * 0.89 : Dimensions.get("window").height * 0.79}}>
        <TouchableOpacity
              style={{position: 'absolute',
              bottom: 20,
              right: 20,
              zIndex: 2,
              shadowColor: 'rgba(0,0,0,.4)', 
              shadowOffset: { height: 2.5, width: 2.5 }, 
              shadowOpacity: 1, 
              shadowRadius: 1, 
              backgroundColor: "white",
              borderRadius: 50,
              elevation: 8, 
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'}}
              appearance="filled"
                onPress={() =>
                navigation.navigate("ModalAddNote")}>
                <MIcon color={colors.primary} style={{margin: -6}} name="add-circle" size={70} />
              </TouchableOpacity>
        <ScrollView>
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                padding: 5,
                marginBottom: 5
              }}>
            <Text style={{ color: colors.text, fontSize: 28, padding: 10 }}>
                Snow Notes
              </Text>
              </View>
              {logs && logs.length > 0 ? (logs.map((log, id) => {
        return (
          <AnimatableView
          key={id}
            animation="bounceInDown"
            delay={id * 200}
            duration={2000}>
          <View>
            <Card style={{backgroundColor: colorScheme === "dark" ? colors.border : colors.card, borderColor: colors.background}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems:"flex-start", width: Dimensions.get("window").width * 0.65,  }}>
            <View style={{display: "flex", alignItems: "flex-start", justifyContent:"flex-start", flexDirection: "row"}}>
            <Text style={{color: colors.text, fontWeight: "bold", paddingRight: 5}}>
            Date:
              </Text>
              <Text style={{color: colors.text, paddingBottom: 2}}>
              {log.dateCreated}
              </Text>
              </View>
            <View style={{display: "flex", alignItems: "flex-start", justifyContent:"flex-start", flexDirection: "row"}}>
            <Text style={{color: colors.text, fontWeight: "bold", paddingRight: 5}}>
                Note:
              </Text>
             <Text style={{color: colors.text, paddingBottom: 2}}>
                {log.log}
              </Text>
              </View>
              <View style={{display: "flex", alignItems: "flex-start", justifyContent:"flex-start", flexDirection: "row"}}>
            <Text style={{color: colors.text, fontWeight: "bold", paddingRight: 5}}>
                Location: 
              </Text>
              <Text style={{color: colors.text, paddingBottom: 2}}>
              {log.location}
              </Text>
              </View>
              <View style={{display: "flex", alignItems: "flex-start", justifyContent:"flex-start", flexDirection: "row"}}>
            <Text style={{color: colors.text, fontWeight: "bold", paddingRight: 5}}>
                Weather:
              </Text>
              <Text style={{color: colors.text, paddingBottom: 2}}>
              {log.weather}
              </Text>
              </View>
              <View style={{display: "flex", alignItems: "flex-start", justifyContent:"flex-start", flexDirection: "row"}}>
            <Text style={{color: colors.text, fontWeight: "bold", paddingRight: 5}}>
            Companions:
              </Text>
              <Text style={{color: colors.text, paddingBottom: 2}}>
              {log.companions}
              </Text>
              </View>
              <View style={{display: "flex", alignItems: "flex-start", justifyContent:"flex-start", flexDirection: "row"}}>
            <Text style={{color: colors.text, fontWeight: "bold", paddingRight: 5}}>
            Occasion:
              </Text>
              <Text style={{color: colors.text, paddingBottom: 2}}>
              {log.occasion}
              </Text>
              </View>
            </View>
            <TouchableOpacity
            style={{backgroundColor: colors.primary,  
              shadowColor: 'rgba(0,0,0, .4)', 
            shadowOffset: { height: 1, width: 1 }, 
            shadowOpacity: 1, 
            shadowRadius: 1, 
            backgroundColor: colors.primary,
            borderRadius: 5,
            elevation: 2, 
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: Dimensions.get("window").width * 0.12,
            width: Dimensions.get("window").width * 0.12}}
              onPress={() => {
                navigation.navigate("ModalEditNote", {number: id, loggy: log})}}>
              <Icon
              color="white"
                name="playlist-edit" size={40} style={{paddingLeft: 5}} />
            </TouchableOpacity>
            </View>
            </Card>
          </View>
          </AnimatableView>
        )
      })) : (<View><View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent: "center", height: Dimensions.get("window").height * 0.5 }}>
        <Animated.Image
  style={{transform: [{rotate: spin}], height: Dimensions.get("window").height * 0.2, width:Dimensions.get("window").height * 0.2, marginTop: Dimensions.get("window").height * 0.25,  
  shadowColor: 'rgba(0,0,0, .4)', 
shadowOffset: { height: 2, width: 2 }, 
shadowOpacity: 1, 
shadowRadius: 1, 
borderRadius: 5,
elevation: 2 }}
  source={require('../assets/images/snowlogo.png')} />
      </View>
        <Text style={{alignSelf: "center", padding:5, color: colors.text}}>Which snow did you find?</Text>
        <Text style={{alignSelf: "center", padding:5, color: colors.text}}>Tap + to add a note.</Text>
      </View>)}
      </ScrollView>
      </View>
        </View>
      </View>
    )
}
