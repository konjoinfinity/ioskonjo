import { View, Dimensions, Text, Animated }from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Snow from './Snow';
import * as Animatable from 'react-native-animatable';

AnimatableView = Animatable.createAnimatableComponent(View);
const {dimheight, dimwidth} = Dimensions.get('window');

export function Card({title, color, copy}){
  return (
      <View style={{backgroundColor: color, width: Dimensions.get('window').width * 0.45, height: Dimensions.get('window').width * 0.45, margin: 0.5, opacity: 0.9, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row"}}>
       <Text style={{ fontSize: Dimensions.get('window').height * 0.05, fontWeight: "bold", alignSelf: "center" }}>{title}</Text>
       <Text style={{ fontSize: Dimensions.get('window').height * 0.025, alignSelf: "center" }}>{copy}</Text>
      </View>
  )
}

 const AnimatedSnow = (props) => {
  const [width, setWidth] = useState(dimwidth)
  const [height, setHeight] = useState(dimheight)
  const fadeAnim = useRef(new Animated.Value(1)).current 

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {toValue: 0, duration: 800, delay: 4000, useNativeDriver: true}
    ).start()
  }, [fadeAnim])

  const snow = [];
  if (width > 0 && height > 0) {
    for (let i = 0; i < 800; i++) {
      snow.push(<Snow
          key={i}
          width={width}
          height={height}
          />)}}
  
      return (
        Platform.OS == "ios" ? <View style={{backgroundColor: "#000", height: height, width: width}}>
        <Animated.View style={{ opacity: fadeAnim, backgroundColor: "#000" }}>
        <View {...props}
          onLayout={(e) => {
            const {width, height} = e.nativeEvent.layout;
            setWidth(width);
              setHeight(height)}}>
            {snow}
            <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", paddingTop: Dimensions.get('window').height * 0.3, paddingLeft: Dimensions.get('window').width * 0.04, paddingRight: Dimensions.get('window').width * 0.04}}>
                <AnimatableView animation="bounceInDown" delay={500} duration={2000}><Card title={"Periodic"} color={"#5B9BD5"} /></AnimatableView>      
                <AnimatableView animation="bounceInDown" delay={750} duration={2000}><Card title={"Table"} color={"#DEEAF6"} /></AnimatableView>  
                <AnimatableView animation="bounceInDown" delay={1000} duration={2000}><Card title={"of"} color={"#FFD965"} /></AnimatableView>  
                <AnimatableView animation="bounceInDown" delay={1250} duration={2000}><Card title={"Snow"} copy={"©"} color={"#ECECEC"} /></AnimatableView>          
                </View>
            </View>
          </Animated.View>
        </View> :
        <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", paddingTop: Dimensions.get('window').height * 0.3, paddingBottom: Dimensions.get('window').height * 0.3, paddingLeft: Dimensions.get('window').width * 0.04, paddingRight: Dimensions.get('window').width * 0.04, backgroundColor: "#000"}}>
        <AnimatableView animation="bounceInDown" delay={500} duration={2000}><Card title={"Periodic"} color={"#5B9BD5"} /></AnimatableView>      
        <AnimatableView animation="bounceInDown" delay={750} duration={2000}><Card title={"Table"} color={"#DEEAF6"} /></AnimatableView>  
        <AnimatableView animation="bounceInDown" delay={1000} duration={2000}><Card title={"of"} color={"#FFD965"} /></AnimatableView>  
        <AnimatableView animation="bounceInDown" delay={1250} duration={2000}><Card title={"Snow"} copy={"©"} color={"#ECECEC"} /></AnimatableView>          
        </View>
      )
    }

export default AnimatedSnow

 