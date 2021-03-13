<h1 align="center">
    <img src="public/logo-full.svg" alt="Logo do povi" />
</h1>

<p align="center" >
<a href="#Tecnologias">Tecnologias</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#Funcionalidades">Funcionalidades</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#Deploy e demonstração">Deploy e demonstração</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#Executando a aplicação">Executando a aplicação</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#Licença">Licença</a>
</p>



O povi é uma aplicação de produtividade que uni a técnica de Pomodoro com exercícios para o corpo e para os olhos.

A técnica de Pomodoro consiste em ciclos com foco total na atividade que está sendo executada intercalados com período de descanso.

Ao fim de cada ciclo são realizados os exercícios citados acima. O objetivo desses exercícios é garantir que no período que o usuário estar sentado em frente ao computador ele realize alguma movimentação. Isso é importante para evitar que o usuário tenha problemas de saúde por estar longos períodos de tempo sem realizar nenhuma movimentação.

Com o objetivo de motivar o usuário a realizar os exercícios, foi incorporado gameficação na aplicação por meio de uma barra de experiência e level que evoluem conforme o usuário completa os desafios e de um histórico de desafios completados.



<h1 align="center">
    <img src="public/screenshots/apresentacao-desktop.png" alt="Screenshot da tela inicial na versão Desktop" />
</h1>



<h1 align="center">
    <img src="public/screenshots/apresentacao-mobile.png" alt="Screenshot da tela inicial na versão Mobile" />
</h1>




# ![mortar_board](https://github.githubassets.com/images/icons/emoji/unicode/2699.png)Tecnologias



- [React.js](https://reactjs.org) e hooks [useState](https://reactjs.org/docs/hooks-state.html#gatsby-focus-wrapper), [useEffect](https://reactjs.org/docs/hooks-effect.html) e useContext.
- [Typescript](https://www.typescriptlang.org/).
- [Next.js](https://nextjs.org/).
- [js-cookie](https://github.com/js-cookie/js-cookie).



# ![computer](https://github.githubassets.com/images/icons/emoji/unicode/1f680.png)Funcionalidades



- Iniciar um ciclo de 25 minutos.
- Abandonar um ciclo.
- Propostas de desafios para exercitar o corpo e os olhos ao fim de cada ciclo.
- Ganhar experiência e subir de level completando os desafios.
- Controlar se o som das notificações estará ativo ou mutado.
- Notificação informando que faltam 10 minutos para o fim do ciclo.
- Notificação informando que faltam 5 minutos para o fim do ciclo.



# Deploy e demonstração

Para realizar o deploy da aplicação [clique aqui](https://povi.vercel.app/).



## ![computer](https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png)Desktop

### Iniciando um ciclo

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/iniciando-um-ciclo-desktop.gif" alt="Demonstração de como iniciar um ciclo - versão Desktop" />
</h1>



### Abandonando um ciclo

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/abandonando-um-ciclo-desktop.gif" alt="Demonstração de como abandonar um ciclo - versão Desktop" />
</h1>



### Completando um desafio

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/completando-um-desafio-desktop.gif" alt="Demonstração de como completar um desafio - versão Desktop" />
</h1>



### Falhando em um desafio

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/falhando-em-um-desafio-desktop.gif" alt="Demonstração de como falhar em um desafio - versão Desktop" />
</h1>



### Subindo de level

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/subindo-de-level-desktop.gif" alt="Demonstração do evento de subir de level - versão Desktop" />
</h1>



### Controlando o som das notificações

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/controlando-o-som-das-notificacoes-desktop.gif" alt="Demonstração de controlar o som das notificações - versão Desktop" />
</h1>



## ![smartphone](https://github.githubassets.com/images/icons/emoji/unicode/1f4f1.png)Mobile

### Iniciando um ciclo

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/iniciando-um-ciclo-mobile.gif" alt="Demonstração de como iniciar um ciclo - versão Mobile" />
</h1>



### Abandonando um ciclo

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/abandonando-um-ciclo-mobile.gif" alt="Demonstração de como abandonar um ciclo - versão Mobile" />
</h1>



### Completando um desafio

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/completando-um-desafio-mobile.gif" alt="Demonstração de como completar um desafio - versão Mobile" />
</h1>



### Falhando em um desafio

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/falhando-em-um-desafio-mobile.gif" alt="Demonstração de como falhar em um desafio - versão Mobile" />
</h1>



### Subindo de level

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/subindo-de-level-mobile.gif" alt="Demonstração do evento de subir de level - versão Mobile" />
</h1>



### Controlando o som das notificações

<h1 align="center">
    <img src="public/demonstracao-das-funcionalidades/controlando-o-som-das-notificacoes-mobile.gif" alt="Demonstração de controlar o som das notificações - versão Mobile" />
</h1>



# ![arrow_forward](https://github.githubassets.com/images/icons/emoji/unicode/25b6.png)Executando a aplicação

```bash
# Clone esse repositório
$ git clone https://github.com/EmanuelLacerda/povi.git

# Acesse a pasta no projeto
$ cd povi

# Instale as dependências
$ npm install
# or
$ npm install -g yarn

# Execute a aplicação em modo desenvolvedor
$ npm run dev
# or
$ yarn dev

# A porta do servidor irá abrir no console: https://localhost:3000
```



# ![memo](https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png)Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/EmanuelLacerda/nome-do-repositorio/blob/main/LICENSE) para mais detalhes.

------

Projeto desenvolvido por **[Emanuel de Souza Lacerda](https://github.com/EmanuelLacerda/)**

