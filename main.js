let select = (el) => document.querySelector(el)
let selectAll = (el) => document.querySelectorAll(el)

gamesJson.map((item,index)=>{
    let game = select('.game').cloneNode(true) //Seleciona a classe e copia suas informações
    select('#games').append(game) //Faz um append na id games, colocando todas as informações da classe game

    //Preenche informações do produto
    game.querySelector('.image').src = item.img
    game.querySelector('.game-title').innerHTML = item.name
    game.querySelector('.game-info .game-price').innerHTML =  `R$ ${item.price.toFixed(2)}`

    // console.log(item,index)

})