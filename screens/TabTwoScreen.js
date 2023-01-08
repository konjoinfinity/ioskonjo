import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import * as Haptics from "expo-haptics";
import { Card, Text, Button } from '@ui-kitten/components';
import * as Animatable from 'react-native-animatable';

AnimatableView = Animatable.createAnimatableComponent(View);

const logskey = "logs";
var eachlog;

export default function TabTwoScreen({ navigation }) {
const [logs, setLogs] = useState([])


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
        <ScrollView>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
                marginBottom: 5
              }}>
            <Text style={{ color: "white", fontSize: 28, padding: 10 }}>
                Snow Notes
              </Text>
              <TouchableOpacity
              appearance="filled"
                onPress={() =>
                navigation.navigate("ModalAddNote")}>
                <MIcon color={"white"} name="add-circle" size={50} />
              </TouchableOpacity>
              </View>
              {logs && logs.length > 0 ? (eachlog = logs.map((log, id) => {
        return (
          <AnimatableView
          key={id}
            animation="bounceInUp"
            delay={id * 100}
            duration={2000}>
          <View>
            <Card status='info'>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column", justifyContent: "center", alignItems:"left", width: Dimensions.get("window").width * 0.6 }}>
              <Text>
                {log.log}
              </Text>
              <Text>
                Location: {log.location}
              </Text>
              <Text>
                Weather: {log.weather}
              </Text>
              <Text>
                Companions: {log.companions}
              </Text>
              <Text>
                Occasion: {log.occasion}
              </Text>
              <Text>
                {log.dateCreated}
              </Text>
            </View>
            <Button
            status='info'
            style={{height: Dimensions.get("window").height * 0.08}}
            size="giant"
            appearance="filled"
              onPress={() => {
                navigation.navigate("ModalEditNote", {number: id, loggy: log})}}>
              <Icon
              color={"white"}
                name="playlist-edit" />
            </Button>
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
