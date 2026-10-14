# Nexus Gamer v0.9.2 — Transmissão limpa

Quando um usuário compartilha a tela, o vídeo passa a ocupar toda a área da chamada acima da barra de controles. Os cartões dos participantes e controles individuais de volume ficam ocultos **apenas enquanto a transmissão está ativa**. O nome de quem transmite e o botão de tela cheia aparecem ao passar o mouse sobre o vídeo ou focar o botão pelo teclado. Ao encerrar o compartilhamento, a grade de participantes volta automaticamente.

Não houve alteração nas rotas de API, nas tabelas PostgreSQL ou na integração LiveKit. O volume dos participantes continua ajustável quando não há transmissão ativa.

## Publicação

Faça backup da versão atual; envie os arquivos do ZIP extraído para a raiz do repositório GitHub e publique o último commit no Render. Mantenha as variáveis de ambiente existentes. Depois faça atualização forçada da página (Ctrl+Shift+R).

## Testes recomendados

1. Entrar com duas contas no mesmo canal de voz.
2. Compartilhar a tela em uma delas e observar na outra que o vídeo ocupa a área principal, sem cartões abaixo.
3. Passar o mouse sobre o vídeo para acessar o botão de tela cheia.
4. Encerrar a transmissão e verificar que os cartões retornam.
5. Confirmar que o áudio e a barra inferior continuam funcionando.
