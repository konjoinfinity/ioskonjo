import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import React, { useState, useEffect } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import AnimatedSnow from "./screens/AnimatedSnow";
import { StyleSheet, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import snowWeather from "./constants/snowWeather";
import snowData from "./constants/snowData";

const { height, width } = Dimensions.get("window");
const storagekey = "storage";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    getMyObject();
    setTimeout(() => {
      setShowSplash(true);
    }, 4500);
  }, []);

  const getMyObject = async () => {
    var db;
    try {
      await AsyncStorage.getItem(storagekey, (error, result) => {
        if (result !== null && result !== "[]" && result !== undefined) {
        } else {
          db = snowData.concat(snowWeather);
          AsyncStorage.setItem(storagekey, JSON.stringify(db));
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return showSplash == false ? (
      <AnimatedSnow data-at="elementTestId" style={styles.snowContainer} />
    ) : (
      <ApplicationProvider data-at="elementTestId" {...eva} theme={eva.dark}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  snowContainer: {
    position: "absolute",
    width: width,
    height: height,
    backgroundColor: "#000000",
  },
});
