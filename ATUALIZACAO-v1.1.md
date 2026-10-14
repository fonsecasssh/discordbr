# Nexus Gamer v1.1 — Chamadas Premium

Base: v1.0. Backend (`server.cjs`), PostgreSQL e credenciais LiveKit inalterados.

- Picture-in-Picture para transmissões recebidas, quando suportado pelo navegador.
- Push-to-Talk nas configurações de voz, com teclas Espaço, V, T ou Ctrl esquerdo; não dispara ao digitar no chat.
- Controles individuais de volume opcionais (configurações de voz).
- Indicador visual pulsante de quem está falando, respeitando preferência por movimento reduzido.
- Acessibilidade e adaptação dos controles em telas menores.

Limitações: F5 encerra a sessão WebRTC atual e depende da lógica de reconexão já presente na v1.0. O compartilhamento local precisa ser reiniciado após recarregar. Picture-in-Picture depende do navegador e de existir uma transmissão de vídeo recebida. Push-to-Talk funciona enquanto a aba tem foco.

Teste com duas contas antes de publicar em produção.
