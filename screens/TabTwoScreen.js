import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Dimensions, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import * as Haptics from "expo-haptics";
import { Card, Text } from '@ui-kitten/components';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

AnimatableView = Animatable.createAnimatableComponent(View);
const logskey = "logs";

export default function TabTwoScreen({ navigation }) {
const [logs, setLogs] = useState([])
let colorScheme = useColorScheme();
var eachlog;
const { colors } = useTheme();

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
      });
    } catch (error) {
      console.log(error);
    }
  }

return (
    <View>
        <View>
        <TouchableOpacity
              style={{position: 'absolute',
              bottom: 20,
              right: 20,
              zIndex: 2,
              shadowColor: 'rgba(0,0,0, .4)', // IOS
              shadowOffset: { height: 2.5, width: 2.5 }, // IOS
              shadowOpacity: 1, // IOS
              shadowRadius: 1, //IOS
              backgroundColor: "white",
              borderRadius: 50,
              elevation: 2, // Android
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
            <Text style={{ color: colors.primary, fontSize: 28, padding: 10 }}>
                Snow Notes
              </Text>
              </View>
              {logs && logs.length > 0 ? (eachlog = logs.map((log, id) => {
        return (
          <AnimatableView
          key={id}
            animation="bounceInDown"
            delay={id * 200}
            duration={2000}>
          <View>
            <Card style={{backgroundColor: colorScheme === "dark" ? colors.border : colors.card, borderColor: colors.background}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column", justifyContent: "center", alignItems:"left", width: Dimensions.get("window").width * 0.65 }}>
              <Text style={{color: colors.text}}>
                {log.log}
              </Text>
              <Text style={{color: colors.text}}>
                Location: {log.location}
              </Text>
              <Text style={{color: colors.text}}>
                Weather: {log.weather}
              </Text>
              <Text style={{color: colors.text}}>
                Companions: {log.companions}
              </Text>
              <Text style={{color: colors.text}}>
                Occasion: {log.occasion}
              </Text>
              <Text style={{color: colors.text}}>
                {log.dateCreated}
              </Text>
            </View>
            <TouchableOpacity
            style={{backgroundColor: colors.primary,  
              shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: colors.primary,
            borderRadius: 5,
            elevation: 2, // Android
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
      })) : ("")}
      </ScrollView>
        </View>
      </View>
    )
}
