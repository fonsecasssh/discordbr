# Nexus Gamer Web v0.6 — comunidades e social

Atualização incremental da v0.5. Preserva as tabelas existentes e adiciona `friendships` e `direct_messages` automaticamente na inicialização do servidor.

## Recursos
- Cadastro/login, servidores, convites, chat em tempo real, voz e transmissão via LiveKit (herdados da v0.5).
- Buscar jogadores por nome, enviar/aceitar/remover solicitações de amizade.
- Mensagens privadas persistidas no PostgreSQL e entregues por Socket.IO em tempo real.
- Editar nome do servidor (proprietário), definir cargos de membros (proprietário), remover membros (proprietário/administrador com restrições), excluir canais (proprietário/administrador).
- Interface escura refinada com janela de amigos, mensagens privadas e gerenciamento.

## Deploy no Render
1. **Faça backup** do repositório e do banco antes de atualizar. A exclusão de canais remove também as mensagens do canal.
2. Extraia e envie todos os arquivos **na raiz** do repositório, inclusive `SocialPanel.jsx` e `VoiceRoom.jsx`.
3. Mantenha as variáveis `DATABASE_URL`, `JWT_SECRET`, `LIVEKIT_URL`, `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET` no Web Service.
4. Build: `npm install && npm run build`; Start: `npm start`.
5. Verifique os logs, entre com duas contas e teste amizades, DMs e cargos.

## Limitações e segurança
- Ainda não há sistema de bloqueio, denúncias, moderação automática, redefinição de senha, verificação de e-mail ou controle de presença online dos amigos.
- O papel `moderator` está armazenado e visível, mas ainda não recebe ações administrativas específicas. Ações administrativas atuais são de owner/admin conforme as rotas.
- DMs são persistidas, mas **não** usam criptografia de ponta a ponta.
- A aplicação não foi validada em produção neste ambiente; teste em staging antes de substituir seu serviço.
- O PostgreSQL Free do Render expira: planeje backup/migração.


## v0.7 — Nova interface de chamadas
- Grade responsiva de participantes, avatares grandes, destaque de quem está falando.
- Barra inferior de controles e botão de desconexão.
- Transmissão em destaque e modo tela cheia.
- Controles existentes de microfone, qualidade, volumes e LiveKit preservados.
- Não altera tabelas, rotas ou variáveis de ambiente.


## v0.7.1 — Interface de chamada
- Barra de controles visível no rodapé sem rolagem, inclusive em telas menores.
- Tela cheia aplicada à chamada inteira (inclui controles).
- Cartões maiores, responsivos, com destaque animado para participante falando.
- Compartilhamento com layout adaptativo e alternância grade/foco.
- Painel de ajustes sobreposto para não deslocar os controles.
- Sem alterações no banco de dados ou nas variáveis de ambiente.

Valide voz, compartilhamento e controles em dois navegadores antes de publicar em produção.

## v0.9 — Personalização
- Configurações do servidor: foto/ícone (PNG/JPEG/WebP até 180 KB), banner (até 420 KB), nome e descrição (até 500 caracteres).
- Perfil: foto de usuário até 160 KB.
- As imagens são armazenadas em colunas TEXT do PostgreSQL como data URLs, solução adequada a protótipos e imagens pequenas. Para escala, migrar para object storage (S3/R2).
- Migração aditiva automática ao iniciar o servidor; nenhuma tabela é apagada.
- Apenas o dono pode editar a identidade do servidor; cada usuário só pode alterar a própria foto.
- Faça backup do PostgreSQL antes do deploy. As imagens são validadas por formato, assinatura e tamanho.
- A compilação Vite não foi validada localmente por indisponibilidade da instalação de dependências; verificar logs de build no Render.
