import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Animated, Easing, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function HomeScreen({ navigation }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(-250)).current;

  const toggleDrawer = () => {
    if (isDrawerOpen) {
      Animated.timing(drawerAnimation, {
        toValue: -250,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start(() => setIsDrawerOpen(false));
    } else {
      setIsDrawerOpen(true);
      Animated.timing(drawerAnimation, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      {isDrawerOpen && (
        <TouchableOpacity style={styles.overlay} onPress={toggleDrawer}>
        </TouchableOpacity>
      )}

      
      <Animated.View style={[styles.drawer, { left: drawerAnimation }]}>
        
        <View style={styles.profileSection}>
          <Icon name="user-circle" size={50} color="#0c0a3e" />
          <Text style={styles.profileName}>Alicia Stefany</Text>
          <Text style={styles.viewProfile}>ver perfil</Text>
        </View>
        <View style={styles.divider} />

        
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Materiais')}>
          <Text style={styles.drawerText}>Materiais de Apoio</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Notificacoes')}>
          <Text style={styles.drawerText}>Notificações</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Comentarios')}>
          <Text style={styles.drawerText}>Comentários</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        
        <View style={styles.premiumSection}>
          <Text style={styles.premiumTitle}>Área Premium</Text>

          
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('CursosPremium')}>
            <Icon name="star" size={24} color="#0c0a3e" />
            <Text style={styles.drawerText}>Cursos (Premium)</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('OutrosPremium')}>
            <Text style={styles.drawerText}>Outros Recursos (Premium)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        
        <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Configuracoes')}>
          <Icon name="cog" size={24} color="#0c0a3e" />
          <Text style={styles.drawerText}>Configurações</Text>
        </TouchableOpacity>
      </Animated.View>

      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuIcon}>
          <Feather name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise Vagas"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Feather name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      
      <View style={styles.dividerTopBar} />

      
      <Text style={styles.welcomeTitle}>Seja Bem-Vindo (a)!</Text>

      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.card}>
          <Text style={styles.textJustified}>
            Está enfrentando dificuldades para ingressar no mercado de trabalho?
          </Text>
        </View>

        
        <View style={[styles.card, styles.cardMiddle]}>
          <Text style={styles.textJustified}>
            Aqui serão desenvolvidas suas habilidades e qualificações profissionais, com cursos, materiais de apoio e muito mais!
          </Text>
        </View>

        
        <View style={[styles.card, styles.cardBottom]}>
          <Text style={styles.textJustified}>
            Explore e conheça os nossos recursos para te ajudar na procura de emprego.
          </Text>
        </View>

        
        <View style={styles.interactiveCard}>
          <Image
            style={styles.cardImage}
            source={{ uri: 'https://via.placeholder.com/150' }}
          />
          <Text style={styles.cardTitle}>Materiais de Apoio</Text>
          <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Materiais')}>
            <Text style={styles.cardButtonText}>Acessar Materiais</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.interactiveCard}>
          <Image
            style={styles.cardImage}
            source={{ uri: 'https://via.placeholder.com/150' }}
          />
          <Text style={styles.cardTitle}>Cursos</Text>
          <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Cursos')}>
            <Text style={styles.cardButtonText}>Acessar Cursos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      
      <View style={styles.dividerBottomMenu} />

      
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notificacoes')}>
          <Feather name="bell" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Comunidade')}>
          <Feather name="heart" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Premium')}>
          <Feather name="star" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0a3e',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#0c0a3e',
  },
  menuIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 40,
    paddingLeft: 20,
    paddingRight: 40,
    color: '#000',
  },
  searchIconContainer: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  dividerTopBar: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#3b4f6b',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  cardMiddle: {
    backgroundColor: '#2b3d59',
  },
  cardBottom: {
    backgroundColor: '#3b4f6b',
  },
  textJustified: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'justify',
  },
  interactiveCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 10,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0c0a3e',
    paddingVertical: 10,
  },
  menuItem: {
    padding: 10,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#ffffff',
    elevation: 5,
    padding: 20,
    zIndex: 2, 
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1, 
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewProfile: {
    color: '#007bff',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  drawerText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0c0a3e',
  },
  premiumSection: {
    marginTop: 10,
    padding: 10,
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dividerBottomMenu: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
});
