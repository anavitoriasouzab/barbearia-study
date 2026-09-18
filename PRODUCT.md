# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Principal (dentro da ficção da página): homens em Manaus procurando barbearia, quase sempre no celular, que querem ver o que é oferecido, quanto custa e quanto tempo leva, e marcar um horário sem ligar nem esperar resposta no direct.

Contexto por trás da página: a Barba Brava é um case de estudo fictício do portfólio da autora. A página precisa funcionar como landing page real de barbearia para esse usuário principal; o valor dela como portfólio vem de convencer como coisa real, não de falar diretamente com possíveis contratantes.

## Product Purpose

Site de página única da barbearia Barba Brava: o visitante entende a casa, os serviços e os preços, e pede um horário. Sucesso é o visitante chegar ao formulário de agendamento e enviar a solicitação pronta para o WhatsApp da barbearia.

## Positioning

"Barbearia raiz, acabamento moderno": ofício tradicional (tesoura, navalha quente, barba) com atitude forte e confiante. O agendamento vai direto para o WhatsApp, sem cadastro, sem app e sem mensalidade de sistema de agenda.

## Operating Context

- Os visitantes chegam principalmente pelo celular, muitas vezes vindos do Instagram.
- Fluxo de agendamento: escolher serviço, data no calendário (domingos e dias passados bloqueados), horário e nome; o formulário abre o WhatsApp com a mensagem preenchida. Não há backend; o dono confirma manualmente.
- Localização pesa na decisão: mapa e endereço fazem parte da página.

## Capabilities and Constraints

- Site estático, sem build: `index.html` com o runtime `x-dc` (`support.js`, React por baixo) e GSAP/ScrollTrigger via jsDelivr. Publicado no GitHub Pages; `Barba Brava.dc.html` é mantido idêntico ao `index.html`.
- Seções: hero com slideshow de fotos, destaques, sobre (com vídeo do poste de barbeiro em loop), serviços com preços, agendamento, galeria em coverflow com lightbox, depoimentos, mapa, rodapé e botão flutuante do WhatsApp.
- Toda animação respeita `prefers-reduced-motion`.
- Idioma: português do Brasil em toda a página.
- `Carrossel Instagram.dc.html` é um carrossel separado que apresenta esta página como case de portfólio; não faz parte do site da barbearia.

## Brand Commitments

- Nome: Barbearia Barba Brava, "Barbearia & Estilo". Logo em `assets/logo.png`; favicons em `assets/`.
- Voz: português direto, confiante e informal, com uma dose de marra ("Combo Brabo", "sem enrolação", "estilo que impõe presença"), sempre respeitoso.

## Evidence on Hand

A Barba Brava é fictícia, então todo dado de negócio na página é placeholder, nunca prova:

- Depoimentos (três citações genéricas, sem nome), a nota "5.0", "5+ anos" e "desde 2021".
- Preços e durações (Corte R$ 45 / 45 min, Design de barba R$ 35 / 30 min, Combo Brabo R$ 70 / 1h15) e horário de funcionamento.
- Contato: o WhatsApp `5592999999999` é número fictício; o link do Instagram aponta para a raiz do instagram.com; o endereço Rua Barroso, 36, Manaus é ilustrativo.

Ativos reais: fotos de barbearia (banco de imagens) em `assets/`, o logo e o vídeo do poste `assets/animation/barber-pole.mp4` (derivado de `barber-vid2.mp4`, com a marca d'água recortada e o fundo gravado na cor da página, `#0A0908`).

Não inventar clientes com nome, número de avaliações, prêmios, imprensa ou estatísticas. Se for preciso mais prova, marcar como placeholder.

## Product Principles

1. Agendar é o trabalho: cada seção deve encurtar o caminho até o formulário e a passagem para o WhatsApp.
2. Mostrar o concreto: preços, durações, horários e localização à vista, para chegar menos pergunta no direct.
3. Crível como negócio local real: a página tem que parecer uma barbearia específica de Manaus, não um modelo pronto.
4. Celular primeiro: o visitante no celular, vindo do Instagram, é o caso padrão.
