import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function CadastroScreen2({ navigation, route }) {
  const { nome, email } = route.params;
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  
  const areFieldsValid = () => {
    return cpf && cep && telefone && senha;
  };

  
  const handleNext = () => {
    if (!areFieldsValid()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    navigation.navigate('Cadastro3', { nome, email, cpf, cep, telefone, senha });
  };

  
  const handleCadastrar = () => {
    if (!areFieldsValid()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/CC.png')} style={styles.logo} />
      <Text style={styles.logoText}>Creating Career</Text>
      <Text style={styles.welcomeText}>Seja bem-vindo(a)!</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <Text style={styles.loginText}>
        Já tem uma conta?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Faça login.
        </Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Sou Estudante</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
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
