import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen 
            name="Escudo" 
            component={EscudoScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="shield" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen 
            name="Jogadores" 
            component={JogadoresScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen 
            name="Títulos" 
            component={TitulosScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy" color={color} size={size} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
