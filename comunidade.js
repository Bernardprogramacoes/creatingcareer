import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Comunidade({ navigation }) {  
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Compartilhe com as pessoas a sua experiência:</Text>
      </View>

      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.commentCard}>
          <Icon name="user-circle" size={30} color="#007bff" />
          <View style={styles.commentContent}>
            <Text style={styles.commentUser}>andre_silva@gmail.com</Text>
            <Text style={styles.commentText}>Adorei o Aplicativo! Bastante Eficaz.</Text>
          </View>
        </View>

        <View style={styles.commentCard}>
          <Icon name="user-circle" size={30} color="#007bff" />
          <View style={styles.commentContent}>
            <Text style={styles.commentUser}>Juliamedeiros@yahoo.com</Text>
            <Text style={styles.commentText}>Adorei o Aplicativo! Bastante Eficaz.</Text>
          </View>
        </View>

        <View style={styles.commentCard}>
          <Icon name="user-circle" size={30} color="#007bff" />
          <View style={styles.commentContent}>
            <Text style={styles.commentUser}>pedrosantos@outlook.com</Text>
            <Text style={styles.commentText}>Adorei o Aplicativo! Bastante Eficaz.</Text>
          </View>
        </View>
      </ScrollView>

      
      <View style={styles.commentInputSection}>
        <TextInput
          style={styles.commentInput}
          placeholder="Deixe seu comentário"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.commentButton}>
          <Text style={styles.commentButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topBar: {
    backgroundColor: '#0c0a3e',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
  scrollContent: {
    padding: 10,
  },
  commentCard: {
    flexDirection: 'row',
    backgroundColor: '#e0f0ff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  commentContent: {
    marginLeft: 10,
  },
  commentUser: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
  commentInputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  commentButton: {
    backgroundColor: '#0c0a3e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
