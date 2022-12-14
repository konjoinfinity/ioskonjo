import { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

interface Props {
  name: string;
  geolocation: string;
  latitude: string;
  longitude: string;
  image: string;
}

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [locations, setLocations] = useState([]);

  const getData = async () => {
    await fetch("https://638bd25dd2fc4a058a4e6502.mockapi.io/locaiton", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        setLocations(res);
      }).catch(error => {
        console.log(String(error))
      });
    }

  useEffect(() => {
    getData();
  }, []);

  function Songs({ name, geolocation, latitude, longitude, image}: Props) {
    return (
  <View
  style={{
    flex: 1,
    flexDirection: 'column',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    height: 250,
    marginBottom: 10,
  }}
>
  <View style={{ flex: 3, flexDirection: 'row' }}>
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
            fontSize: 25,
            color: "white",
            marginLeft: -15,
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  </View>
  <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
  <Image source={{uri: image}} style={{height: 100, width: 100, margin: 20}} />
        <Text
          style={{
            fontSize: 20,
            color: "white",
          }}
        >
          {latitude}   {longitude}
        </Text>
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
        {locations.length !== 0 ? (
          locations.map(({name, geolocation, latitude, longitude, image, id}) => (
          <Songs name={name} geolocation={geolocation} latitude={latitude} longitude={longitude} image={image} key={name} />
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
