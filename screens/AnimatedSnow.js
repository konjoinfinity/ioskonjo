import { View, ScrollView }from "react-native";
import React, { useState, useEffect } from "react";
import Snow from './Snow';
import TabSixScreen from "./TabSixScreen";
import * as Haptics from 'expo-haptics';
// import { useNavigation } from '@react-navigation/native';

 const AnimatedSnow = (props) => {
  // const navigation = useNavigation();
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const child = React.createRef();
  
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  //   });
  //   return unsubscribe;
  // }, [])

  const snow = [];
  if (width > 0 && height > 0) {
    for (let i = 0; i < 300; i++) {
      snow.push(<Snow
          key={i}
          width={width}
          height={height}
          />)}}
  
      return (
        <View {...props}
          onLayout={(e) => {
            const {width, height} = e.nativeEvent.layout;
            setWidth(width);
              setHeight(height);
          }}>
            {snow}
            {/* <TabSixScreen /> */}
            </View>
      )
    }

export default AnimatedSnow

 