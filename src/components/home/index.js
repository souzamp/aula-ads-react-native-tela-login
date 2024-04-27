import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, SimpleLineIcons, Octicons, Ionicons } from '@expo/vector-icons';

import CursoScreen from '../curso';
import CarteiraDigitalScreen from '../carteira-digital';
import SolicitacoesScreen from '../solicitacoes';
import BibliotecaScreen from '../biblioteca';
import LinksScreen from '../links';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Meu Curso" component={CursoScreen} options={{ tabBarIcon: () => <AntDesign name="swap" size={24} color="black" /> }} />
            <Tab.Screen name="Carteira digital" component={CarteiraDigitalScreen} options={{ tabBarIcon: () => <SimpleLineIcons name="wallet" size={24} color="black" /> }} />
            <Tab.Screen name="Solicitações" component={SolicitacoesScreen} options={{ tabBarIcon: () => <Octicons name="list-ordered" size={24} color="black" /> }} />
            <Tab.Screen name="Biblioteca" component={BibliotecaScreen} options={{ tabBarIcon: () => <Ionicons name="library-outline" size={24} color="black" /> }} />
            <Tab.Screen name="Links Úteis" component={LinksScreen} options={{ tabBarIcon: () => <AntDesign name="link" size={24} color="black" /> }} />
        </Tab.Navigator>
    )
}