import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";

const Home = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [result, setResult] = useState(null);
  const [inputField, setInputField] = useState([]);

  // calculation
  const calculateSum = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const num3 = parseFloat(number3);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      let sum = num1 * num2 * num3;
      setResult(`Soil is: ${sum} sq³`);
    } else {
      setResult("Please enter valid numbers");
    }
  };

  // code for form clear
  const clearForm = () => {
    setNumber1("");
    setNumber2("");
    setNumber3("");
    setResult(null);
    Alert.alert("Form cleared!", "Form fields have been cleared");
  };

  // code for create new input field
  const createInput = () => {
    setInputField([...inputField, ""]);
  };

  //
  const removeInputField = (index) => {
    const newInputField = [...inputField];
    newInputField.splice(index, 1);
    setInputField(newInputField);
  };

  // 
  const handleInputChange = (text,index) =>{
    const newInputFields = [...inputField];
    newInputFields[index] = text;
    setInputField(newInputFields);
  };

  return (
    <ScrollView className="p-[15px] pt-[20px]">
      <Text className="text-[24px] mb-[8px] text-center">Earth Excavation Calculator</Text>
      <Text className="text-[16px] mb-[8px]">Length</Text>
      <TextInput
        className="border-black border p-[4px] mb-[8px] rounded-[6px]"
        onChangeText={(text) => setNumber1(text)}
        value={number1}
        placeholder="Enter Feet"
        keyboardType="numeric"
      />

      <Text className="text-[16px] mb-[8px]">Width</Text>
      <TextInput
        className="border-black border p-[4px] mb-[8px] rounded-[6px]"
        onChangeText={(text) => setNumber2(text)}
        value={number2}
        placeholder="Enter Feet"
        keyboardType="numeric"
      />

      <Text className="text-[16px] mb-[8px]">Height</Text>
      <TextInput
        className="border-black border p-[4px] mb-[8px] rounded-[6px]"
        onChangeText={(text) => setNumber3(text)}
        value={number3}
        placeholder="Enter Feet"
        keyboardType="numeric"
      />

      {inputField.map((value, index) => (
        <View key={index}>
          <TextInput
            className="border-black border p-[4px] mb-[8px] rounded-[6px]"
            value={value}
            onChangeText={(text) => handleInputChange(text,index)}
          />
          <Button title="Remove" onPress={() => removeInputField(index)} />
        </View>
      ))}

      <View className="flex gap-[8px] mt-[8px]">
        <Button className="" title="Submit" onPress={calculateSum} />
        <Text className="bg-red-500 p-[8px] rounded-[6px] text-white text-center" onPress={clearForm} >Clear Form</Text>
        {/* <Button title="Add Input Field" onPress={createInput} /> */}
      </View>

      {result && (
        <View className="text-[16px] mb-[8px]">
          <Text className="text-[16px] mt-[8px]">{result}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;
