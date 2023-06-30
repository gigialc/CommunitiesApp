import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const PhoneNumberInput = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = () => {
    onSubmit(phoneNumber);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default PhoneNumberInput;
