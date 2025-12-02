import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormularioTarefaScreen from "./src/screens/FormularioTarefaScreen";
import ResumoTarefaScreen from "./src/screens/ResumoTarefaScreen";

export type StackParamList = {
  FormularioTarefa: undefined;
  ResumoTarefa: {
    titulo: string;
    descricao: string;
    status: string;
  };
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="FormularioTarefa"
          component={FormularioTarefaScreen}
        />

        <Stack.Screen 
          name="ResumoTarefa" 
          component={ResumoTarefaScreen} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
