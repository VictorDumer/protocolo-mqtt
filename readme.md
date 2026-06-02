
# Protocolo MQTT - Aplicativo Mobile

Este projeto é um aplicativo móvel desenvolvido em React Native com o auxílio do Expo. A proposta principal é criar um cliente MQTT capaz de interagir com dispositivos de Internet das Coisas (IoT), permitindo tanto o monitoramento de sensores quanto o envio de comandos para atuadores diretamente pelo celular.

Além da comunicação em tempo real via MQTT, o projeto utiliza uma API simulada para armazenar ou consultar dados persistentes locais.

---

## O que o aplicativo faz

O objetivo do sistema é estabelecer uma comunicação direta com um Broker MQTT e uma API de suporte. A partir disso, o usuário pode:

* **Se inscrever em tópicos** específicos para receber dados atualizados de sensores em tempo real, como temperatura, umidade ou presença.
* **Publicar mensagens** em tópicos de controle para acionar dispositivos externos, como ligar uma lâmpada ou ativar um motor.
* **Consumir uma API local** para ler ou salvar configurações e históricos de uso.

---

## Tecnologias utilizadas

A escolha das ferramentas buscou agilidade no desenvolvimento e portabilidade entre plataformas:

* **React Native e Expo:** Para a construção e execução do aplicativo em dispositivos Android e iOS.
* **JavaScript:** Linguagem base do projeto.
* **json-server:** Uma ferramenta que cria uma API REST completa e simulada a partir de um arquivo JSON local.
* **ngrok:** Um serviço de tunelamento que expõe servidores locais para a internet, permitindo que o aplicativo no celular acesse a API do computador.

---

## Configuração das Variáveis de Ambiente

O aplicativo utiliza variáveis de ambiente para gerenciar as credenciais do servidor MQTT e o endereço da API. Na raiz do projeto, você encontrará um arquivo chamado `.env.example`. 

Para que o aplicativo funcione corretamente, faça uma cópia desse arquivo, renomeie-a apenas para `.env` e preencha os valores conforme a sua estrutura:

```text
EXPO_PUBLIC_MQTT_HOST=BROKER-URL        # O endereço do seu servidor MQTT (ex: broker.hivemq.com)
EXPO_PUBLIC_MQTT_PORT=BROKER-PORT        # A porta de conexão (geralmente portas WebSocket como 8083 ou 443)
EXPO_PUBLIC_MQTT_PATH=/mqtt              # O caminho padrão de conexão para WebSockets
EXPO_PUBLIC_MQTT_USER=BROKER-USERNAME    # Usuário do broker (deixe em branco se for público)
EXPO_PUBLIC_MQTT_PASS=BROKER-PASSWORD    # Senha do broker (deixe em branco se for público)
EXPO_PUBLIC_ADDRESS=NGROK-URL            # A URL gerada pelo ngrok que aponta para o seu json-server

```

*Nota: O prefixo `EXPO_PUBLIC_` é obrigatório para que o Expo consiga ler as variáveis dentro do código do aplicativo.*

---

## Como configurar os Serviços Auxiliares

Para que o aplicativo consiga realizar requisições HTTP para a API simulada a partir de um celular físico, você precisará rodar o `json-server` e o `ngrok` em paralelo.

### 1. Configurando o json-server

O `json-server` vai simular o seu banco de dados. Caso ainda não tenha instalado globalmente, você pode executá-lo diretamente via npx.

No seu terminal, execute o comando apontando para o arquivo de dados do seu projeto (normalmente um arquivo chamado `db.json` na raiz):

```bash
npx json-server db.json --port 3000

```

Isso iniciará um servidor local na porta 3000. Não feche este terminal.

### 2. Configurando o ngrok

Como o celular e o computador precisam se comunicar, o `ngrok` criará um link público seguro para a sua porta local 3000.

Em um novo terminal, execute:

```bash
nrok http 3000

```

O terminal do ngrok exibirá algumas informações na tela. Procure pela linha que começa com **Forwarding** (algo como `https://a1b2-34-56-78.ngrok-free.app`).

Copie essa URL gerada pelo ngrok e cole-a no seu arquivo `.env` na variável `EXPO_PUBLIC_ADDRESS`.

---

## Como rodar o projeto principal

Com o `.env` configurado, o `json-server` ativo e o `ngrok` rodando, siga os passos abaixo para iniciar o aplicativo:

1. Clone este repositório para a sua máquina (caso ainda não tenha feito):
```bash
git clone https://github.com/VictorDumer/protocolo-mqtt.git

```


2. Acesse a pasta do projeto:
```bash
cd protocolo-mqtt

```


3. Instale todas as dependências necessárias do app:
```bash
npm install

```


4. Inicie o servidor de desenvolvimento do Expo:
```bash
npx expo start

```



> Abra o aplicativo **Expo Go** no seu celular e escaneie o QR Code que apareceu no terminal para carregar o sistema e seja feliz :)
