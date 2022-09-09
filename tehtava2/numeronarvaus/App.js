import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, TextInput, Button, View, Text } from 'react-native';
import {useState} from 'react';


export default function App() {

  const [arvaus, setArvaus] = useState('');
  const [tulostus, setTulostus] = useState('');
  const [counter, setCounter] = useState(1);
  const [rnm, setRnm] = useState(Math.floor(Math.random() * 100) + 1);



  
  const selvitys = () => {
    if (arvaus < rnm) {
      setTulostus('Your guess ' + arvaus + ' is too low')
      setCounter(counter + 1)
    } else if ( arvaus > rnm) {
      setTulostus('Your quess ' + arvaus + ' is too high')
      setCounter(counter + 1)
    } else {
      Alert.alert('You guessed the number in ' + counter + ' guesses');
      setCounter(1);
      setTulostus('')
      setRnm(Math.floor(Math.random() * 100) + 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{tulostus}</Text>
      <StatusBar style="auto" />
      <TextInput
        keyboardType = 'numeric'
        placeholder={'Enter number here'}
        style={{width: 200, borderColour: 'gray', borderWidth: 1}}
        onChangeText={(arvaus) => setArvaus(arvaus)}
        value={arvaus}
      />
      <Button onPress={selvitys} title="MAKE A GUESS" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
