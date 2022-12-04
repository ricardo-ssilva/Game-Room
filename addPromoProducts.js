let select = (el) => document.querySelector(el)
let selectAll = (el) => document.querySelectorAll(el)

console.log(selectAll('.games'))

gamesJson.map((item,index)=>{
    addPromoProducts(item,index)

})


function addPromoProducts (item, index) {
    //Adiciona todos os produtos na página de produtos
    let game = select('.game').cloneNode(true) //Seleciona a classe e copia suas informações


    //Preenche informações do produto na pag produtos
    if(item.price <= 20) {
        select('.off20').append(game) //Faz um append na id games, colocando todas as informações da classe game
    }
    if(item.price > 20 && item.price <= 50) {
        select('.off50').append(game) //Faz um append na id games, colocando todas as informações da classe game
    }
    game.querySelector(' .image').src = item.img
    game.querySelector('.game-title').innerHTML = item.name
    game.querySelector('.game-info .game-price').innerHTML =  `R$ ${item.price.toFixed(2)}`

}

