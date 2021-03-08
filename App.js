import React from 'react';
import {View, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  function handlePress(){
    alert("That's great");
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputStyle}>
        <TextInput 
          style={styles.input}
          placeholder="Enter your goal"
        />
        <Button title="Add" onPress={handlePress}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: '2%'
  }
})
