import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'; 

export default function CadastroScreen1({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (!nome || !email) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    navigation.navigate('Cadastro2', { nome, email });
  };

  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/CC.png')} style={styles.logo} />
      
      
      <Text style={styles.logoText}>Creating Career</Text>
      
      <Text style={styles.welcomeText}>Seja bem-vindo(a)!</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Já tem uma conta?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Faça login.
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0a3e',
  },
   logo: {
    width: 120, 
    height: 120, 
    marginBottom: 20, 
    resizeMode: 'contain', 
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    width: '48%',
    justifyContent: 'center',
    padding: 15,
    color: '#000',
  },
  button: {
    width: '80%',
    backgroundColor: '#4e9af1',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  loginText: {
    color: '#ffffff',
    marginTop: 10,
  },
  loginLink: {
    color: '#4e9af1',
    fontWeight: 'bold',
  },
});
