# Nexus Gamer v0.4 — voz e compartilhamento de tela

Atualização baseada na v0.3 enviada pelo usuário. Preserva endpoints, tabelas PostgreSQL, contas, servidores, convites, canais e mensagens. Adiciona integração de salas de voz e compartilhamento de tela via LiveKit (SFU).

## Atualização no GitHub e Render

1. Faça backup do repositório atual. Extraia o ZIP e envie TODOS os arquivos para a raiz do mesmo repositório GitHub, substituindo os existentes. Não envie a pasta `node_modules`.
2. No Render, mantenha o Web Service existente e as variáveis `DATABASE_URL` e `JWT_SECRET`. Não crie outro banco.
3. Crie um projeto LiveKit Cloud em https://cloud.livekit.io e obtenha WebSocket URL (`wss://...`), API Key e API Secret. Os planos e limites dependem do provedor.
4. Em Render > discordbr > Environment, adicione:
   - `LIVEKIT_URL` = URL WebSocket do LiveKit (`wss://...`)
   - `LIVEKIT_API_KEY` = chave de API
   - `LIVEKIT_API_SECRET` = segredo da API
   Nunca publique essas credenciais no GitHub ou envie em prints.
5. No Render, Build Command: `npm install && npm run build`; Start Command: `npm start`. Faça deploy da última versão.
6. Teste em duas contas distintas, com dois navegadores ou PCs e fones de ouvido para evitar eco. Acesse o mesmo canal de voz, autorize o microfone, teste silenciar e compartilhar tela.

## Arquitetura e segurança

- A API `/api/voice/token` exige JWT de login, valida a participação no servidor e que o canal seja do tipo `voice` antes de emitir um token LiveKit de 2 horas restrito à sala.
- A mídia passa pelo LiveKit; não pelo PostgreSQL nem pelo Web Service Render. O servidor do Render só emite tokens autorizados.
- O compartilhamento usa a API de captura do navegador; requer HTTPS e permissão explícita do usuário.
- Se as três variáveis LIVEKIT não forem configuradas, chat, contas e servidores continuam operando, mas entrar em voz exibe mensagem de configuração.
- Não há gravação de voz/tela. Não há moderação de transmissões, limites de participantes ou controles de volume por usuário nesta versão.
- Antes de uso público, implemente rate limiting, verificação de e-mail, recuperação de conta, moderação e testes de carga.

## Testes

Foi feita verificação de sintaxe de `server.cjs`. O build completo não pôde ser executado neste ambiente por indisponibilidade da instalação de dependências. Verifique o resultado do build no Render antes de considerar a atualização validada.
