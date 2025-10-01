// Estrutura JSON com pontos turísticos de Goiás
const dados = [
  {
    "id": 1,
    "titulo": "Cidade de Goiás (Goiás Velho)",
    "descricao": "Antiga capital do estado e Patrimônio Mundial da UNESCO.",
    "conteudo": "A Cidade de Goiás, também conhecida como Goiás Velho, é famosa por sua arquitetura colonial, igrejas históricas e pelo Festival Internacional de Cinema e Vídeo Ambiental (FICA).",
    "categoria": "Histórico",
    "autor": "Turismo Goiás",
    "data": "2025-03-01",
    "imagem": "img/goias_velho.jpg"
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

// Função para montar cards na Home
function carregarHome() {
  const container = document.getElementById("lista-pontos");
  if (!container) return;

  dados.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}">
      <h2>${item.titulo}</h2>
      <p>${item.descricao}</p>
      <a href="detalhes.html?id=${item.id}">Ver detalhes</a>
    `;

    container.appendChild(card);
  });
}

// Função para carregar detalhes de um ponto turístico
function carregarDetalhes() {
  const container = document.getElementById("detalhes");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const item = dados.find(p => p.id === id);

  if (item) {
    container.innerHTML = `
      <div class="detalhes-card">
        <img src="${item.imagem}" alt="${item.titulo}">
        <h2>${item.titulo}</h2>
        <p><strong>Categoria:</strong> ${item.categoria}</p>
        <p><strong>Autor:</strong> ${item.autor} | <strong>Data:</strong> ${item.data}</p>
        <p>${item.conteudo}</p>
        <a href="index.html">⬅ Voltar para a Home</a>
      </div>
    `;
  } else {
    container.innerHTML = "<p>Ponto turístico não encontrado!</p>";
  }
}

// Executa funções conforme a página
carregarHome();
carregarDetalhes();
