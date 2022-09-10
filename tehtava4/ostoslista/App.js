import { StyleSheet, FlatList, TextInput, Button, View, Text } from 'react-native';
import {useState} from 'react';
export default function App() {

  const [grocery, setGrocery] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, {key: grocery}]);
  }
  const clear = () => {
    setData([]);
  }
  
  return (
    <View style={styles.container}>
      <TextInput
      keyboardType='default'
      style={{width: 200, borderColour: 'gray', borderWidth: 1}}
      onChangeText={setGrocery}
      value={grocery}
      />
      <Button onPress={add}title='Add' />
      <Button onPress={clear}title='Clear'/>
      <Text>Shopping list:</Text>
      <FlatList 
        data={data}
        renderItem={({item}) =><Text>{item.key}</Text>}  
        keyExtractor={(item, index) => index.toString()} />
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