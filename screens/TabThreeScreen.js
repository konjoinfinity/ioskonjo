import React, {Component} from 'react';

import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AnimatedSnow from './AnimatedSnow';
const {height, width} = Dimensions.get('window');

class TabThreeScreen extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <ScrollView style={styles.container}>
        <AnimatedSnow style={styles.snowContainer}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  snowContainer: {
    position: 'absolute',
    width: width,
    height: height,
  }
});

export default TabThreeScreen