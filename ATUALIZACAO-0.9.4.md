# Nexus Gamer v0.9.4 — chamada persistente

- Clicar em #geral ou em outros canais de texto não desconecta do LiveKit.
- Botão **Voltar à chamada** no cabeçalho do chat.
- Ao atualizar com F5, o aplicativo recupera o servidor e a sala de voz da sessão e tenta reconectar automaticamente.
- A conexão só é encerrada ao clicar em Desconectar, trocar de servidor, ou sair da conta.
- A sessão ativa fica guardada em sessionStorage (somente nesta aba). Não armazena credenciais LiveKit.

**Observação:** após F5 o navegador cria uma nova conexão LiveKit; o microfone pode exigir nova permissão/gesto dependendo do navegador. Uma transmissão de tela em andamento precisa ser iniciada novamente após o F5, por segurança do navegador.

## Deploy
Substitua os arquivos no repositório e faça Manual Deploy no Render. Não requer novas variáveis de ambiente nem migrações SQL.
