import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function CartaDeApresentacaoScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 3) setCurrentPage(currentPage + 1); 
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderPageContent = () => {
    if (currentPage === 1) {
      return (
        <>
          <Text style={styles.sectionTitle}>O QUE É?</Text>
          <Text style={styles.text}>
            Geralmente o currículo e a carta de apresentação são pedidos no mesmo momento de um processo seletivo, 
            que costuma ser na primeira etapa. A carta de apresentação é uma forma de te conhecer ainda mais, 
            portanto, ela serve como um complemento ao currículo e ajuda a empresa a traçar o seu perfil de forma mais completa.
          </Text>

          
          <View style={styles.divider} />

        </>
      );
    } else if (currentPage === 2) {
      return (
        <>
          <Text style={styles.sectionTitle}>COMO FAZER?</Text>
          <Text style={styles.text}>
            Saiba que a carta de apresentação não é um documento que deve conter muitos 
            páginas, é recomendado que ela contenha, no máximo, uma página inteira.
          </Text>
          
          
          <View style={styles.divider} />

          <Text style={styles.text}>
            Isso porque a empresa não terá tempo de ler longos textos, então foque nas informações mais importantes e saiba como resumi-las.
          </Text>
          
          
          <View style={styles.divider} />

          <Text style={styles.text}>
            Fale apenas o que você realmente sabe ou viveu. Muito cuidado com informações falsas, só fale de experiências que você realmente viveu e de habilidades que você de fato possui.
          </Text>
        </>
      );
    } else if (currentPage === 3) {
      return (
        <>
          <Text style={styles.sectionTitle}>MODELO</Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Andressa de Souza</Text>{'\n'}
            Auxiliar Administrativa{'\n'}
            Telefone: (11) 99999 - 9999{'\n'}
            E-mail: andressa.souza@email.com{'\n\n'}
            Prezados(as),{'\n\n'}
            Me encantei pela vaga de Auxiliar Administrativa, oferecida pela empresa (inserir nome da empresa), pois acredito que a minha formação, graduação, e oportunidade de participar de alguns projetos, se alinham diretamente ao perfil da vaga.
          </Text>
          
          
          <View style={styles.divider} />

          <Text style={styles.text}>
            Durante a minha passagem pela empresa Júnior e no projeto de pesquisa, obtive experiência sólida e prática em processos administrativos e no suporte ao departamento de pessoal, além de utilizar sistemas ERP e gestão de banco de dados, que acredito que serão úteis para contribuir como Auxiliar Administrativo.
          </Text>

          
          <View style={styles.divider} />

          <Text style={styles.text}>
            Além disso, essa oportunidade me chamou a atenção por estar diretamente conectada ao histórico da empresa X e seus valores, que prezam por inovação, qualidade e desenvolvimento humano. Me identifico com essas causas e acredito que poderei somar muito ao time, pois os valores se conectam com os meus princípios pessoais e profissionais.
          </Text>

          
          <View style={styles.divider} />

          <Text style={styles.text}>
            Gostaria de uma oportunidade de entrevista para falar sobre como eu posso contribuir para a empresa e ajudar na construção desse projeto.
          </Text>

          <Text style={styles.text}>Atenciosamente,{'\n'}Andressa de Souza</Text>
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Carta de Apresentação</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        {renderPageContent()}

        <View style={styles.navigationButtons}>
          {currentPage > 1 && (
            <TouchableOpacity style={styles.buttonNav} onPress={handlePreviousPage}>
              <Icon name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          )}

          {currentPage < 3 && (
            <TouchableOpacity style={styles.buttonNav} onPress={handleNextPage}>
              <Icon name="arrow-right" size={24} color="#fff" />
            </TouchableOpacity>
          )}
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
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
          <Icon name="user" size={24} color="#fff" />
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
    height: 60,
    backgroundColor: '#0c0a3e',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0c0a3e',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonNav: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0c0a3e',
    borderRadius: 5,
  },
  bottomMenu: {
    height: 60,
    backgroundColor: '#0c0a3e',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    alignItems: 'center',
  },
});
