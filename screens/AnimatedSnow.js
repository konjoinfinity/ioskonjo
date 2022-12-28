import {View }from "react-native";
import React, { PureComponent } from "react";
import Snow from './Snow';

export default class AnimatedSnow extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        width: 0,
        height: 0,
      }
    }
  
    render() {
  
      const snow = [];
      if (this.state.width > 0 && this.state.height > 0) {
        for (let i = 0; i < 300; i++) {
          snow.push(
            <Snow
              key={i}
              width={this.state.width}
              height={this.state.height}
            />)
        }
      }
  
      return (
        <View {...this.props}
          onLayout={(e) => {
            const {width, height} = e.nativeEvent.layout;
            this.setState ({
              width: width,
              height: height
            });
          }}>
            {snow}
        </View>
      )
    }
  }
 