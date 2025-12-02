import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../App";

type ResumoTarefaRouteProp = RouteProp<StackParamList, "ResumoTarefa">;

export default function ResumoTarefaScreen() {
  const route = useRoute<ResumoTarefaRouteProp>();
  const navigation = useNavigation();
  const { titulo, descricao, status } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />

      <View style={styles.card}>
        <Text style={styles.tituloTela}>Resumo da Tarefa</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Título:</Text>
          <Text style={styles.valor}>{titulo}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.valor}>{descricao}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Status:</Text>
          <Text style={styles.valorStatus}>{status}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a7dcffff",
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#dff9ffff",
    width: "85%",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloTela: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  campo: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  valor: {
    fontSize: 18,
    color: "#000",
    marginTop: 5,
  },
  valorStatus: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginTop: 5,
  },
  botaoVoltar: {
    marginTop: 30,
    backgroundColor: "#75b5ffff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: "#000",
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
