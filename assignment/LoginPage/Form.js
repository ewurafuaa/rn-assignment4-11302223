import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Homepage', {username, email});
  };

  return (
    <View style={styles.formSection}>
      <TextInput style={styles.name} placeholder="Name" placeholderTextColor="#AFB0B6" value={username} onChangeText={setUsername} />
      <TextInput style={styles.email} placeholder="Email" placeholderTextColor="#AFB0B6" value={email} onChangeText={setEmail} />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    formSection:{
        flex: 1,
        padding: 0,
    },

    name: {
        width: 372,
        height: 52,
        top: 261,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AFB0B6',
        alignSelf: 'center',
    },

    email: {
        width: 372,
        height: 52,
        top: 280,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AFB0B6',
    },

    loginButton: {
        width: 372,
        height: 56,
        top: 330,
        borderRadius: 5,
        backgroundColor: '#356899',
    },

    buttonText: {
        width: 47,
        height: 24,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        color: '#FFFFFF',
        alignSelf: 'center',
        top: 15,
    },
})

export default Form;