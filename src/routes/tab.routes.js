import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../components/home';
import Main from '../components/main';
import Title from '../components/title';
import Cadastro from '../components/cadastro';

const Stack = createNativeStackNavigator();

function Login() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

export default function TabRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Cadastro'
        component={Cadastro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAA520',
    paddingTop: 80
  }
});
