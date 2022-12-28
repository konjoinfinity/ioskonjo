import React, {Component} from 'react';

import {
    View,
  StyleSheet,
  Dimensions
} from 'react-native';
import AnimatedSnow from './AnimatedSnow';
const {height, width} = Dimensions.get('window');

class TabThreeScreen extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <View style={styles.container}>
        <AnimatedSnow style={styles.snowContainer}/>
      </View>
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