# 📅 Tasks App (To-Do List)

Website de um organizador de tarefas (to-do list) feito com React JS, Tailwind CSS, TypeScript, Redux Toolkit e mais.

![página inicial](https://github.com/aridsm/tasks-app/blob/master/public/To-Do%20List%20_%20All%20tasks.png)

## Descrição

- Aplicado de organizar suas tarefas com os seguintes dados: título, descrição, data, marcar como completo e marcar como importante. 
- As tarefas são organizadas em rotas: tarefas de hoje, tarefas importantes, incompletas, completas, todas as tarefas e tarefas por diretório (pasta). Os diretórios e as tarefas podem ser editados ou excluídos. Além disso, há um diretório principal chamado "Main" que não pode ser editado ou excluído.
- A lista de tarefas pode ser exibida primeiro em: mais próximas, mais distantes, completas ou incompletas.
- Você pode pesquisar por alguma tarefas no campo de pesquisa.
- As tarefas de hoje são mostradas na seção do usuário e nas notificações.
- Os dados de tarefas, diretórios e darkmode são salvos no localStorage.

## Objetivo

O projeto teve principalmente como objetivo pôr em prática conhecimentos de TypeScript, Tailwind, Redux Toolkit e React Js.

## Ferramentas utilizadas

- React JS
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- HTML
- Figma (prototipagem)

## Como testar

Você pode acessar o projeto aqui: https://tasks-app-aridsm.netlify.app/

Ou rodar na sua máquina: 

``` 
git clone https://github.com/aridsm/tasks-app.git
cd tasks-app
npm install
npm start
```

## Observações

- Os dados de tarefas, diretórios e darkmode ficam salvos no localStorage do seu navegador. Você pode clicar no botão "delete all data" para removê-los do localStorage.
- Para fins demonstrativos, o aplicativo possui uma lista padrão de 3 tarefas e 1 diretório chamado "Main".
