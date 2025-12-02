# 📱 Task Control - Documentação do Projeto

Este documento serve como guia para a apresentação do projeto **Task Control**, detalhando como cada requisito da avaliação prática foi atendido.

---

## 🎯 Objetivo do App
O **Task Control** é um aplicativo para gerenciamento de tarefas que permite ao usuário criar uma nova tarefa (com título, descrição e status) e visualizar um resumo dos dados inseridos em uma nova tela.

---

## 🚀 Requisitos Atendidos

### 1. Estratégia de Navegação 
O projeto utiliza a biblioteca **React Navigation** com a estratégia **Native Stack** (`@react-navigation/native-stack`). Isso permite empilhar telas, onde uma nova tela é colocada sobre a anterior, criando uma navegação fluida e nativa.

**Onde encontrar no código:**
- Arquivo: `App.tsx`
- O `NavigationContainer` envolve toda a aplicação.
- O `Stack.Navigator` define as rotas disponíveis: `FormularioTarefa` e `ResumoTarefa`.

```tsx
// Exemplo simplificado do App.tsx
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="FormularioTarefa" component={FormularioTarefaScreen} />
    <Stack.Screen name="ResumoTarefa" component={ResumoTarefaScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

### 2. Passagem e Tratamento de Parâmetros
Os dados preenchidos no formulário são enviados para a tela de resumo através da função `navigation.navigate`.

**Envio (FormularioTarefaScreen.tsx):**
Ao clicar em "Criar Tarefa", os estados `titulo`, `descricao` e `status` são passados como um objeto.
```tsx
navigation.navigate("ResumoTarefa", {
  titulo,
  descricao,
  status,
});
```

**Recebimento (ResumoTarefaScreen.tsx):**
Na tela de destino, usamos o hook `useRoute` para acessar os parâmetros recebidos (`route.params`).
```tsx
const route = useRoute<ResumoTarefaRouteProp>();
const { titulo, descricao, status } = route.params;
```

### 3. Componentes Utilizados
O app faz uso de diversos componentes nativos do React Native para compor a interface:

- **Imagem (`<Image />`)**: Exibe o logo do aplicativo na tela inicial e no resumo.
- **Texto (`<Text />`)**: Usado para títulos, rótulos e exibição de informações.
- **Campo de Texto (`<TextInput />`)**: Permite a entrada do título e descrição da tarefa.
- **Botão (`<TouchableOpacity />`)**: Componente tocável usado para criar os botões "Criar Tarefa" e "Voltar".
- **Picker (`<Picker />`)**: Componente extra utilizado para selecionar o status da tarefa (Pendente, Em andamento, etc.).

### 4. Layout e Organização
O layout foi construído utilizando **Flexbox** para alinhamento e distribuição dos elementos.

- **Estilização**: Todo o estilo é separado no objeto `StyleSheet` no final de cada arquivo, mantendo o código organizado.
- **Responsividade e Usabilidade**:
    - **`ScrollView`**: Permite rolar a tela caso o conteúdo seja maior que o dispositivo.
    - **`KeyboardAvoidingView`**: Garante que o teclado não cubra os campos de entrada ao digitar.

---

## 📂 Estrutura de Arquivos Importantes

- `App.tsx`: Configuração principal da navegação.
- `src/screens/FormularioTarefaScreen.tsx`: Tela inicial com o formulário de cadastro.
- `src/screens/ResumoTarefaScreen.tsx`: Tela de detalhes que exibe os dados cadastrados.

---

## 🛠️ Como Rodar o Projeto

Para iniciar o projeto em seu ambiente de desenvolvimento:

1.  Abra o terminal na pasta do projeto.
2.  Execute o comando:
    ```bash
    npx expo start
    ```
3.  Escaneie o QR Code com o aplicativo **Expo Go** no seu celular (Android ou iOS).
