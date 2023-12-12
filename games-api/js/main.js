import { getAllGames } from "./service";

var URL = 'http://localhost:3000/jogos';

window.onload = () => {
    loadGames();
}

const loadGames = () => {
    const dataContainer =
    document.getElementById('data-container');
    getAllGames().then(resp =>{
        resp.forEach(game => {
            const gamesElement =
            document.createElement('div');
            gamesElement.innerHTML = 
            `<strong>${game.nome}</strong><p>${game.preço}</p>
            `;
            dataContainer.appendChild(gamesElement);           
        });
    })
}

const createGame = () => {
    const jogoTeste = {
        "nome": "The legend of Zelda",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 100
    };
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogoTeste)
    })
        .then(response => response.json())
        .then(data => console.log('sucesso: ', data))
        .catch((error) => console.log('Erro: ', error));


};

const deleteGame = () => {
    const game = {
        "nome": "The legend of Zelda",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 100,
        "id": 3
    }
    fetch(URL + `/${game.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log('sucesso: ', data))
        .catch((error) => console.log('Erro: ', error));

};


const updateGame = () => {
    const game = {
        "nome": "The legend of Zelda 2",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 300,
        "id": 3

    }
    fetch(URL + `/${game.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })
        .then(response => response.json())
        .then(data => console.log('sucesso: ', data))
        .catch((error) => console.log('Erro: ', error));


};