# 📱 Task Control - Documentação do Projeto

Este documento serve como guia para a apresentação do projeto **Task Control**, detalhando como cada requisito da avaliação prática foi atendido.

---

## 🎯 Objetivo do App
O **Task Control** é um aplicativo para gerenciamento de tarefas que permite ao usuário criar uma nova tarefa (com título, descrição e status) e visualizar um resumo dos dados inseridos em uma nova tela.

---

## 🚀 Requisitos Atendidos

### 1. Estratégia de Navegação 
O projeto foi migrado para utilizar o **Expo Router**, que utiliza uma estratégia de roteamento baseada em arquivos (File-based routing), similar ao Next.js. Isso simplifica a navegação e a estrutura do projeto.

**Onde encontrar no código:**
- Arquivo: `app/_layout.tsx`
- O diretório `app/` define as rotas da aplicação.
- O arquivo `_layout.tsx` configura a pilha de navegação (`Stack`).

```tsx
// Exemplo simplificado do app/_layout.tsx
<Stack>
  <Stack.Screen name="index" options={{ headerShown: false }} />
  <Stack.Screen name="tarefas/criar" options={{ title: "Nova Tarefa" }} />
  <Stack.Screen name="resumo-tarefa" options={{ title: "Resumo" }} />
</Stack>
```

### 2. Passagem e Tratamento de Parâmetros
Os dados preenchidos no formulário são enviados para a tela de resumo através da função `router.push` do Expo Router.

**Envio (app/tarefas/criar.tsx):**
Ao clicar em "Criar Tarefa", os estados `titulo`, `descricao` e `status` são passados como parâmetros na URL/rota.
```tsx
router.push({
  pathname: "/resumo-tarefa",
  params: {
    titulo,
    descricao,
    status,
  },
});
```

**Recebimento (app/resumo-tarefa.tsx):**
Na tela de destino, usamos o hook `useLocalSearchParams` para acessar os parâmetros recebidos.
```tsx
const { titulo, descricao, status } = useLocalSearchParams();
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

- `app/_layout.tsx`: Configuração principal do layout e rotas.
- `app/index.tsx`: Redirecionamento inicial.
- `app/tarefas/criar.tsx`: Tela com o formulário de cadastro de tarefas.
- `app/resumo-tarefa.tsx`: Tela de detalhes que exibe os dados cadastrados.

---

## 🛠️ Como Rodar o Projeto

Para iniciar o projeto em seu ambiente de desenvolvimento:

1.  Abra o terminal na pasta do projeto.
2.  Execute o comando:
    ```bash
    npx expo start
    ```
3.  Escaneie o QR Code com o aplicativo **Expo Go** no seu celular (Android ou iOS).
