import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import CadastroScreen1 from './cadastros/CadastroScreen1';
import CadastroScreen2 from './cadastros/CadastroScreen2';
import CadastroScreen3 from './cadastros/CadastroScreen3';
import LoginScreen from './cadastros/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MateriaisScreen from './materialdeapoio/MateriaisScreen';
import CursosScreen from './materialdeapoio/CursosScreen';
import VagasScreen from './materialdeapoio/VagasScreen';
import CurriculoScreen from './materialdeapoio/CurriculoScreen';
import ModelosCurriculo from './materialdeapoio/ModelosCurriculo';
import EntrevistaScreen from './materialdeapoio/EntrevistaScreen';
import ConfiguracoesScreen from './menuvertical/ConfiguracoesScreen';
import NotificacoesScreen from './menuinferior/NotificacoesScreen'; 
import CartaDeApresentacaoScreen from './materialdeapoio/cartadeapresentacao';
import Comunidade from './menuinferior/Comunidade'; 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Drawer.Screen 
        name="Materiais" 
        component={MateriaisScreen} 
        options={{ headerShown: false }}
      />
      <Drawer.Screen 
        name="Cursos" 
        component={CursosScreen} 
        options={{ headerShown: false }}
      />
      <Drawer.Screen 
        name="Vagas" 
        component={VagasScreen} 
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}


function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notificacoes') {
            iconName = 'bell';
          } else if (route.name === 'Materiais') {
            iconName = 'book';
          } else if (route.name === 'Cursos') {
            iconName = 'list';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#0c0a3e',
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Notificacoes" 
        component={NotificacoesScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Materiais" 
        component={MateriaisScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Cursos" 
        component={CursosScreen} 
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro1">
        <Stack.Screen 
          name="Cadastro1" 
          component={CadastroScreen1} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Cadastro2" 
          component={CadastroScreen2} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Cadastro3" 
          component={CadastroScreen3} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainDrawer" 
          component={MainDrawer}  
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainTab" 
          component={MainTab}  
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Curriculo" 
          component={CurriculoScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ModelosCurriculo" 
          component={ModelosCurriculo} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Entrevista" 
          component={EntrevistaScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Configuracoes" 
          component={ConfiguracoesScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="CartaDeApresentacao" 
        component={CartaDeApresentacaoScreen} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="Notificacoes" 
        component={NotificacoesScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Comunidade" 
        component={Comunidade} 
        options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
