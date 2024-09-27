import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function NotificacoesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notificações</Text>
      </View>

      
      <ScrollView contentContainerStyle={styles.notificationContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Atualizações do Perfil</Text>
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>Atualização de informações pessoais</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Cursos Disponíveis</Text>
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>Novos cursos foram adicionados!</Text>
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ecf0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0c0a3e',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  backButton: {
    padding: 5,
  },
  notificationContainer: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f0f4f7',
    borderRadius: 10,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    color: '#0c0a3e',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  notificationItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
  },
});
