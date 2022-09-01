import {  StyleSheet, Alert, TextInput, Button, View, Text } from 'react-native';
import {useState} from 'react';
export default function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        keyboardType = 'numeric'
        placeholder={'Enter number here'}
        style={{width: 200, borderColour: 'gray', borderWidth: 1}}
        onChangeText={(number1) => setNumber1(number1)}
        value={number1}
      />
      <TextInput
        keyboardType = 'numeric'
        placeholder={'Enter number here'}
        style={{width: 200, borderColour: 'gray', borderWidth: 1}}
        onChangeText={number2 => setNumber2(number2)}
        value={number2}
      />
      <Button onPress={result => setResult(parseInt(number1) + parseInt(number2))} title="+" /> 
      <Button onPress={result => setResult(number1 - number2)} title="-" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
