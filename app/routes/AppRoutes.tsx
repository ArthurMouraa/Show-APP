import { NavigationContainer } from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import NewShow from '../screens/NewShow';
import ShowDetails from '../screens/ShowDetails';
import Profile from '../screens/Profile';


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

        <Stack.Screen
         name="NewShow"
         component={NewShow}
        />

        <Stack.Screen
         name="ShowDetails"
         component={ShowDetails}
        />

        <Stack.Screen
         name="Profile"
         component={Profile}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}