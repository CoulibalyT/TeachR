import CustomSlider from "./components/CreateCaroussel/customSlider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageNav from "./components/PageNav";
import PageConnect from "./components/PageConnect";
import List from "./components/List";
import PageUpdate from "./components/PageUpdate";



// import Header from './components/header';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Teach'rs"
          component={PageNav}
          options={{ headerBackVisible: true }}
        />
        <Stack.Screen
          name="Accueil"
          component={CustomSlider}
          options={{ headerBackVisible: true }}
        />
        <Stack.Screen
          name="Connection"
          component={PageConnect}
          options={{ headerBackVisible: true }}
        />
        <Stack.Screen
          name="Liste des Teachrs"
          component={List}
          options={{ headerBackVisible: true }}
        />
             <Stack.Screen
          name="Modifier un profil"
          component={PageUpdate}
          options={{ headerBackVisible: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

