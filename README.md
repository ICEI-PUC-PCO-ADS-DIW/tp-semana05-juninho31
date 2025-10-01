[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/KZhXwLZL)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=20649921)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Wallison Junio Ribeiro Rocha
- Matricula: 890144
- Proposta de projeto escolhida: Lugares e Experiências
- Breve descrição sobre seu projeto: O objetivo do site é divulgar o turismo em Goiás, oferecendo uma navegação leve, intuitiva e visualmente agradável. Ele funciona como um guia básico, permitindo que o usuário conheça rapidamente as características de cada ponto turístico e escolha quais deseja explorar mais a fundo.

## Print da Home-Page

<<  COLOQUE A IMAGEM AQUI >>
![alt text](image.png)
## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>
![alt text](image-1.png)
## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
    "id": 1,
    "titulo": "Cidade de Goiás (Goiás Velho)",
    "descricao": "Antiga capital do estado e Patrimônio Mundial da UNESCO.",
    "conteudo": "A Cidade de Goiás, também conhecida como Goiás Velho, é famosa por sua arquitetura colonial, igrejas históricas e pelo Festival Internacional de Cinema e Vídeo Ambiental (FICA).",
    "categoria": "Histórico",
    "autor": "Turismo Goiás",
    "data": "2025-03-01",
    "imagem": "img/goias_velho.png"
  },
  {
    "id": 2,
    "titulo": "Parque Nacional da Chapada dos Veadeiros",
    "descricao": "Destino de ecoturismo com trilhas, cachoeiras e formações rochosas únicas.",
    "conteudo": "Localizado na região nordeste do estado, o parque é Patrimônio Natural da Humanidade pela UNESCO. É conhecido por suas cachoeiras impressionantes e energia mística.",
    "categoria": "Natureza",
    "autor": "ICMBio",
    "data": "2025-03-02",
    "imagem": "img/chapada.jpg"
  },
  {
    "id": 3,
    "titulo": "Lago das Brisas (Buriti Alegre)",
    "descricao": "Um dos maiores lagos artificiais do Brasil, ótimo para esportes aquáticos.",
    "conteudo": "Com mais de 170 km² de extensão, o Lago das Brisas é ideal para prática de esportes náuticos, pesca esportiva e turismo de lazer.",
    "categoria": "Lazer",
    "autor": "Prefeitura de Buriti Alegre",
    "data": "2025-03-03",
    "imagem": "img/lago_brisas.jpg"
  },
  {
    "id": 4,
    "titulo": "Caldas Novas",
    "descricao": "Maior estância hidrotermal do mundo, com águas quentes naturais.",
    "conteudo": "A cidade é famosa por seus parques aquáticos e pela hospitalidade. É um dos destinos mais visitados do Centro-Oeste brasileiro.",
    "categoria": "Turismo",
    "autor": "Turismo Caldas Novas",
    "data": "2025-03-04",
    "imagem": "img/caldas_novas.jpg"
  }
];