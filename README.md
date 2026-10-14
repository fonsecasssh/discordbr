# Nexus Gamer — MVP 0.1

Aplicativo desktop Windows para comunidades gamers. Interface React + Electron e servidor Socket.IO.

## Executar

Instale Node.js 20+ e execute:

```bash
npm install
npm run server
```

Em outro terminal:

```bash
npm run dev
```

Para usar a interface apenas no navegador: `npm run web`.

## Gerar instalador Windows

No Windows, execute `npm run build`. O instalador será gerado em `release/`. O ZIP **não contém o .exe compilado**.

## Conectar amigos

Hospede o servidor Node.js com HTTPS e configure `VITE_API_URL` para o endereço público da API antes de compilar o cliente. Configure `CLIENT_ORIGIN` com a origem do frontend web. Para a versão desktop, será necessário revisar a política CORS do servidor.

## Estado das funcionalidades

- Implementado: interface desktop, navegação entre canais, chat local e chat em tempo real via Socket.IO, alteração de apelido, layout responsivo, base Electron.
- Protótipos locais: alternar microfone/áudio (somente estado da interface), entrada em canais de voz (sem áudio entre usuários), captura de tela local (sem transmissão remota).
- Ainda não implementado: login seguro, banco persistente, servidores multiusuário reais, autorização, mensagens privadas, moderação, voz WebRTC/LiveKit, streaming remoto, anexos, notificações, pesquisa e convites.

**Atenção:** o backend atual guarda mensagens em memória, não autentica usuários e não deve ser exposto publicamente como serviço de produção. Antes de publicar, implemente autenticação, autorização, limites de requisição, validação e persistência.
