import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AnimatedSnow from './screens/AnimatedSnow';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(true)
    }, 4500)
  }, [])

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      showSplash == false ? <AnimatedSnow style={styles.snowContainer}/> :
      <ApplicationProvider {...eva} theme={eva.dark}><SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  snowContainer: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: '#000000'
  }
});