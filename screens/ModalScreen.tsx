import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Periodic Table of Snow</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={{fontSize: Dimensions.get('window').height * 0.03, margin: Dimensions.get('window').height * 0.05 }}>So, here it is: the “Periodic Table of Snow”, in all its laughable glory. I hope you have a few chuckles as you read it, and maybe use some of the terms in the future. Although it took many hours of research and preparation, as you might imagine, I had a blast developing it. But what else was I going to do during a pandemic shelter-in-place? I had plenty of hours to fill. Time was something I had plenty of, in the spring of 2020.</Text>

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
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
