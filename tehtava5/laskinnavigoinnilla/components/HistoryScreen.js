import { StyleSheet, FlatList, TextInput, Button, View, Text } from 'react-native';
import {useState} from 'react';

export default function HistoryScreen( {route, navigation} ) {
    const{ data } = route.params;
    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList 
                data={data}
                renderItem={({item}) =><Text>{item.key}</Text>}  
                keyExtractor={(item, index) => index.toString()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });