import React, { useEffect, useState } from 'react';
import {
    View, ScrollView, Dimensions
} from 'react-native';
import 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { Calendar, Text, Button } from '@ui-kitten/components';

const useCalendarState = (initialState = null) => {
    const [date, setDate] = React.useState(initialState);
    return { date, onSelect: setDate };
  };

export default function Home({navigation}) {
    const minMaxCalendarState = useCalendarState();
    const [visible, setVisible] = React.useState(false)
    const [date, setDate] = React.useState(new Date());
    const [note, setNote] = useState({
        date: "",
        location: "",
        weather: "",
        companions: "",
        occasion: "",
        notes: ""
    })

    const now = new Date();
    const threeMos = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 90);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          });
          return unsubscribe;
      }, [navigation])

        return(
            <ScrollView style={{ flex: 1 }}>
               <View style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
      <Calendar
      min={threeMos}
      max={now}
        date={date}
        onSelect={nextDate => {setDate(nextDate), setNote({date:nextDate.toLocaleDateString()}), setVisible(true)}} />
        <Text category='h6' style={{padding: 25}}>
        Select Date: {date.toLocaleDateString()}
      </Text>
      {visible ? <Button onPress={() => navigation.navigate("ModalNote", {noteData: note})} style={{width: Dimensions.get('window').width * 0.5}} appearance="filled"><Text>Add Note</Text></Button> : ("")}
      </View>
                
            </ScrollView>
        );
}