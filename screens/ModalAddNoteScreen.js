import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { Platform, StyleSheet, Dimensions, useColorScheme, TouchableOpacity, Alert } from 'react-native';
import { View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import { Input, Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const logskey = "logs";

export default function ModalAddNoteScreen({ navigation }) {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [weather, setWeather] = useState("");
  const [companions, setCompanions] = useState("");
  const [occasion, setOccasion] = useState("");
  const [log, setLog] = useState("");
  const [logs, setLogs] = useState([])
  const loginput = useRef(null);
  const { colors } = useTheme();
  const [showDatePicker, setShowDatePicker] = useState(false)
  let colorScheme = useColorScheme();
  const [parentWidth, setParentWidth] = useState(0);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    });
    getLogs();
    loginput.current.focus();
    return unsubscribe;
}, [navigation])

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

  const addLog = async() => {
    try {
      if (log !== "") {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        var newLog = logs;
        newLog.unshift({ log: log, dateCreated: new Date(date).toLocaleDateString(), location: location, weather: weather, companions: companions, occasion: occasion });
        setLog("")
        setLocation("")
        setWeather("")
        setCompanions("")
        setOccasion("")
        setLogs(newLog)
        navigation.navigate("TabThree")
        await AsyncStorage.setItem(logskey, JSON.stringify(newLog));
      } else {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        Alert.alert(
          "Please enter some text.",
          "",
          [{
              text: "Ok",
              onPress: () =>
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
            }, 
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onDateChange = (selectedDate) => {
    const currentDate = selectedDate;
    setDate(new Date(currentDate));
  };

  return (
    <ScrollView keyboardShouldPersistTaps='handled' onLayout={({ nativeEvent }) => setParentWidth(nativeEvent.layout.width)}>
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
    <DateTimePicker value={new Date(date)} display='calendar' style={{paddingTop: 10}} onChange={(event, value) => {
    setShowDatePicker(!showDatePicker); onDateChange(value); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }}/>
     : ("")}
     {Platform.OS == "ios" ? 
    <DateTimePicker value={new Date(date)} display='default' style={{paddingTop: 10}} onChange={(event, value) => {
    setShowDatePicker(!showDatePicker); onDateChange(value); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }}/>
     : ("")}
      <Input
      ref={loginput}
      style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background, width: parentWidth * 0.95}]}
      status='info'
      textStyle={{color: colors.text}}
                placeholder="Notes"
                value={log}
                onChangeText={log => setLog(log)}
                blurOnSubmit={false}
              />
              <Input
              textStyle={{color: colors.text}}
              style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background, width: parentWidth * 0.95}]}
              status='info'
                placeholder="Location"
                value={location}
                onChangeText={location => setLocation(location)}
                blurOnSubmit={false}
              />
               <Input
               textStyle={{color: colors.text}}
               style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background, width: parentWidth * 0.95}]}
               status='info'
                placeholder="Weather"
                value={weather}
                onChangeText={weather => setWeather(weather)}
                blurOnSubmit={false}
              />
              <Input
              textStyle={{color: colors.text}}
              style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background, width: parentWidth * 0.95}]}
              status='info'
                placeholder="Companions"
                value={companions}
                onChangeText={companions => setCompanions(companions)}
                blurOnSubmit={false}
              />
               <Input
               textStyle={{color: colors.text}}
               style={[styles.input, {backgroundColor: colorScheme === "dark" ? colors.border : colors.background, width: parentWidth * 0.95}]}
               status='info'
                placeholder="Occasion"
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
                }}
              >
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
                padding: 15,
                margin: 5}}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    setLog("");
                    navigation.navigate("TabThree")
                  }}>
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
                margin: 5, padding: 15}}
                  onPress={() => addLog()}>
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
    padding: 5,
  }
});
