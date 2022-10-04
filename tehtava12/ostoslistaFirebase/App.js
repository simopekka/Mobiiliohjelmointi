import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { initializeApp } from'firebase/app';
import { getDatabase, push, ref, onValue, deleteField } from'firebase/database';


export default function App() {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "__________",
    authDomain: "__________",
    databaseURL: "___________",
    projectId: "_________",
    storageBucket: "__________",
    messagingSenderId: "_________",
    appId: "___________"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [grocery, setGrocery] = useState('');
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    onValue(ref(database, 'shoppinglist/'), (snapshot) => {
      const data = snapshot.val();
      setItems(Object.values(data));
      console.log(data);
    })
  }, []);


  const saveItem = () => {
    push(
      ref(database, 'shoppinglist/'),
      {'grocery': grocery, 'amount': amount });
  }

  const deleteItem = (id) => {
    deleteField(database, 'shoppinglist/'),
    {'id': id}
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };


  return (
    <View style={styles.container}>
      <TextInput placeholder='Grocery' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(grocery) => setGrocery(grocery)}
        value={grocery}/>  
      <TextInput placeholder='Amount' style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(amount) => setAmount(amount)}
        value={amount}/>      
      <Button onPress={saveItem} title="Save" /> 
      <Text style={{marginTop: 30, fontSize: 20}}>Shopping list</Text>
      <Text>{grocery}</Text>
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.grocery}, {item.amount}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => deleteItem(item.id)}> Bought</Text></View>} 
        data={items} 
        ItemSeparatorComponent={listSeparator} 
      />   
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
 },
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  alignItems: 'center'
 },
});
