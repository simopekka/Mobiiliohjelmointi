import React, { useState } from 'react';
import { Alert, StyleSheet, Image, Text, View, Button, TextInput, FlatList, StatusBar } from 'react-native';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [recipe, setRecipe] = useState([]);
 
  const getRecipes = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
    .then(response => response.json())
    .then(data => setRecipe(data.meals))
    .catch(error => { 
        Alert.alert('Error', error); 
    });    
  }
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.flatlist}>
        <FlatList 
          style={{marginLeft : "5%"}}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={({item}) => 
            <View>
              <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.strMeal}</Text>
              <Image source={{uri:item.strMealThumb}} style={{width:350,height:300,borderWidth:2 }}/>
            </View>}
          data={recipe} 
          ItemSeparatorComponent={listSeparator} /> 
      </View>
      <TextInput style={{fontSize: 18, width: 200}} placeholder='keyword' 
        onChangeText={text => setKeyword(text)} />
      <Button title="Find" onPress={getRecipes} />
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
 flatlist: {
   flex:10,
   paddingTop:50,
   alignItems: 'center',
  justifyContent: 'center',
 }
});