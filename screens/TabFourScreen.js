import React, { useEffect, useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { Calendar, Text, Button, Card } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
    const [visible, setVisible] = React.useState(false)
    const [date, setDate] = React.useState(new Date());
    const [note, setNote] = useState([])
    let keys = []

    const now = new Date();
    const threeMos = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 90);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
           
          });
          dataFunc();
          return unsubscribe;
          
      }, [navigation])
      
      const dataFunc = async() => {
        keys = await AsyncStorage.getAllKeys()
        console.log(keys)
        try {   
            const session = await AsyncStorage.getItem("key1");
            if (session !== undefined) {
                console.log(session)
                setNote(JSON.parse(session))
            }
        } catch (error) {
            console.log(error)
        }
      }
        return(
            <ScrollView style={{ flex: 1 }}>
    <View style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
               <Calendar
      min={threeMos}
      max={now}
        date={date}
        onSelect={nextDate => {setDate(nextDate), setVisible(true)}} />
       <Text category='h6' style={{padding: 25}}>
        Select Date: {date.toLocaleDateString()} 
      </Text>
      <Button onPress={() => navigation.navigate("ModalNote", {noteData: date.toLocaleDateString()})} style={{width: Dimensions.get('window').width * 0.5}} appearance="filled"><Text>Add Note</Text></Button>
      </View>
      <Card status='info'>
        <Text style={{padding: 5}}>Date: {note.date}</Text>
      <Text style={{padding: 5}}>Location: {note.location}</Text>
      <Text style={{padding: 5}}>Weather: {note.weather}</Text>
      <Text style={{padding: 5}}>Occasion: {note.occasion}</Text>
      <Text style={{padding: 5}}>Notes: {note.notes}</Text> 
      </Card>
    </ScrollView>
        );
}