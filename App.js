import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button ,SafeAreaView} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  // const [text, setText] = useState('');
  const [text, onChangeText] = React.useState("Answer Goes Here");
  const [numberA, onChangeNumberA] = React.useState(null);
  const [numberB, onChangeNumberB] = React.useState(null);
  const [numberC, onChangeNumberC] = React.useState(null);

  const [titleText, setTitleText] = useState("The answer :");
  const bodyText = "Click confirm to get the answer";

  const onPressTitle = () => {
    setTitleText("Click confirm to get the answer");
  };

  const showtheAns = () => {
    const ans = Number(numberA) + Number(numberB) + Number(numberC)
    console.log(numberA)
    setTitleText(`The answer : ${ans}`)
  };

  const resetAns = () => {
    onChangeNumberA(0)
    onChangeNumberB(0)
    onChangeNumberC(0)
  }
  const resetAll = () => {
    onChangeNumberA(0)
    onChangeNumberB(0)
    onChangeNumberC(0)
    setTitleText(`The answer : `)
  }
  return (

    <SafeAreaView>
          <Text style={styles.superTitleText} >
            Comp 7506   Individual Assignment
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumberA}
            value={numberA}
            placeholder="Number 1"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumberB}
            value={numberB}r
            placeholder="Number 2"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumberC}
            value={numberC}
            placeholder="Number 3"
            keyboardType="numeric"
          />

        <Text style={styles.baseText}>
              <Text style={styles.titleText} 
              // onPress={onPressTitle}
              >
                {titleText}
                {"\n"}
                {"\n"}
              </Text>
              <Text numberOfLines={5}>{bodyText}</Text>
            </Text>
    
      

      <Button
        title="Confirm"
        onPress={showtheAns } 
      />
      <Button
        title="Clear Input"
        onPress={resetAns} 
      />
      <Button
        title="Reset"
        onPress={resetAll} 
      />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, 
  baseText: {
    margin: 12,
    fontFamily: "Cochin"
  },
  superTitleText:{
    margin: 12,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cochin"
  },
  titleText: {
    margin: 12,
    fontSize: 20,
    fontWeight: "bold"
  }
});
