import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";

export default function FormularioTarefaScreen() {
  const [tituloHeight, setTituloHeight] = useState(40);
  const [descricaoHeight, setDescricaoHeight] = useState(40);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("Pendente");

  function criarTarefa() {
    router.push({
      pathname: "/resumo-tarefa",
      params: {
        titulo,
        descricao,
        status,
      },
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.imagemLogin}
          source={require("../../assets/images/logo.png")}
        />

        <View style={styles.formulario}>
          <Text style={styles.titulo}>Crie sua tarefa</Text>

          <Text style={styles.tituloInput}>Título</Text>
          <TextInput
            multiline
            value={titulo}
            onChangeText={setTitulo}
            onContentSizeChange={(e) => {
              setTituloHeight(e.nativeEvent.contentSize.height);
            }}
            style={[styles.input, { height: tituloHeight }]}
            placeholder="Título da tarefa"
            autoComplete="additional-name"
          />

          <Text style={styles.tituloInput}>Descrição</Text>
          <TextInput
            multiline
            value={descricao}
            onChangeText={setDescricao}
            onContentSizeChange={(e) => {
              setDescricaoHeight(e.nativeEvent.contentSize.height);
            }}
            style={[styles.input, { height: descricaoHeight }]}
            placeholder="Descrição para sua tarefa"
          />

          <Text style={styles.tituloInput}>Status</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={status}
              onValueChange={(itemValue) => setStatus(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Pendente" value="Pendente" />
              <Picker.Item label="Em andamento" value="Em andamento" />
              <Picker.Item label="Concluída" value="Concluída" />
              <Picker.Item label="Cancelada" value="Cancelada" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.botao} onPress={criarTarefa}>
            <Text style={styles.botaoTexto}>Criar Tarefa</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a7dcffff",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },

  imagemLogin: {
    height: 130,
    width: 130,
    marginBottom: 30,
    marginTop: 30,
  },

  formulario: {
    alignItems: "center",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 16,
  },

  tituloInput: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 5,
  },

  input: {
    minHeight: 40,
    width: 350,
    padding: 10,
    backgroundColor: "#dff9ffff",
    marginBottom: 12,
    borderWidth: 0.7,
    borderRadius: 10,
    textAlignVertical: "top",
    fontSize: 18,
  },

  pickerContainer: {
    width: 350,
    backgroundColor: "#dff9ffff",
    marginBottom: 12,
    borderWidth: 0.7,
    borderRadius: 10,
    justifyContent: "center",
  },

  picker: {
    width: "100%",
    height: 50,
  },

  botao: {
    width: 150,
    marginTop: 15,
    backgroundColor: "#75b5ffff",
    padding: 10,
    borderColor: "#000000ff",
    borderWidth: 0.7,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },

  botaoTexto: {
    color: "#000000ff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
