import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

// Components imports 

// Screens imports 
import HomeScreen from './src/screens/Home.Screen';
import FormScreen from './src/screens/Form.Screen';

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={ HomeScreen } options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={ HomeScreen } options={{ headerShown: false }} />
          <Stack.Screen name='Form' component={ FormScreen } options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}