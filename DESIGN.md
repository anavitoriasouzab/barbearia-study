---
name: Barbearia Barba Brava
description: Landing page de barbearia em penumbra, com pretos quentes, um único acento em Couro Cru e tipografia condensada em caixa-alta.
colors:
  couro-cru: "#D7C4A3"
  creme-espuma: "#F3E6CA"
  carvao: "#0A0908"
  carvao-alto: "#100E0C"
  carvao-hover: "#14110E"
  tabaco: "#17130F"
  branco: "#FFFFFF"
  osso: "#EDE6DA"
  pedra: "#B8AE9E"
  fumo: "#A79C8C"
  cinza-tabaco: "#9E9484"
  cinza-sombra: "#6E655A"
  filete: "rgba(215,196,163,0.16)"
  contorno: "rgba(215,196,163,0.35)"
  whatsapp: "#25D366"
typography:
  display:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 8vw, 6.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "0.005em"
  headline:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.3rem, 4.8vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.16
  title:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "1.65rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.02em"
  figure:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.65rem, 4.4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
  button:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.1em"
  nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  control: "6px"
  slot: "7px"
  field: "8px"
  panel: "12px"
  card: "14px"
  pill: "100px"
  round: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  gutter: "clamp(20px, 5vw, 64px)"
  section: "clamp(80px, 11vh, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.couro-cru}"
    textColor: "{colors.tabaco}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.couro-cru}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.couro-cru}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "56px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.couro-cru}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  input:
    backgroundColor: "rgba(10,9,8,0.6)"
    textColor: "{colors.branco}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "52px"
  card-servico:
    backgroundColor: "{colors.carvao}"
    textColor: "{colors.cinza-tabaco}"
    rounded: "{rounded.card}"
    padding: "28px 26px 30px"
  card-depoimento:
    backgroundColor: "rgba(103,94,86,0.14)"
    textColor: "#F1EAE0"
    rounded: "{rounded.panel}"
    padding: "34px 30px"
  slot-horario:
    backgroundColor: "transparent"
    textColor: "{colors.osso}"
    rounded: "{rounded.slot}"
    height: "36px"
  slot-horario-selected:
    backgroundColor: "{colors.couro-cru}"
    textColor: "{colors.tabaco}"
  nav-link:
    textColor: "{colors.osso}"
    typography: "{typography.nav}"
    padding: "6px 0"
  nav-link-hover:
    textColor: "{colors.couro-cru}"
  whatsapp-fab:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.branco}"
    rounded: "{rounded.round}"
    size: "58px"
---

# Design System: Barbearia Barba Brava

## Overview

**Creative North Star: "Navalha na Penumbra"**

A página é uma barbearia com a luz baixa. O fundo é quase preto e quente, como madeira escura e couro envelhecido sob uma lâmpada fraca, e a luz cai só onde o olho precisa: o título, o preço, o botão de agendar. Tudo o que não é essencial recua para tons de fumo e cinza-tabaco; o que importa acende em Couro Cru ou branco. O contraste é a hierarquia.

A densidade é generosa e ritmada: seções altas com respiro vertical grande, uma coluna de conteúdo de até 1440px, títulos condensados em caixa-alta que ocupam espaço com autoridade. Fotos reais de atendimento fazem o papel de cenário, sempre escurecidas por gradientes para o texto ler por cima. O vídeo do poste de barbeiro tem o fundo gravado na própria cor da página: objeto solto na penumbra, sem moldura.

O movimento é de revelação, não de espetáculo: linhas do título sobem de trás de uma máscara, blocos entram com um deslize curto de baixo para cima, as fotos do hero se sucedem com zoom lento. Tudo respeita `prefers-reduced-motion`. Rejeições confirmadas: nada de barbearia de template hipster (madeira, bigode, clip-art vintage, fonte estêncil de faroeste) e nada de visual de salão unissex claro (fundo branco, tons pastel).

**Key Characteristics:**
- Fundo sempre escuro e quente; nenhuma seção clara.
- Um único acento, Couro Cru, usado em filetes, durações, destaques de título e no CTA.
- Big Shoulders Display condensada em caixa-alta para toda voz de título; Archivo para leitura e controles.
- Divisões por filetes de 1px, não por blocos de cor.
- Componentes firmes e diretos: pílulas cheias, maiúsculas espaçadas, contraste alto.
- Relevo neutro que responde ao gesto: superfícies planas em repouso, que se erguem no hover.

## Colors

Paleta de pretos quentes com um único acento cor de couro claro; tudo puxa para o marrom, nunca para o cinza frio.

### Primary
- **Couro Cru** (#D7C4A3): o acento da casa. Fundo do botão principal, durações dos serviços, filetes decorativos, ícones do poste, destaque de palavra dentro de títulos ("impõe", "acabamento moderno."). Em opacidade reduzida vira a linguagem de linhas (ver Filete e Contorno).
- **Creme Espuma** (#F3E6CA): Couro Cru clareado. Preço em destaque nos cards de serviço, hover de links, título de abertura das vantagens e dia selecionado no calendário. Nunca como fundo de área grande.

### Neutral
- **Carvão** (#0A0908): fundo da página e dos cards de serviço. A cor em que o vídeo do poste está gravado.
- **Carvão Alto** (#100E0C): fundo alternado de seções (serviços, galeria, faixa de marquee, rodapé), um degrau acima do Carvão.
- **Carvão Hover** (#14110E): superfície de card de vantagem ao passar o mouse.
- **Tabaco** (#17130F): texto sobre Couro Cru (botão principal, selo "Mais pedido", horário selecionado) e fundo da seção do mapa.
- **Branco** (#FFFFFF): títulos (display, headline, title) e texto digitado em campos.
- **Osso** (#EDE6DA): texto de interface: links do menu, rótulos de formulário, valores de horário.
- **Pedra** (#B8AE9E): parágrafos longos e links do rodapé.
- **Fumo** (#A79C8C): legendas de estatística, autor de depoimento.
- **Cinza-Tabaco** (#9E9484): texto de apoio dentro de cards de serviço e vantagem, placeholder dos campos, iniciais dos dias no calendário, frase e copyright do rodapé. É o tom mais escuro permitido para texto pequeno.
- **Cinza Sombra** (#6E655A): exclusivo do trecho apagado de títulos grandes ("cada corte carrega"), onde o contraste de 3.4:1 atende texto grande.
- **Filete** (rgba(215,196,163,0.16)): linhas divisórias de 1px entre seções, faixas e listas. Variações de 0.14 a 0.2 cumprem o mesmo papel.
- **Contorno** (rgba(215,196,163,0.35)): borda de campos, chips e botões secundários. Variações de 0.28 a 0.5 cumprem o mesmo papel; sobe para Couro Cru cheio no foco e no hover.

### Functional
- **Verde WhatsApp** (#25D366): exclusivo do botão flutuante do WhatsApp, com seu pulso. Não entra em nenhum outro elemento. O botão só aparece depois que o hero sai da tela.

### Named Rules
**The Penumbra Rule.** Toda superfície é Carvão, Carvão Alto ou Tabaco. Não existe seção clara; imagens de fundo entram sempre sob um gradiente de Carvão (0.7 a 0.97).

**The One Leather Rule.** Couro Cru é o único acento. Uma segunda cor de destaque, gradiente dourado ou metálico é proibido. O verde do WhatsApp é função, não acento.

**The Legible Smoke Rule.** Texto pequeno (abaixo de 18px) usa no mínimo Cinza-Tabaco (#9E9484, 6.6:1 sobre Carvão). Cinza Sombra (#6E655A, 3.4:1) não serve para texto pequeno.

## Typography

**Display Font:** Big Shoulders Display (com Arial Narrow e sans-serif)
**Body Font:** Archivo (com system-ui e sans-serif)

**Character:** Big Shoulders Display é a voz de letreiro: condensada, alta e seca, com traço industrial que dá atitude sem cair no vintage de barbearia de modelo pronto. Archivo é uma grotesca firme e um pouco estreita, que lê bem em fundo escuro e segura os rótulos em caixa-alta espaçada. Carregadas do Google Fonts só nos pesos usados: Big Shoulders Display 600, 700 e 800; Archivo 400, 500, 600 e 700.

### Hierarchy
- **Display** (Big Shoulders Display 800, clamp(3rem, 8vw, 6.5rem), altura de linha 0.98, caixa-alta): só o título do hero, quebrado em três linhas mascaradas que sobem na entrada.
- **Headline** (Big Shoulders Display 800, clamp(2.3rem, 4.8vw, 4rem), 1.16, caixa-alta): todo título de seção usa exatamente este tamanho. Uma parte da frase pode ir em Couro Cru.
- **Title** (Big Shoulders Display 700, 1.55 a 1.65rem, 1.2, espaçamento 0.02em, caixa-alta): nome de serviço e de vantagem.
- **Figure** (Big Shoulders Display 800, clamp(2.65rem, 4.4vw, 3.75rem), 1): números de destaque ("5+", "5.0") e, em 1.65rem, preços.
- **Body** (Archivo 400, 1.1rem, 1.65): parágrafos de seção, largura máxima de 460 a 520px (cerca de 60ch).
- **Body-sm** (Archivo 400, 1rem, 1.65): texto dentro de cards. É o menor tamanho de texto corrido.
- **Label-sm** (Archivo 600, 12px, 0.12em, caixa-alta): chips, rótulos de formulário, selos.
- **Button** (Archivo 700, 14px, 0.1em, caixa-alta) e **Nav** (Archivo 500, 14px, 0.14em, caixa-alta).
- **Detalhe** (Big Shoulders Display 700, cerca de 1rem, espaçamento 0.12 a 0.16em, caixa-alta): durações, dias da semana do horário de funcionamento, títulos do rodapé.

### Named Rules
**The Condensed Voice Rule.** Todo título fala em Big Shoulders Display caixa-alta. Archivo nunca faz papel de título, e Big Shoulders nunca é usada em parágrafo.

**The Spaced Caps Rule.** Texto pequeno em caixa-alta sempre leva espaçamento de 0.1em ou mais; texto em caixa-baixa nunca leva espaçamento extra.

**The 11px Floor.** Nenhum texto funcional abaixo de 11px, nem em selos.

## Layout

Container central de até 1440px com margem lateral fluida (clamp(20px, 5vw, 64px)) e respiro vertical de seção clamp(80px, 11vh, 140px). Seções de duas colunas usam grid auto-fit com mínimo de 320px por coluna (sobre, agendamento, mapa), então viram uma coluna sozinhas em telas estreitas. Listas de cards usam auto-fit com mínimo de 240 a 290px.

Ritmo de espaçamento em degraus de 8, 12, 16 e 24px dentro de componentes; entre título de seção e conteúdo, 52 a 60px. Faixas de marquee (serviços correndo em Big Shoulders Display, com o ícone do poste como separador) quebram o ritmo entre seções.

Pontos de quebra observados: 760px (menu some, hero baixa para 78vh, cabeçalho deixa de ser fixo), 560px (calendário e horários empilham, horários sem rolagem interna) e 480px (campos do formulário em uma coluna, hifenização em parágrafos).

## Elevation & Depth

Profundidade é, antes de tudo, tonal: Carvão, Carvão Alto e Tabaco em camadas, separados por filetes. Sobre essa base, a direção confirmada é de **mais relevo**: elementos interativos se erguem quando tocados, com deslocamento para cima e sombra preta difusa, como um objeto físico levantado da bancada. Em repouso, tudo é plano; fotos que flutuam (coverflow, lightbox) são a única exceção de sombra permanente.

Aplicado: cards de serviço sobem 8px com a sombra de foto flutuante; botões sobem 2 a 3px com a sombra de botão flutuante.

### Shadow Vocabulary
- **Foto flutuante** (`box-shadow: 0 20px 50px rgba(0,0,0,.5)`): slides do coverflow da galeria.
- **Foto em foco** (`box-shadow: 0 30px 80px rgba(0,0,0,.6)`): imagem aberta na lightbox.
- **Botão flutuante** (`box-shadow: 0 10px 28px rgba(0,0,0,.45)`): botão do WhatsApp; também a referência para botões e cards erguidos no hover.

### Named Rules
**The Neutral Lift Rule.** Sombra é sempre preta (rgba(0,0,0,0.45 a 0.6)), com deslocamento vertical e desfoque grande. Brilho colorido em Couro Cru é proibido, inclusive no botão principal do hero.

**The Gesture Lift Rule.** Relevo responde a gesto: repouso plano, hover e foco erguem (translateY de 2 a 8px mais sombra neutra). Nada fica permanentemente elevado, exceto fotos flutuantes e o botão do WhatsApp.

## Shapes

Duas famílias de forma convivem. Controles de ação são pílulas completas (100px): botões, chips, selo "Mais pedido". Contêineres têm cantos suavemente arredondados: 14px nos cards de serviço, no formulário e nos slides da galeria; 12px nos painéis internos (calendário, depoimentos, lightbox); 8px nos campos; 6 a 7px nos controles pequenos do calendário e nos horários. Elementos circulares (50%) só para botões de ícone: setas da galeria, redes sociais, WhatsApp.

Bordas são sempre de 1px em Couro Cru translúcido (Filete ou Contorno); não há borda grossa. O ícone do poste de barbeiro (símbolo SVG `bb-pole`) é a única figura gráfica recorrente, usada como separador nas faixas de marquee.

## Components

### Buttons
Firmes e diretos: pílula cheia, maiúsculas espaçadas, contraste alto.
- **Shape:** pílula completa (100px), altura mínima de 56px.
- **Primary:** fundo Couro Cru, texto Tabaco, Archivo 700 14px com 0.1em, padding horizontal de 30px, seta "→" à direita. Usado para "Agende seu horário" e para enviar o formulário.
- **Hover / Focus:** inverte para fundo transparente com texto e borda Couro Cru e sobe 2 a 3px (transição de 0.25s). Pela direção de relevo, soma sombra neutra de botão flutuante.
- **Ghost:** transparente, borda Contorno, texto Couro Cru; no hover a borda vira Couro Cru cheio e o fundo ganha 8% de Couro Cru. Usado em "Ver serviços" e em "Como chegar" (com o ícone de alfinete à esquerda). Variante compacta de 46px no rodapé ("Agendar agora").
- **Link de ação:** "Agendar →" em label 12px 700 0.16em Couro Cru, sem borda; no hover o espaço até a seta abre de 10 para 16px.

### Chips
- **Style:** pílula de contorno (rgba(215,196,163,0.3)), texto Couro Cru em label-sm, padding de 10 por 18px, sem fundo.
- **State:** estáticos, informativos ("Navalha quente", "Hora marcada"). Não são filtros.

### Cards / Containers
- **Card de serviço:** fundo Carvão, borda Filete (0.18), cantos de 14px, foto de 240px no topo que dá zoom de 1.06 no hover; corpo com padding de 28 por 26px. No hover sobe 8px e a borda vai a 0.55 (transição de 0.4s cubic-bezier(.2,.7,.2,1)). O destacado ("Mais pedido") tem borda Couro Cru cheia.
- **Card de vantagem:** fundo Carvão em grade separada por filetes de 1px (a grade tem fundo Filete e gap de 1px), ícone de linha no topo, fundo vai a Carvão Hover no hover. Abaixo de 560px vira grade 2×2 compacta (padding de 24 por 16px, ícone de 40px).
- **Card de depoimento:** fundo rgba(103,94,86,0.14), borda 0.2, cantos de 12px, estrelas SVG em Couro Cru.
- **Painel de formulário:** borda 0.28, cantos de 14px, fundo em gradiente sutil de Couro Cru 7% para Carvão 40%.

### Inputs / Fields
- **Style:** altura de 52px, borda Contorno, cantos de 8px, fundo Carvão a 60%, texto Branco em 1rem, rótulo acima em label-sm Osso.
- **Focus:** borda vira Couro Cru cheio e o fundo escurece para Carvão a 85% (transição de 0.25s).
- **Select:** mesmo estilo; opções em fundo Tabaco com texto Osso, a selecionada em Couro Cru com texto Tabaco.

### Navigation
- **Style:** links em nav (Archivo 500 14px, 0.14em, caixa-alta) cor Osso; hover em Couro Cru com sublinhado deslocado 6px.
- **Header:** fixo, com gradiente de Carvão para transparente; depois de 80px de rolagem vira Carvão a 82% com desfoque de 14px, filete inferior e padding reduzido.
- **Mobile (até 760px):** os links dão lugar a um botão redondo de menu (48px, contorno Couro Cru). Ele abre um painel em tela cheia sobre Carvão: links em Big Shoulders Display 700 2.2rem caixa-alta separados por filetes, botão principal "Agende seu horário" e, no rodapé do painel, horários e endereço em Cinza-Tabaco. Fecha com o X, com Esc ou ao tocar num link; o foco fica preso no painel enquanto aberto. O cabeçalho passa a rolar com a página.
- **Âncoras:** `scroll-padding-top` acompanha a altura do cabeçalho fixo, para o título da seção não ficar escondido.

### Icons
SVG desenhados em traço de 1.8 a 2px, cantos arredondados, cor `currentColor`, definidos uma vez como símbolos (`bb-arrow`, `bb-chevron`, `bb-close`, `bb-star`, `bb-menu-icon`, `bb-route`, `bb-pole`) e usados com `<use>`. Caracteres (→, ‹, ›, ★) nunca fazem papel de ícone.

### Calendário de agendamento (signature)
Painel de duas colunas dentro do formulário: mês em grade de 7 colunas à esquerda, horários em grade de 2 colunas à direita (rolagem interna com barra fina em Couro Cru). Dias em células quadradas de 7px de canto; o selecionado é Creme Espuma com texto Tabaco, e todo dia sem horário livre (passado, domingo ou hoje já encerrado) fica em Couro Cru a 25%. Os horários seguem a grade da casa (seg-sex 08:00 a 19:00, sábado 09:00 a 15:00, pausa ao meio-dia) e hoje só mostra os que começam daqui a 30 minutos ou mais; o calendário abre no primeiro dia livre. Horários são pílulas retangulares de 36px com contorno 0.25; o selecionado é Couro Cru cheio. Abaixo de 560px as colunas empilham.

### Resumo do pedido
Caixa logo acima do botão de enviar, com filete 0.18 e fundo de Couro Cru a 6%. Enquanto falta algo, diz o que falta em Cinza-Tabaco ("Falta escolher o serviço e o horário."); completo, mostra "Seu pedido" em label-sm e a linha "Serviço · Dia, dd/mm · hh:mm" em Big Shoulders Display Couro Cru. Anunciado ao leitor de tela (aria-live).

### Mapa (signature)
Imagem estática do OpenStreetMap pintada na paleta: fundo quase Carvão, ruas e nomes em tom de fumo, e um alfinete em Couro Cru com halo difuso como único ponto de luz. Cantos de 14px, filete 0.18; no hover sobe 4px com sombra de foto flutuante. Leva ao Google Maps; o crédito "Mapa © OpenStreetMap" fica logo abaixo, à direita, em 11px. Ao lado, o botão ghost "Como chegar" abre a rota.

### Vídeo do poste (signature)
Loop mudo do poste de barbeiro com ferramentas, na seção Sobre. Fundo gravado em Carvão (#0A0908), sem moldura, sem borda, sem sombra, `object-fit: contain`. Só toca com a seção visível; com reduced-motion fica no poster.

### Galeria em coverflow (signature)
Slides de 420px no máximo em perspectiva 3D (rotação de 38°, escala 0.78 e 0.6 para os vizinhos), transição de 0.6s cubic-bezier(.22,.8,.24,1), autoplay de 3.8s que pausa no hover, pontos de navegação em Couro Cru. O slide central abre a lightbox em Carvão a 94%.

## Do's and Don'ts

### Do:
- **Do** manter toda superfície em Carvão (#0A0908), Carvão Alto (#100E0C) ou Tabaco (#17130F), e passar fotos de fundo por gradiente de Carvão.
- **Do** usar Couro Cru (#D7C4A3) como único acento, e destacar no máximo uma parte de cada título com ele.
- **Do** separar blocos com filetes de 1px em Couro Cru a 14 a 20%.
- **Do** abrir cada seção direto pelo título em Big Shoulders Display caixa-alta; ele carrega o peso sozinho.
- **Do** erguer cards e botões no hover com translateY e sombra preta difusa (referência: 0 10px 28px rgba(0,0,0,.45)).
- **Do** gravar o fundo de vídeos e recortes na própria cor da página, para que o objeto apareça sem moldura.
- **Do** oferecer estado estático para toda animação quando `prefers-reduced-motion` estiver ativo, inclusive animações CSS (faixas de marquee, pulso do WhatsApp).
- **Do** escrever durações no formato "45 MIN" e "1H15".
- **Do** servir fotos otimizadas (WebP em `assets/opt/`, lado maior de até 2000px no hero e 960px/1800px na galeria), nunca o arquivo original da câmera.

### Don't:
- **Don't** pôr rótulo pequeno (eyebrow) acima de títulos de seção, nem numerar itens (01, 02…) que não formam uma sequência real.
- **Don't** criar seção de fundo claro, branco ou em tons pastel: nada de visual de salão unissex claro.
- **Don't** usar clichês de barbearia de template hipster: textura de madeira, bigode, clip-art vintage, fonte estêncil de faroeste.
- **Don't** usar brilho colorido (glow) em Couro Cru ou em qualquer cor; sombra é sempre preta.
- **Don't** usar o verde do WhatsApp (#25D366) fora do botão do WhatsApp.
- **Don't** pôr texto abaixo de 18px mais escuro que Cinza-Tabaco (#9E9484), nem texto funcional abaixo de 11px.
- **Don't** colocar moldura, borda ou vinheta em volta do vídeo do poste.
- **Don't** embutir mapa interativo de terceiros; use a imagem estática com link para o app de mapas.
- **Don't** animar padding, largura ou altura; anime transform e opacity.
