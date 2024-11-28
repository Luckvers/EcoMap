let backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const postos = [
    {
        nome: "Facens",
        endereco: "Rodovia Senador José Ermírio de Moraes, 1425 - Jardim Constantino Matucci, Sorocaba - SP, 18085-784",
        imagem: "../img/Facens Image.png",
        link: "https://encurtador.com.br/SDJes"
    },
    {
        nome: "Mercado Confiança",
        endereco: "Av. São Paulo, 2717 - Além Ponte, Sorocaba - SP, 18013-000",
        imagem: "../img/Confiança image.png",
        link: "https://encurtador.com.br/U1mSr"
    },
    {
        nome: "Novotel",
        endereco: "Av. Professora Izoraida Marques Peres, 770 - Parque Campolim, Sorocaba - SP, 18048-110",
        imagem: "../img/Novotel Image.png",
        link: "https://encurtador.com.br/DIFfL"
    },
    {
        nome: "Assaí Atacadista",
        endereco: "R Maria Cinto de Biagi, 164 - Jardim Santa Rosália, Sorocaba - SP, 18095-490",
        imagem: "../img/Assaí Atacadista.jpeg",
        link: "https://encurtador.com.br/UmjE5"
    },
    {
        nome: "Padaria Real",
        endereco: "Av. Eng. Carlos Reinaldo Mendes, 2650 - Alto da Boa Vista, Sorocaba - SP, 18013-280",
        imagem: "../img/Padaria Real.jpeg",
        link: "https://encurtador.com.br/QHIwJ"
    },
    {
        nome: "Sibrape Sorocaba",
        endereco: "R. Dr. José Aleixo Irmão, 173 - Villazul, Sorocaba - SP, 18087-571",
        imagem: "../img/Sibrape.jpeg",
        link: "https://encurtador.com.br/XXOkZ"
    },
    {
        nome: "Tauste",
        endereco: "Av. General Carneiro, 1120 - Vila Lucy, Sorocaba - SP, 18043-003",
        imagem: "../img/Tauste.jpeg",
        link: "https://encurtador.com.br/eY6xq"
    },
    {
        nome: "Padaria Real Campolim",
        endereco: "Av. Antônio Carlos Comitre, 475 - Parque Campolim, Sorocaba - SP, 18047-620",
        imagem: "../img/Padaria Real Campolim.jpg",
        link: "https://encurtador.com.br/Dsk1y"
    },
    {
        nome: "Unimed",
        endereco: "Rua Antonia Dias Petri, 135 - Parque Santa Isabel, Sorocaba - SP, 18052-210",
        imagem: "../img/Unimed.jpg",
        link: "https://encurtador.com.br/LRlRP"
    }
        
];


function exibirPostos(filtrados) {
    const postosList = document.getElementById("lista");
    postosList.innerHTML = "";

    filtrados.forEach(posto => {
        const section = document.createElement("section");
        section.classList.add("posto");
        section.innerHTML = `
            <a href="${posto.link}"><img src="${posto.imagem}" alt="${posto.nome}"></a>
            <div class="info">
                <h2>${posto.nome}</h2>
                <p>${posto.endereco}</p>
            </div>
        `;
        postosList.appendChild(section);
    });
}

function pesquisarPostos() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const postosFiltrados = postos.filter(posto =>
        posto.nome.toLowerCase().includes(query) ||
        posto.endereco.toLowerCase().includes(query)
    );
    exibirPostos(postosFiltrados);
}


document.getElementById("search-input").addEventListener("input", pesquisarPostos);


exibirPostos(postos);
