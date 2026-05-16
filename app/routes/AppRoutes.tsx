import { NavigationContainer } from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Register"
          component={Cadastro}
        />

        <Stack.Screen
         name="Home"
         component={Home}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}