import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import PerfilScreen from '../perfil';
import ConfiguracoesScreen from '../configuracoes';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Perfil" component={PerfilScreen}/>
        <Drawer.Screen name="Configurações" component={ConfiguracoesScreen} />
      </Drawer.Navigator>
  );
}