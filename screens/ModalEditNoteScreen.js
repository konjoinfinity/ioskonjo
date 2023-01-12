import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { Platform, StyleSheet, Dimensions, Alert, useColorScheme, TouchableOpacity, DatePickerIOS } from 'react-native';
import { View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import { Button, Input, Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const logskey = "logs";

export default function ModalAddNoteScreen({ navigation, route }) {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [companions, setCompanions] = useState("");
  const [occasion, setOccasion] = useState("");
  const [editlog, setEditlog] = useState("");
  const [log, setLog] = useState("");
  const [logs, setLogs] = useState([])
  const [position, setPosition] = useState(JSON.stringify(route.params.number))
  const [logselected, setLogselected] = useState(route.params.loggy)
  const loginput = useRef(null);
  const [showDatePicker, setShowDatePicker] = useState(false)
  const { colors } = useTheme();
  let colorScheme = useColorScheme();
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) });
    getLogs();
    loginput.current.focus();
    return unsubscribe;
}, [navigation])

useEffect(() => {
setLog(logselected.log)
setLocation(logselected.location !== "" ? logselected.location : "")
setWeather(logselected.weather !== "" ? logselected.weather : "")
setCompanions(logselected.companions !== "" ? logselected.companions : "")
setOccasion(logselected.occasion !== "" ? logselected.occasion : "")
setDate(new Date(logselected.dateCreated) !== "" ? new Date(logselected.dateCreated) : "")
}, [])

  const getLogs = async() => {
    try {
      await AsyncStorage.getItem(logskey, (error, result) => {
        result !== null && result !== "[]" && result !== undefined
          ? setLogs(JSON.parse(result))
          : setLogs([]);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const deleteLog = async() => {
    try {
      var filtered = logs.filter(function(log) { return log.log != route.params.loggy.log}); 
      setLog("");
      setLogs(filtered);
      setEditlog("")
      await AsyncStorage.setItem(logskey, JSON.stringify(filtered), () => {navigation.navigate("TabTwo")});
    } catch (error) {
      console.log(error);

    }
  }

  const editLog = async(position) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      var editlogs = logs;
      var logDate = new Date(date).toLocaleDateString();
      editlogs[position] = {log: log, dateCreated: logDate, location: location, weather: weather, companions: companions, occasion: occasion};
      setLogs(editlogs)
      setEditlog("") 
      setLocation("") 
      setWeather("") 
      setCompanions("") 
      setOccasion("")
      await AsyncStorage.setItem(logskey, JSON.stringify(editlogs), () => {navigation.navigate("TabTwo")});
    } catch (error) {
      console.log(error);
    }
  }

  const confirmDelete = (log) => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      Alert.alert(
        "Are you sure you want to delete this snow note?",
        "Please confirm.",
        [
          {
            text: "Yes",
            onPress: () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              deleteLog(logselected);
            },
          },
          {
            text: "No",
            onPress: () => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error);
    }
  }

  const onDateChange = (selectedDate) => {
    const currentDate = selectedDate;
    setDate(new Date(currentDate));
  };

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
    <View style={styles.container}>
    {Platform.OS == "android" ?<TouchableOpacity
                style={{backgroundColor: colors.primary,  
                  shadowColor: 'rgba(200,200,200, 200)', 
                shadowOffset: { height: 2.5, width: 2.5 }, 
                shadowOpacity: 1, 
                shadowRadius: 1, 
                borderRadius: 5,
                elevation: 2, 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: Dimensions.get("window").width * 0.12,
                width: Dimensions.get("window").width * 0.35,
                margin: 5}}
                  onPress={() => {setShowDatePicker(!showDatePicker); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}}>
                  <Text style={{fontWeight: "bold"}}>
                  {date.toLocaleDateString()}
                  </Text>
                </TouchableOpacity>:("")}
    {Platform.OS == "android" && showDatePicker == true ? 
    <DateTimePicker value={new Date(date)} display={Platform.OS == "android" ? "spinner" : "default"} style={{paddingTop: 10}} onChange={(event, value) => {
    setShowDatePicker(!showDatePicker); onDateChange(value); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }}/>
     : ("")}
     {Platform.OS == "ios" ? 
    <DateTimePicker value={new Date(date)} display={Platform.OS == "android" ? "spinner" : "default"} style={{paddingTop: 10}} onChange={(event, value) => {
    setShowDatePicker(!showDatePicker); onDateChange(value); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }}/>
     : ("")}
      <Input
      ref={loginput}
      textStyle={{color: colors.text}}
      style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background }]}
      status='info'
      placeholder="Notes"
                value={log}
                onChangeText={log => setLog(log)}
                blurOnSubmit={false}
              />
              <Input
              textStyle={{color: colors.text}}
              style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background}]}
              status='info'
              placeholder="Location"
                value={location}
                onChangeText={location => setLocation(location)}
                blurOnSubmit={false}
              />
               <Input
               style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background}]}
               textStyle={{color: colors.text}}
               status='info'
               placeholder="Weather"
                value={weather}
                onChangeText={weather => setWeather(weather)}
                blurOnSubmit={false}
              />
              <Input
              style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background}]}
              status='info'
              textStyle={{color: colors.text}}
              placeholder="Companions"
                value={companions}
                onChangeText={companions => setCompanions(companions)}
                blurOnSubmit={false}
              />
               <Input
               style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background }]}
               status='info'
               placeholder="Occasion"
               textStyle={{color: colors.text}}
                value={occasion}
                onChangeText={occasion => setOccasion(occasion)}
                blurOnSubmit={true}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: 5,
                  paddingBottom: 5,
                }}>
                <TouchableOpacity
                style={{backgroundColor: colors.primary,  
                  shadowColor: 'rgba(200,200,200, 200)', 
                shadowOffset: { height: 2.5, width: 2.5 }, 
                shadowOpacity: 1, 
                shadowRadius: 1, 
                borderRadius: 5,
                elevation: 2, 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: Dimensions.get("window").width * 0.12,
                width: Dimensions.get("window").width * 0.24,
                margin: 5}}
                  onPress={() => {confirmDelete(logselected)}}>
                  <Text style={{fontWeight: "bold"}}>
                    Delete
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{backgroundColor: colors.primary,  
                  shadowColor: 'rgba(200,200,200, 200)', 
                shadowOffset: { height: 2.5, width: 2.5 }, 
                shadowOpacity: 1, 
                shadowRadius: 1, 
                borderRadius: 5,
                elevation: 2, 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: Dimensions.get("window").width * 0.12,
                width: Dimensions.get("window").width * 0.24,
                margin: 5}}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    setEditlog("");
                    navigation.navigate("TabTwo")}}>
                  <Text style={{fontWeight: "bold"}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{backgroundColor: colors.primary,  
                  shadowColor: 'rgba(200,200,200, 200)', 
                shadowOffset: { height: 2.5, width: 2.5 }, 
                shadowOpacity: 1, 
                shadowRadius: 1, 
                borderRadius: 5,
                elevation: 2, 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: Dimensions.get("window").width * 0.12,
                width: Dimensions.get("window").width * 0.24,
                margin: 5}}
                  onPress={() => editLog(position)}>
                  <Text style={{fontWeight: "bold"}}>
                    Save
                  </Text>
                </TouchableOpacity>
                </View>      
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: Dimensions.get('window').height * 0.45,
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
  input: {
    width: Dimensions.get('window').width * 0.95,
    padding: 5
  }
});
