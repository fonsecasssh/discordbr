# Nexus Gamer Web — versão navegador

Aplicativo web de comunidade gamer com canais de texto e mensagens em tempo real.

## Publicar no Render (sem usar terminal no PC)
1. Extraia este ZIP e envie os arquivos para um repositório novo no GitHub, mantendo as pastas `src` e `server`.
2. No Render, selecione **New > Web Service**, conecte o repositório GitHub.
3. Runtime: **Node**; Build Command: `npm install && npm run build`; Start Command: `npm start`.
4. Selecione o plano disponível e clique em **Deploy Web Service**.
5. Ao concluir, abra o endereço `https://...onrender.com` exibido pelo Render.

Há também `render.yaml` para implantação por Blueprint.

## Funcionalidades atuais
- Interface com canais de texto, nome local do jogador e chat via Socket.IO.
- Mensagens em tempo real entre usuários conectados à **mesma instância** do servidor.
- Captura de tela **somente local** (não transmite para outros usuários).
- Canais de voz são **apenas interface**; não há áudio entre usuários.

## Limitações importantes
- Não há autenticação, persistência de mensagens, criação de servidores, permissões ou voz real.
- Mensagens ficam somente em memória e são perdidas ao reiniciar o servidor.
- O modo demonstração local permite mensagens no próprio navegador quando a API está offline; não sincroniza com outros usuários.
- O plano gratuito do Render pode suspender a instância inativa e causar atrasos na reconexão.
- Para comunidade pública, implementar login, controle de abuso, banco de dados e servidor de mídia antes de liberar amplamente.

## Rodar localmente (opcional)
`npm install`, `npm run build`, `npm start`.
