# Nexus Gamer Web v0.3 — Contas e Servidores

## Incluído
- Cadastro/login com senhas protegidas por bcrypt e sessões JWT de 7 dias.
- Servidores com convites, membros e cargos (dono/membro).
- Canais de texto e voz cadastráveis pelo dono (voz real ainda não implementada).
- Mensagens em tempo real via Socket.IO, persistidas no PostgreSQL.
- API e sockets verificam associação ao servidor antes de ler/enviar mensagens.

## Publicar no Render
1. Substitua os arquivos antigos do repositório GitHub pelos arquivos **extraídos** deste ZIP, todos na raiz. Exclua versões antigas de `src/` ou `server/` se houver. `main.jsx` e `server.cjs` ficam na raiz.
2. Crie um banco **Render Postgres** (se disponível na sua conta) e copie a **Internal Database URL**. Banco de dados pode ter custo conforme o plano.
3. No Web Service `discordbr`, em **Environment**, crie:
   - `DATABASE_URL` = URL interna do banco PostgreSQL.
   - `JWT_SECRET` = texto aleatório longo com pelo menos 32 caracteres. Mantenha em segredo e não envie ao GitHub.
4. Build Command: `npm install && npm run build`
5. Start Command: `npm start`
6. Faça Manual Deploy > Deploy latest commit.

A primeira inicialização cria as tabelas automaticamente. Não precisa executar SQL manualmente.

## Rodar localmente (opcional)
Configure `DATABASE_URL` e `JWT_SECRET` no ambiente, execute `npm install`, `npm run build` e `npm start`.

## Limitações atuais
- Voz e compartilhamento de tela reais não estão implementados. Os canais de voz são apenas estrutura visual.
- Não há recuperação de senha por e-mail, moderação avançada ou proteção antispam completa. Para lançamento público, adicionar rate limiting, HTTPS, observabilidade, regras de abuso e controle de sessões.
- O JWT é salvo no localStorage nesta versão inicial; para produção pública, prefira cookies HttpOnly/SameSite e CSRF protection.
- O PostgreSQL deve ser mantido ativo; sem ele o serviço não inicia. Faça backups periódicos.
