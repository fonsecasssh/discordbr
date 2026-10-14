# Nexus Gamer v1.2 — Chat e Perfis Premium

Implementado: edição e exclusão das próprias mensagens, respostas com referência, reações persistentes, banner de perfil, biografia e status personalizado.

Migração: apenas ALTER TABLE ADD COLUMN IF NOT EXISTS e CREATE TABLE IF NOT EXISTS; nenhuma tabela existente é apagada.

Segurança: autorização por participação no servidor e autoria para edição/exclusão; reações permitidas apenas a membros.

Limitações: upload de GIF/arquivos, menções inteligentes, mensagens fixadas, indicador de digitação e pesquisa histórica ainda não foram implementados. O recurso de resposta exibe referência, sem prévia do conteúdo original.
