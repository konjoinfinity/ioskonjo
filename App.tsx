import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AnimatedSplash from "react-native-animated-splash-screen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(true)
    }, 500)
  }, [])

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <AnimatedSplash
      translucent={true}
      isLoaded={showSplash}
      logoImage={require("./assets/images/snowlogo.png")}
      backgroundColor={"#000000"}
      logoHeight={200}
      logoWidth={200}>
      <ApplicationProvider {...eva} theme={eva.dark}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </ApplicationProvider>
      </AnimatedSplash>
    );
  }
}