import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Button, FlatList, Text, View } from 'react-native';
import MapView, { Marker } from'react-native-maps';
import React, {useState} from 'react';

export default function App() {

  const [location, setLocation] = useState('');
  const api = '___________';
  const [region, setRegion] = useState({
    latitude: 60.200690,
    longitude: 24.934302,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121
  });

  const fetchLocation = () => {
    fetch (`http://www.mapquestapi.com/geocoding/v1/address?key=${api}&location=${location}`)
      .then((response) => response.json())
      .then((responseData) => {
        setRegion({
          ...region,
          latitude:responseData.results[0].locations[0].latLng.lat,
          longitude:responseData.results[0].locations[0].latLng.lng});
      })
      .catch(error => console.log('error', error));
    
  }

  return (
    <View style={{flex: 6}}>
      <View style={{flex: 6}}>
        <MapView
          style={{flex: 5}}
          region={region} >
          <Marker
            coordinate={{latitude: region.latitude, longitude: region.longitude}} />
        </MapView>
      </View>
      <View style={styles.button}>
        <TextInput 
        placeholder={'Enter sum'}
        style={{width: 200, borderColour: 'gray', borderWidth: 1}}
        onChangeText={location => setLocation(location)} 
        />
        <Button title='find' onPress={fetchLocation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
   flex: 6,
  },
  button: {
    flex:1,
    alignItems: 'center'
  }
});
