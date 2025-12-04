import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="tarefas/criar" options={{ title: "Nova Tarefa", headerShown: false }} />
      <Stack.Screen name="resumo-tarefa" options={{ title: "Resumo", headerShown: false }} />
    </Stack>
  );
}
