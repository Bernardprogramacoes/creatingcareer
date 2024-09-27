import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function CurriculoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Currículo</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('ModelosCurriculo')} style={styles.forwardButton}>
          <Icon name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Como Montar?</Text>
        <Text style={styles.paragraph}>
          1. Cabeçalho: coloque dados pessoais e informações de contato{'\n'}
          2. Resumo: seja breve, mas impactante{'\n'}
          3. Objetivos profissionais: personalize para cada vaga{'\n'}
          4. Vivência profissional: inclua suas realizações{'\n'}
          5. Formação acadêmica: valorize sua educação{'\n'}
          6. Cursos complementares: priorize os mais relevantes{'\n'}
          7. Habilidades e competências: escolha o que destacar{'\n'}
          8. Informações complementares: utilize se necessário{'\n'}
          9. Palavras-chave: como tornar o currículo atrativo
        </Text>

        <Text style={styles.sectionTitle}>Estrutura</Text>
        <Text style={styles.paragraph}>
          Normalmente, a estrutura de um currículo simples e básico deve conter os seguintes tópicos:{'\n'}
          - Dados pessoais{'\n'}
          - Área de atuação e objetivo profissional{'\n'}
          - Formação acadêmica{'\n'}
          - Experiência profissional{'\n'}
          - Cursos e qualificações{'\n'}
          - Atividades extracurriculares ou informações complementares.
        </Text>

        <Text style={styles.sectionTitle}>Onde Fazer?</Text>
        <Text style={styles.paragraph}>
          Para currículos em PDF ou com design diferente, que você pretende enviar por e-mail, você pode utilizar ferramentas como o Word, o Google Docs ou mesmo o Canva. Lembre-se que, a menos que você seja de uma área como design, é melhor focar no conteúdo e deixar o layout mais simples e objetivo.
        </Text>

        <Text style={styles.sectionTitle}>Como Deve Ser Entregue?</Text>
        <Text style={styles.paragraph}>
          Em alguns casos, as empresas podem pedir explicitamente que o currículo seja entregue em um envelope. Nesses casos, é importante seguir as instruções da empresa e apresentar o currículo da forma solicitada. No entanto, se a empresa não especificou o uso do envelope, é seguro entregar o currículo sem ele.
        </Text>
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
  forwardButton: {
    padding: 10,
  },
  content: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
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

//modelos do curriculo, pages

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Linking } from 'react-native';

export default function ModelosCurriculo({ navigation }) {

  const openPdf = (modelo) => {
  const pdfUrls = {
    1: 'https://exemplo.com/curriculo1.pdf',
    2: 'https://exemplo.com/curriculo2.pdf',
    3: 'https://exemplo.com/curriculo3.pdf',
    4: 'https://exemplo.com/curriculo4.pdf',
  };

  const url = pdfUrls[modelo];
  Linking.openURL(url);
};

  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Modelos de Currículo</Text>
      </View>

      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Escolha um modelo de currículo:</Text>

        
        {[1, 2, 3, 4].map((modelo) => (
          <View key={modelo} style={styles.modeloItem}>
            <Text style={styles.modeloText}>Currículo {modelo} - Exemplo</Text>
            <TouchableOpacity style={styles.button} onPress={() => openPdf(modelo)}>
              <Text style={styles.buttonText}>Visualizar</Text>
            <Icon name="file-pdf" size={24} color="#e74c3c" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
    padding: 10,
    backgroundColor: '#0c0a3e',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  backButton: {
    padding: 10,
  },
  content: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modeloItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  modeloText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#e74c3c',
    marginRight: 10,
  },
});
