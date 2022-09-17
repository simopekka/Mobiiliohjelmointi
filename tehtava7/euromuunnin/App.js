import {  StyleSheet, TextInput, Button, View, Text } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [from, setFrom] = useState('');
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState([]);

  const convert = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "_____________");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
      };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=EUR&from=${from}&amount=${amount}`, requestOptions)
      .then(response => response.text())
      .then(result => setResult(result))
      .catch(error => console.log('error', error));
  }

  return (
    <View style={styles.container}>
      <Text>Convert different currencies to euros</Text>
      <Text>Result: {result[result.length-11]}{result[result.length-10]}{result[result.length-9]}{result[result.length-7]}{result[result.length-7]}{result[result.length-6]}{result[result.length-5]}{result[result.length-4]}€</Text>
      <TextInput
        placeholder={'USD, NOK, SEK, etc...'}
        style={{width: 200, borderColour: 'gray', borderWidth: 1}}
        onChangeText={(from) => setFrom(from)}
        value={from}
      />
      <TextInput
        keyboardType = 'numeric'
        placeholder={'Enter sum'}
        style={{width: 200, borderColour: 'gray', borderWidth: 1}}
        onChangeText={amount => setAmount(amount)}
        value={amount}
      />
      <Button onPress={convert} title="convert to EUR" /> 
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
