import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import { Button, Input, Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ModalEditNoteScreen({ route, navigation }) {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [companions, setCompanions] = useState("");
  const [occasion, setOccasion] = useState("");
  const [notes, setNotes] = useState("");
  const {noteData} = route.params;
  let keys = []
  
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }, [])


  const setNoteData = async() => {
          keys = await AsyncStorage.getAllKeys()
        console.log(keys)
        try {
    await AsyncStorage.setItem(`key${keys.length + 1}`,
      JSON.stringify({
          date: noteData.date,
          location: location,
          weather: weather,
          companions: companions,
          occasion: occasion,
          notes: notes
      })
    )
    console.log("written")
  } catch (error) {
      console.log(error)
  }
  } 

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{marginBottom: 20, marginTop: 10}} category='h6'>Date: {noteData}</Text>
      <Input
          style={styles.input}
          status='info'
          placeholder='Location'
          value={location}
          onChangeText={nextValue => setLocation(nextValue)}
        />
        <Input
          style={styles.input}
          status='info'
          placeholder='Weather'
          value={weather}
          onChangeText={nextValue => setWeather(nextValue)}
        />
        <Input
          style={styles.input}
          status='info'
          placeholder='Companions'
          value={companions}
          onChangeText={nextValue => setCompanions(nextValue)}
        />
        <Input
          style={styles.input}
          status='info'
          placeholder='Occasion'
          value={occasion}
          onChangeText={nextValue => setOccasion(nextValue)}
        />
        <Input
          style={styles.input}
          status='info'
          placeholder='Notes'
          value={notes}
          onChangeText={nextValue => setNotes(nextValue)}
        />
      <Button onPress={() => {setNoteData(), navigation.navigate("TabFour")}} style={{marginTop: 40}} appearance="filled"><Text>Add New Note</Text></Button>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
