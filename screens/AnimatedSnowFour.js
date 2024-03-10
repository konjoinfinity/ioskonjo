import { View, Dimensions, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import SnowBack from "./SnowBack";

const { dimheight, dimwidth } = Dimensions.get("window");

const AnimatedSnowBack = (props) => {
  const [width, setWidth] = useState(dimwidth);
  const [height, setHeight] = useState(dimheight);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      delay: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const snow = [];
  if (width > 0 && height > 0) {
    for (let i = 0; i < 200; i++) {
      snow.push(<SnowBack key={i} width={width} height={height} />);
    }
  }

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <View
        {...props}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setWidth(width);
          setHeight(height);
        }}
      >
        {snow}
      </View>
    </Animated.View>
  );
};

export default AnimatedSnowBack;
