import React, {Component} from 'react';
import {
    View,
  StyleSheet,
  Dimensions
} from 'react-native';
import AnimatedSnow from './AnimatedSnow';
const {height, width} = Dimensions.get('window');

export default function TabThreeScreen(props) {

    return (
        <AnimatedSnow style={styles.snowContainer}/>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  snowContainer: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'transparent'
  }
});