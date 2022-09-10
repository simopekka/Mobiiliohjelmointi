import { StyleSheet, FlatList, TextInput, Button, View, Text } from 'react-native';
import {useState} from 'react';
export default function CalculatorScreen( { navigation } ) {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const plus = () => {
    setData([...data, {key: num1 + ' + ' + num2 + ' = ' + (parseInt(num1) + parseInt(num2))}]);
    setResult(parseInt(num1) + parseInt(num2));
  }

  const minus = () => {
    setData([...data, {key: num1 + ' - ' + num2 + ' = ' + (num1 - num2)}]);
    setResult(num1 - num2);
  }
  
  return (
    <View style={styles.container}>
        <Text>{result}</Text>
      <TextInput
      keyboardType='numeric'
      placeholder={'Enter number here'}
      style={{width: 200, borderColour: 'gray', borderWidth: 1}}
      onChangeText={setNum1}
      value={num1}
      />
      <TextInput
      keyboardType='numeric'
      placeholder={'Enter number here'}
      style={{width: 200, borderColour: 'gray', borderWidth: 1}}
      onChangeText={setNum2}
      value={num2}
      />
        <Button onPress={plus}title='+' />
        <Button onPress={minus}title='-' />
        <Button title='History'
        onPress={() => navigation.navigate('History', {data: data})} />
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