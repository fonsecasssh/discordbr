# Nexus Gamer v0.5 — melhorias de voz e transmissão

Atualização incremental baseada na v0.4. Preserva `server.cjs`, rotas de contas, PostgreSQL, canais e mensagens. **Não apague o banco nem redefina `DATABASE_URL` e `JWT_SECRET`.**

## Novidades
- Borda verde para participantes que estão falando, usando eventos do LiveKit.
- Volume individual de participantes remotos, aplicado aos elementos de áudio recebidos.
- Botão de tela cheia para transmissões recebidas.
- Seleção de microfone, com cancelamento de eco, supressão de ruído e ganho automático do navegador.
- Seleção de qualidade de captura de tela (480p/720p/1080p; sujeita às limitações do navegador e da rede).
- Painel de ajustes dentro da chamada.

## Implantação no Render
1. Faça backup da v0.4 no GitHub.
2. Extraia este ZIP e envie todos os arquivos para a **raiz** do repositório, substituindo os antigos.
3. Render Web Service: `npm install && npm run build` e `npm start`.
4. Mantenha `DATABASE_URL`, `JWT_SECRET`, `LIVEKIT_URL`, `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET` já configuradas. Evite definições conflitantes no serviço e no Environment Group.
5. Deploy latest commit. Teste com duas contas e fones de ouvido.

## Observações
- Volume individual só afeta áudio remoto, não a própria voz.
- Troca de dispositivo de saída de som permanece nas configurações do navegador/sistema.
- Supressão de ruído depende do navegador/dispositivo, não é processamento dedicado por IA.
- Resolução solicitada não garante a resolução entregue.
- Cargos, amigos e mensagens privadas **não** foram adicionados nesta versão; exigem alterações de API e esquema.
- O pacote foi preparado sem testar uma chamada LiveKit em produção. Se falhar, restaure o commit anterior no GitHub.
