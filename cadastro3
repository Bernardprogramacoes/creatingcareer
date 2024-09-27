import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';

export default function CadastroScreen3({ navigation, route }) {
  const { nome, email, cpf, cep, telefone, senha } = route.params;
  const [isStudent, setIsStudent] = useState(false);
  const [instituicao, setInstituicao] = useState('');
  const [diploma, setDiploma] = useState('');

  const toggleSwitch = () => setIsStudent(previousState => !previousState);

  const handleNext = () => {
    const cadastroData = {
      nome,
      email,
      cpf,
      cep,
      telefone,
      senha,
      instituicao: isStudent ? instituicao : null,
      diploma: isStudent ? diploma : null,
    };

    alert('Cadastro concluído com sucesso!');
    navigation.navigate('Login', { cadastroData });
  };

  return (
    <View style={styles.container}>
    <Image source={require('../assets/CC.png')} style={styles.logo} />
      <Text style={styles.logoText}>Creating Career</Text>
      <Text style={styles.welcomeText}>Seja bem-vindo(a)!</Text>

      <Text style={styles.label}>Você é estudante?</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isStudent}
        thumbColor={isStudent ? "#4e9af1" : "#f4f3f4"}
        trackColor={{ false: "#767577", true: "#4e9af1" }}
      />

      {isStudent && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Instituição"
            placeholderTextColor="#aaa"
            value={instituicao}
            onChangeText={setInstituicao}
          />
          <TextInput
            style={styles.input}
            placeholder="Diploma"
            placeholderTextColor="#aaa"
            value={diploma}
            onChangeText={setDiploma}
          />
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Finalizar Cadastro</Text>
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
  label: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    width: '80%',
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
});
