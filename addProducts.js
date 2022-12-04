let select = (el) => document.querySelector(el)
let selectAll = (el) => document.querySelectorAll(el)

console.log(selectAll('.games'))

gamesJson.map((item,index)=>{
    addAllProducts(item,index)

})


function addAllProducts (item, index) {
    //Adiciona todos os produtos na página de produtos
    let game = select('.game').cloneNode(true) //Seleciona a classe e copia suas informações
    select('.games').append(game) //Faz um append na id games, colocando todas as informações da classe game

    //Preenche informações do produto na pag produtos
    game.querySelector(' .image').src = item.img
    game.querySelector('.game-title').innerHTML = item.name
    game.querySelector('.game-info .game-price').innerHTML =  `R$ ${item.price.toFixed(2)}`

}

