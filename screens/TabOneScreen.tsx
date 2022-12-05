import { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button, Avatar } from "react-native-elements"

interface Props {
  id: number;
  color: [
    number,
    number,
    number,
    number
  ],
  emoji: string,
  element: {
    symbol: string,
    name: string,
    atomicNumber: number
  };
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [colors, setColors] = useState([]);

  const getData = async () => {
    await fetch("https://638bd25dd2fc4a058a4e6502.mockapi.io/color", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        setColors(res);
      }).catch(error => {
        console.log(String(error))
      });
    }

  useEffect(() => {
    getData();
  }, []);

  function Colors({ id, color, emoji, element }: Props) {
    return (
  <View
  key={id}
  style={{
    flex: 1,
    flexDirection: 'column',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    height: 250,
    marginBottom: 10,
    backgroundColor: `cmyk(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`
  }}
>
  <View style={{ flex: 3, flexDirection: 'column' }}>
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <Text style={{fontSize: 60}}>{emoji}</Text>
    </View>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: 10,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "white",
          }}
        >
          {element.atomicNumber} - {element.name} - {element.symbol} 
        </Text>
      </View>
    </View>
  </View>
  <View style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end", width: "60%"}}>
  </View>
  <View
    style={{
      width: 300,
      borderWidth: 0.5,
      borderColor: 'rgba(222, 223, 226, 1)',
      marginHorizontal: 20,
      height: 1,
      marginVertical: 10,
    }}
  />
</View>
    )
}
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {colors.length !== 0 ? (
          colors.map(({id, color, emoji, element }) => (
          <Colors color={color} emoji={emoji} element={element} id={id} key={id} />
          ))
          ):("")}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
