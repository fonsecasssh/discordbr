# Nexus Gamer v1.0 — Interface Premium

Base: v0.9.4. Atualização de interface, sem migração do banco e sem mudanças nas rotas de API ou integração LiveKit.

## Novidades
- Sistema visual mais refinado para canais, servidores, chat e membros.
- Busca rápida de canais: Ctrl+K (ou Cmd+K), Escape para fechar.
- Cartão de perfil de membros ao clicar na lista lateral.
- Ações ao passar o mouse nas mensagens: responder com menção e copiar texto.
- Estados de foco acessíveis e animações discretas.

## Implantação
1. Faça backup do código e dos dados antes de atualizar.
2. Extraia o ZIP e envie os arquivos na raiz do repositório GitHub.
3. No Render, mantenha DATABASE_URL, JWT_SECRET e credenciais LIVEKIT existentes.
4. Use `npm install && npm run build` e `npm start`.
5. Teste com duas contas: login, chat, amigos, canais, voz e transmissão.

## Limites
- Responder com menção insere @usuário no campo; não cria uma estrutura de respostas encadeadas no banco.
- Cartão de perfil exibe informações já disponíveis; não introduz nova API.
- Não foi possível executar o build completo neste ambiente; valide o deploy antes de substituir o serviço principal.
