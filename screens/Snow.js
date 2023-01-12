import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import * as Random from './Random';

const ANGE_RANGE = 0.1;
const HALF_ANGLE_RANGE = ANGE_RANGE / 2;
const HALF_PI = Math.PI / 2;
const ANGLE_SEED = 100;
const ANGLE_DIVISOR = 10000;
const INCREMENT_LOWER = 2;
const INCREMENT_UPPER = 4;
const FLAKE_SIZE_LOWER = 2;
const FLAKE_SIZE_UPPER = 5;

export default function Snow(props) {

    var thisx = Random.getRandomInt(props.width);
    var thisy = Random.getRandomInt(props.height);
    var thisangle = Random.getRandomFloat(ANGLE_SEED) / ANGLE_SEED * ANGE_RANGE + HALF_PI - HALF_ANGLE_RANGE;
    var increment = Random.getRandom(INCREMENT_LOWER, INCREMENT_UPPER);
    var thisflakeSize = Random.getRandom(FLAKE_SIZE_LOWER, FLAKE_SIZE_UPPER);
    var opacity = Math.random() + 0.1;
    var updateInterval;
    var viewRef;

  useEffect(()=>{
     updateInterval = setInterval(() => {
      move(props.width, props.height);
    }, 50);
  setTimeout(() => {
  clearInterval(updateInterval);
}, 4000)
    return () => {
      return false;
    }
  },[])

  useEffect(() => {
    return () => {
      clearInterval(updateInterval);
    }
  }, [])

  const move = (width, height) => {
    const x = thisx + increment * Math.cos(thisangle);
    const y = thisy + increment * Math.sin(thisangle);
    thisangle += Random.getRandom(-ANGLE_SEED, ANGLE_SEED) / ANGLE_DIVISOR;
    thisx = Math.floor(x);
    thisy = Math.floor(y);

    if (!isInside(width, height)) {
      reset(width);
    }

    viewRef.setNativeProps({
      top: thisy,
      left: thisx,
    });
  }

  const isInside = (width, height) => {
    const x = thisx;
    const y = thisy;
    const flakeSize = thisflakeSize;
    return (
      x >= -flakeSize - 1 && x + flakeSize <= width && y >= -flakeSize - 1 && y - flakeSize < height
    );
  }

  const reset = (width) => {
    const x = Random.getRandomInt(width);
    const y = -thisflakeSize - 1;
    const angle = Random.getRandomFloat(ANGLE_SEED) / ANGLE_SEED * ANGE_RANGE + HALF_PI - HALF_ANGLE_RANGE;

    thisx = x;
    thisy = y;
    thisangle = angle;
  }

  const getPosition = () => {
    return {
      top: thisy,
      left: thisx,
      width: thisflakeSize,
      height: thisflakeSize,
      borderRadius: thisflakeSize / 2,
      opacity: opacity,
    };
  }

  const snowShape = getPosition();
    return (
      <View ref={el => (viewRef = el)} {...props} style={[styles.snow, snowShape]} />
    );
  }

Snow.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  snow: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: 100,
    height: 100,
    borderRadius: 50
  },
});