let gamesJson = [
    {id:1, name:'God of war', img:'images/games/game1.jpeg', price: 20.19, version:['Basic', 'Deluxe', 'Premium'], description:'God of war'},
    {id:2, name:'Spider Man', img:'images/games/game2.png', price: 80.00, version:['Basic', 'Deluxe', 'Premium'], description:'Spider'},
    {id:3, name:'Sonic', img:'images/games/game3.jpg', price: 20.00, version:['Basic', 'Deluxe', 'Premium'], description:'Sonic'},
    {id:4, name:'CombatGame', img:'images/games/game4.jpg', price: 26.90, version:['Basic', 'Deluxe', 'Premium'], description:'CombatGame'},
    {id:5, name:'Assassins Creed', img:'images/games/game5.jpg', price: 86.90, version:['Basic', 'Deluxe', 'Premium'], description:'Assassins Creed'},
    {id:6, name:'The Witcher 3', img:'images/games/game6.jpg', price: 66.90, version:['Basic', 'Deluxe', 'Premium'], description:'The Witcher 3'},
    {id:7, name:'Quantum Brake', img:'images/games/game7.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Quantum Brake'},
    {id:8, name:'Guardiões das Galaxias', img:'images/games/game8.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:9, name:'Aika', img:'images/games/game9.jpg', price: 20.19, version:['Basic', 'Deluxe', 'Premium'], description:'God of war'},
    {id:10, name:'World of Warcraft', img:'images/games/game10.jpg', price: 80.00, version:['Basic', 'Deluxe', 'Premium'], description:'Spider'},
    {id:11, name:'Ghost of Tsushima', img:'images/games/game11.jpg', price: 20.00, version:['Basic', 'Deluxe', 'Premium'], description:'Sonic'},
    {id:12, name:'Terror Crew', img:'images/games/game12.jpg', price: 26.90, version:['Basic', 'Deluxe', 'Premium'], description:'CombatGame'},
    {id:13, name:'Perfect World', img:'images/games/game13.jpg', price: 86.90, version:['Basic', 'Deluxe', 'Premium'], description:'Assassins Creed'},
    {id:14, name:'The Witcher 2', img:'images/games/game14.jpg', price: 66.90, version:['Basic', 'Deluxe', 'Premium'], description:'The Witcher 2'},
    {id:15, name:'Skyrim', img:'images/games/game15.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Quantum Brake'},
    {id:16, name:'Rachet and Clank', img:'images/games/game16.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:17, name:'Control', img:'images/games/game17.jpg', price: 20.19, version:['Basic', 'Deluxe', 'Premium'], description:'God of war'},
    {id:18, name:'Free Fire', img:'images/games/game18.png', price: 80.00, version:['Basic', 'Deluxe', 'Premium'], description:'Spider'},
    {id:19, name:'Dark Souls', img:'images/games/game19.jpg', price: 20.00, version:['Basic', 'Deluxe', 'Premium'], description:'Sonic'},
    {id:20, name:'GOT', img:'images/games/game20.jpg', price: 26.90, version:['Basic', 'Deluxe', 'Premium'], description:'CombatGame'},
    {id:21, name:'Lord Creed', img:'images/games/game21.jpg', price: 86.90, version:['Basic', 'Deluxe', 'Premium'], description:'Assassins Creed'},
    {id:22, name:'Fairy Tale 3', img:'images/games/game22.jpg', price: 66.90, version:['Basic', 'Deluxe', 'Premium'], description:'The Witcher 3'},
    {id:23, name:'Combat Arms', img:'images/games/game23.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Quantum Brake'},
    {id:24, name:'DarkSiders', img:'images/games/game24.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:25, name:'Metal Gear', img:'images/games/game25.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:26, name:'Dunno lor', img:'images/games/game26.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:27, name:'Injustice', img:'images/games/game27.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:28, name:'Injustice', img:'images/games/game27.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:1, name:'God of war', img:'images/games/game1.jpeg', price: 20.19, version:['Basic', 'Deluxe', 'Premium'], description:'God of war'},
    {id:2, name:'Spider Man', img:'images/games/game2.png', price: 80.00, version:['Basic', 'Deluxe', 'Premium'], description:'Spider'},
    {id:3, name:'Sonic', img:'images/games/game3.jpg', price: 20.00, version:['Basic', 'Deluxe', 'Premium'], description:'Sonic'},
    {id:4, name:'CombatGame', img:'images/games/game4.jpg', price: 26.90, version:['Basic', 'Deluxe', 'Premium'], description:'CombatGame'},
    {id:5, name:'Assassins Creed', img:'images/games/game5.jpg', price: 86.90, version:['Basic', 'Deluxe', 'Premium'], description:'Assassins Creed'},
    {id:6, name:'The Witcher 3', img:'images/games/game6.jpg', price: 66.90, version:['Basic', 'Deluxe', 'Premium'], description:'The Witcher 3'},
    {id:7, name:'Quantum Brake', img:'images/games/game7.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Quantum Brake'},
    {id:8, name:'Guardiões das Galaxias', img:'images/games/game8.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:9, name:'Aika', img:'images/games/game9.jpg', price: 20.19, version:['Basic', 'Deluxe', 'Premium'], description:'God of war'},
    {id:10, name:'World of Warcraft', img:'images/games/game10.jpg', price: 80.00, version:['Basic', 'Deluxe', 'Premium'], description:'Spider'},
    {id:11, name:'Ghost of Tsushima', img:'images/games/game11.jpg', price: 20.00, version:['Basic', 'Deluxe', 'Premium'], description:'Sonic'},
    {id:12, name:'Terror Crew', img:'images/games/game12.jpg', price: 26.90, version:['Basic', 'Deluxe', 'Premium'], description:'CombatGame'},
    {id:13, name:'Perfect World', img:'images/games/game13.jpg', price: 86.90, version:['Basic', 'Deluxe', 'Premium'], description:'Assassins Creed'},
    {id:14, name:'The Witcher 2', img:'images/games/game14.jpg', price: 66.90, version:['Basic', 'Deluxe', 'Premium'], description:'The Witcher 2'},
    {id:15, name:'Skyrim', img:'images/games/game15.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Quantum Brake'},
    {id:16, name:'Rachet and Clank', img:'images/games/game16.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:17, name:'Control', img:'images/games/game17.jpg', price: 20.19, version:['Basic', 'Deluxe', 'Premium'], description:'God of war'},
    {id:18, name:'Free Fire', img:'images/games/game18.png', price: 80.00, version:['Basic', 'Deluxe', 'Premium'], description:'Spider'},
    {id:19, name:'Dark Souls', img:'images/games/game19.jpg', price: 20.00, version:['Basic', 'Deluxe', 'Premium'], description:'Sonic'},
    {id:20, name:'GOT', img:'images/games/game20.jpg', price: 26.90, version:['Basic', 'Deluxe', 'Premium'], description:'CombatGame'},
    {id:21, name:'Lord Creed', img:'images/games/game21.jpg', price: 86.90, version:['Basic', 'Deluxe', 'Premium'], description:'Assassins Creed'},
    {id:22, name:'Fairy Tale 3', img:'images/games/game22.jpg', price: 66.90, version:['Basic', 'Deluxe', 'Premium'], description:'The Witcher 3'},
    {id:23, name:'Combat Arms', img:'images/games/game23.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Quantum Brake'},
    {id:24, name:'DarkSiders', img:'images/games/game24.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:25, name:'Metal Gear', img:'images/games/game25.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:26, name:'Dunno lor', img:'images/games/game26.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:27, name:'Injustice', img:'images/games/game27.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'},
    {id:28, name:'Injustice', img:'images/games/game27.jpg', price: 76.90, version:['Basic', 'Deluxe', 'Premium'], description:'Guardiões das Galaxias'}
]