# TaskFlow — Trabalho do Dashboard (Next.js)

Aplicação demonstrativa criada para a atividade acadêmica: tela de login, dashboard e tela de listagem navegável.

## Pré-requisitos

- Windows, Linux ou macOS
- Node.js 20.9 ou superior (recomendado: versão LTS atual)
- npm
- VS Code (opcional)

## Instalação no Windows

1. Extraia o ZIP.
2. Abra a pasta `taskflow-hackathon` no VS Code.
3. Abra o terminal (Terminal > Novo Terminal).
4. Execute:

```powershell
npm install
npm run dev
```

5. Acesse http://localhost:3000

Se a porta 3000 estiver ocupada, o terminal mostrará outra porta.

## Acesso demonstrativo

E-mail: `admin@taskflow.com`  
Senha: `123456`

## Rotas

- `/` — login
- `/dashboard` — cartões de indicadores, atividades recentes e gráfico de progresso
- `/tarefas` — listagem, filtro por status, pesquisa e avanço de status

## Funcionalidades

- Login demonstrativo com validação de credenciais fixas.
- Redirecionamento para o dashboard.
- Bloqueio visual das páginas internas quando não há sessão local.
- Listagem de tarefas, busca e filtro por status.
- Inclusão de tarefa por formulário.
- Atualização de status (Pendente → Em andamento → Concluída).
- Indicadores atualizados conforme tarefas mudam.
- Persistência das tarefas e da sessão no LocalStorage do navegador.
- Botão sair.
- Layout responsivo.

## Aviso importante

Autenticação baseada em LocalStorage e credenciais no código é **somente demonstração de interface**, não é segura para produção. Não utilize dados ou senhas reais. Para uso real, implemente autenticação no servidor e banco de dados.

## Build de produção

```powershell
npm run build
npm run start
```

## Sugestão de roteiro de apresentação

1. Explique que o TaskFlow organiza atividades de uma equipe.
2. Mostre a tela de login e entre usando o acesso demonstrativo.
3. Apresente os quatro indicadores e a distribuição por status no dashboard.
4. Clique em 'Ver todas' para abrir a página de listagem.
5. Faça uma busca ou filtre por status.
6. Crie uma tarefa e avance seu status; volte ao dashboard para mostrar atualização dos números.
7. Clique em 'Sair da conta'.
8. Ao final, informe a nota de 0 a 10 que vocês acreditam merecer, justificando brevemente.

## Prints solicitados

Capture a tela de login e a tela de dashboard com `Win + Shift + S` e envie conforme orientação do professor.

## Estrutura

```
app/
  layout.tsx
  globals.css
  page.tsx
  dashboard/page.tsx
  tarefas/page.tsx
components/
  Workspace.tsx
lib/
  data.ts
```
