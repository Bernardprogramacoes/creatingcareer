import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function MateriaisScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" /> 
        </TouchableOpacity>
        <Text style={styles.title}>Material de Apoio</Text>
        
        <TouchableOpacity style={styles.profileIcon}>
          <Icon name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Card 1 */}
        <View style={styles.card}>
          <Icon name="file-text" size={40} color="#0c0a3e" />
          <Text style={styles.cardTitle}>Como Montar Seu Currículo</Text>
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Curriculo')}>
          <Text style={styles.buttonText}>Ver</Text>
         </TouchableOpacity>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Icon name="user-check" size={40} color="#0c0a3e" />
          <Text style={styles.cardTitle}>Dicas para se Portar em uma Entrevista</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Entrevista')}>
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>
        </View>

        {/* Card 3 - Alterado para Carta de Apresentação */}
        <View style={styles.card}>
          <Icon name="file-text" size={40} color="#0c0a3e" />
          <Text style={styles.cardTitle}>Carta de Apresentação</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CartaDeApresentacao')}>
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Materiais')}>
          <Icon name="file-text" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Cursos')}>
          <Icon name="book" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Vagas')}>
          <Icon name="briefcase" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#0c0a3e',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  backButton: {
    padding: 10,
  },
  profileIcon: {
    padding: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 16,
    color: '#000',
    flex: 1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#0c0a3e',
  },
  menuItem: {
    alignItems: 'center',
  },
});
