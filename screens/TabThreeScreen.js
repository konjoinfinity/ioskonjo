import { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import MapView, { Marker } from 'react-native-maps';

export default function TabThreeScreen() {
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

    return (
      <MapView
      region={{latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }} style={{width: "100%", height: "100%"}}>
      {locations.length !== 0 ? (
        locations.map(({name, latitude, longitude, description}) => (
      <Marker
      key={name}
      coordinate={{ latitude : latitude , longitude : longitude }}
      title={name}
      description={description}
    />
    ))
    ):("")}
    </MapView>
    )
}