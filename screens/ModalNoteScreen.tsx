import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import { Button, Input, Text } from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default function ModalNoteScreen({ route }) {
  const locationInputState = useInputState();
  const weatherInputState = useInputState();
  const companionsInputState = useInputState();
  const occasionInputState = useInputState();
  const notesInputState = useInputState();
  
  const {noteData} = route.params;
  
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }, [])

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={{marginBottom: 20}} category='h6'>Date: {noteData.date}</Text>
      <Input
          style={styles.input}
          status='info'
          placeholder='Location'
          {...locationInputState}
        />
        <Input
          style={styles.input}
          status='info'
          placeholder='Weather'
          {...weatherInputState}
        />
        <Input
          style={styles.input}
          status='info'
          placeholder='Companions'
          {...companionsInputState}
        />
        <Input
          style={styles.input}
          status='info'
          placeholder='Occasion'
          {...occasionInputState}
        />
        <Input
          style={styles.input}
          status='info'
          placeholder='Notes'
          {...notesInputState}
        />
      <Button style={{marginTop: 40}} appearance="filled"><Text>Add New Note</Text></Button>
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
    padding: 10
  }
});
