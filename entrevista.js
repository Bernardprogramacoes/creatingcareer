import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function EntrevistaScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 4) setCurrentPage(currentPage + 1); 
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderPageContent = () => {
    if (currentPage === 1) {
      return (
        <>
          <Text style={styles.sectionTitle}>Guia para uma Entrevista Profissional de Sucesso</Text>
          <Text style={styles.text}>
            A entrevista de emprego representa uma etapa crucial no processo de seleção, onde sua habilidade de comunicação,
            profissionalismo e preparação são testados. Para garantir uma experiência bem-sucedida, algumas diretrizes podem ser seguidas:
          </Text>
          <Text style={styles.text}>
            Preparação Antecipada: Pesquise sobre a empresa, sua cultura organizacional, e o cargo específico para o qual está se
            candidatando. Conhecer detalhes sobre a missão, visão e valores da empresa demonstra interesse genuíno e preparação.
          </Text>
          <Text style={styles.text}>
            Apresentação Pessoal: A vestimenta deve refletir o ambiente corporativo da empresa. Opte por roupas conservadoras e
            adequadas ao cargo pretendido. Cuidados com higiene pessoal e uma postura confiante são igualmente importantes.
          </Text>
          <Text style={styles.text}>
            Pontualidade: Chegue à entrevista alguns minutos antes do horário marcado. Isso não apenas demonstra respeito pelo tempo
            do entrevistador, mas também mostra sua capacidade de organização e comprometimento.
          </Text>
          <Text style={styles.text}>
            Comunicação Eficaz: Durante a entrevista, seja claro e objetivo ao responder às perguntas. Demonstre suas habilidades e
            experiências relevantes de forma articulada, utilizando exemplos concretos sempre que possível.
          </Text>
          <Text style={styles.text}>
            Demonstração de Interesse: Faça perguntas pertinentes sobre a empresa e o papel que você desempenhará. Isso não apenas
            mostra seu interesse na posição, mas também sua disposição para contribuir de maneira significativa.
          </Text>
          <Text style={styles.text}>
            Postura Profissional: Mantenha uma postura corporal aberta e receptiva. Olhe nos olhos do entrevistador enquanto fala e
            evite gestos que possam transmitir nervosismo ou desinteresse.
          </Text>
          <Text style={styles.text}>
            Agradecimento: Após a entrevista, envie uma nota de agradecimento por e-mail ao entrevistador, agradecendo pela
            oportunidade e reiterando seu interesse na posição.
          </Text>
        </>
      );
    } else if (currentPage === 2) {
      return (
        <>
          <Text style={styles.sectionTitle}>Curiosidade</Text>
          <Text style={styles.text}>
            Você sabia que a prática de enviar notas de agradecimento após entrevistas de emprego começou nos Estados Unidos?
            Essa prática se tornou uma norma de etiqueta profissional, refletindo o apreço pelo tempo investido pelos
            entrevistadores e reforçando o interesse genuíno do candidato na posição.
          </Text>
          <Text style={styles.text}>
            Lembre-se, uma entrevista é uma oportunidade para mostrar não apenas suas habilidades técnicas, mas também suas
            qualidades pessoais e profissionais. Ao seguir estas diretrizes, você estará mais preparado para impressionar
            durante o processo seletivo.
          </Text>
        </>
      );
    } else if (currentPage === 3) {
      return (
        <>
          <Text style={styles.sectionTitle}>Vestimentas</Text>
          <Text style={styles.text}>
            Na escolha da vestimenta para uma entrevista, é essencial considerar a impressão que você deseja causar e a cultura
            da empresa onde está se candidatando. Aqui estão algumas diretrizes gerais que podem ajudá-lo a escolher a vestimenta
            adequada:
          </Text>
          <Text style={styles.text}>
            Pesquise a Cultura da Empresa: Antes da entrevista, procure informações sobre a cultura da empresa. Algumas
            organizações têm um ambiente mais formal, onde ternos e roupas corporativas são esperados, enquanto outras têm uma
            abordagem mais casual.
          </Text>
          <Text style={styles.text}>
            Opte por Roupas Conservadoras: Em geral, é mais seguro escolher roupas que sejam conservadoras e profissionais. Para
            homens, isso pode significar um terno bem cortado ou calça social e camisa com uma gravata. Para mulheres, um
            tailleur, um vestido ou uma combinação de calça e blusa são opções adequadas.
          </Text>
          <Text style={styles.text}>
            Cores e Estilo: Cores neutras como preto, cinza, azul-marinho e bege são sempre seguras. Evite padrões muito
            chamativos ou cores fluorescentes que possam distrair. O estilo deve ser sóbrio e adequado ao ambiente corporativo.
          </Text>
          <Text style={styles.text}>
            Cuidado com os Detalhes: Certifique-se de que suas roupas estejam limpas, passadas e em bom estado. Sapatos devem estar
            limpos e em bom estado de conservação. Acessórios como cintos, bolsas e jóias devem ser discretos e não devem chamar
            mais atenção do que você.
          </Text>
          <Text style={styles.text}>
            Adapte-se ao Cargo: Se estiver se candidatando para um cargo mais criativo ou em uma startup com uma cultura mais
            descontraída, você pode ajustar sua vestimenta para refletir isso, mantendo sempre um padrão de aparência
            profissional.
          </Text>
          <Text style={styles.text}>
            Conforto e Confiança: Escolha roupas nas quais você se sinta confortável e que transmitam confiança. Isso ajudará você
            a se concentrar na entrevista sem se preocupar com sua aparência.
          </Text>
          <Text style={styles.text}>
            Lembre-se de que a vestimenta é uma parte importante da sua apresentação pessoal em uma entrevista. Ela não apenas
            demonstra respeito pela oportunidade, mas também mostra seu entendimento sobre os padrões profissionais da empresa. Ao
            escolher a vestimenta certa, você estará mais preparado para causar uma primeira impressão positiva e destacar suas
            qualificações durante a entrevista.
          </Text>
        </>
      );
    } else if (currentPage === 4) {
      return (
        <>
          <Text style={styles.sectionTitle}>Modelos de Entrevista</Text>
          <Text style={styles.text}>
            Veja alguns exemplos de entrevistas:
          </Text>
          <TouchableOpacity style={styles.articleContainer}>
            <Image source={{ uri: '.' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Artigo 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.articleContainer}>
            <Image source={{ uri: '.' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Artigo 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.articleContainer}>
            <Image source={{ uri: '.' }} style={styles.articleImage} />
            <Text style={styles.articleTitle}>Artigo 3</Text>
          </TouchableOpacity>
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
        <Text style={styles.title}>Entrevista</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        {renderPageContent()}

        <View style={styles.navigationButtons}>
          {currentPage > 1 && (
            <TouchableOpacity style={styles.buttonNav} onPress={handlePreviousPage}>
              <Icon name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
          )}

          {currentPage < 4 && (  
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
  articleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  articleImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
