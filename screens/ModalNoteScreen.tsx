import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, StyleSheet, Dimensions, Button } from 'react-native';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { Text, View } from '../components/Themed';
import * as Haptics from 'expo-haptics';
import snowData from '../constants/snowData';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function ModalNoteScreen({ route }) {
  // const {cardData} = route.params;
  
  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput style={{width: Dimensions.get('window').width * 0.8}} placeholder='Date' label="Label" leading={<Icon name="calendar" size={25} />}></TextInput>
      <TextInput placeholder='Location'></TextInput>
      <TextInput placeholder='Weather'></TextInput>
      <Button title="Add New Note"></Button>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
