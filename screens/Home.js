import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Home = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
  
    const handleNameChange = (text) => {
      setName(text);
    };
  
    const handleNumberChange = (text) => {
      setNumber(text);
    };
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handleSubmit = () => {
      const data = {
        name,
        number,
        email,
      };
      setSubmittedData(data);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
          placeholder="Enter your name"
        />
  
        <Text style={styles.label}>Number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNumberChange}
          value={number}
          placeholder="Enter your number"
          keyboardType="numeric"
        />
  
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleEmailChange}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
  
        <Button title="Submit" onPress={handleSubmit} />
  
        {submittedData && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Submitted Data:</Text>
            <Text>Name: {submittedData.name}</Text>
            <Text>Number: {submittedData.number}</Text>
            <Text>Email: {submittedData.email}</Text>
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    resultContainer: {
      marginTop: 20,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
    },
    resultText: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
  });

export default Home;
