//..............................................................
//.IIIII..NNNNN......NNNN......GGGGGGGGG......RRRRRRRRRRRRR.....
//.IIIII..NNNNNN.....NNNN.....GGGGGGGGGGGG....RRRRRRRRRRRRRR....
//.IIIII..NNNNNN.....NNNN...GGGGGGGGGGGGGG....RRRRRRRRRRRRRRR...
//.IIIII..NNNNNNN....NNNN...GGGGGGGGGGGGGGG...RRRRRRRRRRRRRRR...
//.IIIII..NNNNNNN....NNNN..NGGGGGG...GGGGGG...RRRRR.....RRRRR...
//.IIIII..NNNNNNNN...NNNN..NGGGGG.....GGGGGG..RRRRR.....RRRRR...
//.IIIII..NNNNNNNNN..NNNN..NGGGG.......GGGG...RRRRR.....RRRRR...
//.IIIII..NNNNNNNNN..NNNN..NGGGG..............RRRRR...RRRRRRR...
//.IIIII..NNNNNNNNNN.NNNN.NNGGG....GGGGGGGGG..RRRRRRRRRRRRRRR...
//.IIIII..NNNNNNNNNN.NNNN.NNGGG....GGGGGGGGG..RRRRRRRRRRRRRR....
//.IIIII..NNNNN.NNNNNNNNN.NNGGGG...GGGGGGGGG..RRRRRRRRRRRRRR....
//.IIIII..NNNNN.NNNNNNNNN..NGGGG...GGGGGGGGG..RRRRRRRRRRRRRRR...
//.IIIII..NNNNN..NNNNNNNN..NGGGG.......GGGGG..RRRRR.....RRRRR...
//.IIIII..NNNNN..NNNNNNNN..NGGGGG.....GGGGGG..RRRRR.....RRRRR...
//.IIIII..NNNNN...NNNNNNN..NGGGGGGG.GGGGGGGG..RRRRR.....RRRRR...
//.IIIII..NNNNN....NNNNNN...GGGGGGGGGGGGGGGG..RRRRR.....RRRRR...
//.IIIII..NNNNN....NNNNNN....GGGGGGGGGGGGGGG..RRRRR.....RRRRR...
//.IIIII..NNNNN.....NNNNN.....GGGGGGGGGGGGGG..RRRRR.....RRRRRR..
//..............................GGGGGG..........................
//..............................................................
let cacaoAmount = 150;
const cacao = {
  get correspondingItem() {return cacaoAmount;},
  set correspondingItem(val) {cacaoAmount = val;},
  
  price: 10,

  file: 'cacao',
  name: 'Cacao',
  flexPlural: 'beans',

  companies: [
    ["Cacao Culture", [0, 0]], // name, [price offset, marketing offset]
    ["Milo's Cacao Co.", [1, 0.2]], // people pay a lot for gourmet cacao from africa or whatever
    ["ChocoTech", [-2, -0.4]],
  ]
}

let sugarAmount = 150;
const sugar = {
  get correspondingItem() {return sugarAmount;},
  set correspondingItem(val) {sugarAmount = val;},
  
  price: 5,

  file: 'sugar',
  name: 'Sugar',
  flexPlural: 'sugar',

  companies: [
    ["K&F Sugar Solutions", [0, 0]], // name, [price offset, marketing offset]
    ["Old Mill Sugar", [1, 0.2]],
    ["SugarSmith's", [-2, -0.2]], // assuming sugar has somewhat the same quality no matter where you buy it from
  ]
}

let milkAmount = 150;
const milk = {
  get correspondingItem() {return milkAmount;},
  set correspondingItem(val) {milkAmount = val;},
  
  price: 8,

  file: 'milk',
  name: 'Milk',
  flexPlural: 'milk',

  companies: [
    ["Milky Meadows", [0, 0]], // moo moo meadows
    ["PurePastures Dairy Co.", [1, 0.1]],
    ["FarmFresh", [-2, -0.2]], // HOW FRESH ARE YOU NOW HUH
    ["Milky Way Farms", [4, 0.6]] // look ik its cheesy whatever 
  ]
}

//............................................................................................
//......CCCCCCCC.....HHHHH......HHHHH......OOOOOOOOO.........CCCCCCCCC.........OOOOOOOOO......
//....CCCCCCCCCCCC...HHHHH......HHHHH....OOOOOOOOOOOO.......CCCCCCCCCCC......OOOOOOOOOOOO.....
//...CCCCCCCCCCCCCC..HHHHH......HHHHH...OOOOOOOOOOOOOO.....CCCCCCCCCCCCC....OOOOOOOOOOOOOO....
//...CCCCCCCCCCCCCC..HHHHH......HHHHH...OOOOOOOOOOOOOOO...CCCCCCCCCCCCCCC...OOOOOOOOOOOOOOO...
//..CCCCCCC...CCCCCC.HHHHH......HHHHH..OOOOOO....OOOOOO..CCCCCCC...CCCCCC..OOOOOO....OOOOOO...
//..CCCCCC.....CCCCC.HHHHH......HHHHH..OOOOO......OOOOOO.CCCCCC.....CCCCC..OOOOO......OOOOOO..
//..CCCCC......CCCCC.HHHHH......HHHHH..OOOOO.......OOOOO.CCCCC......CCCCC..OOOOO.......OOOOO..
//..CCCCC............HHHHHHHHHHHHHHHH.OOOOO........OOOOO.CCCCC............OOOOO........OOOOO..
//..CCCCC............HHHHHHHHHHHHHHHH.OOOOO........OOOOO.CCCCC............OOOOO........OOOOO..
//.CCCCC.............HHHHHHHHHHHHHHHH.OOOOO........OOOOO.CCCCC............OOOOO........OOOOO..
//..CCCCC............HHHHHHHHHHHHHHHH.OOOOO........OOOOO.CCCCC............OOOOO........OOOOO..
//..CCCCC......CCCCC.HHHHH......HHHHH..OOOOO.......OOOOO.CCCCC......CCCCC..OOOOO.......OOOOO..
//..CCCCC......CCCCC.HHHHH......HHHHH..OOOOO......OOOOOO.CCCCC......CCCCC..OOOOO......OOOOOO..
//..CCCCCC....CCCCCC.HHHHH......HHHHH..OOOOOO.....OOOOOO.CCCCCC....CCCCCC..OOOOOO.....OOOOOO..
//..CCCCCCCCCCCCCCC..HHHHH......HHHHH..OOOOOOOOOOOOOOOO...CCCCCCCCCCCCCCC..OOOOOOOOOOOOOOOO...
//...CCCCCCCCCCCCCC..HHHHH......HHHHH...OOOOOOOOOOOOOO....CCCCCCCCCCCCCC....OOOOOOOOOOOOOO....
//....CCCCCCCCCCCC...HHHHH......HHHHH....OOOOOOOOOOOOO.....CCCCCCCCCCCC......OOOOOOOOOOOOO....
//.....CCCCCCCCCC....HHHHH......HHHHH.....OOOOOOOOOOO.......CCCCCCCCCC........OOOOOOOOOOO.....
//.......CCCCCC.............................OOOOOOO...........CCCCCCC...........OOOOOOO.......
//............................................................................................




let milkChocolateAmount = 0;
let milkChocolatePrice = 4;
const milkChocolate = {
  get correspondingItem() {return milkChocolateAmount;},
  set correspondingItem(val) {milkChocolateAmount = val;},

  get priceNum() {return milkChocolatePrice;},
  set priceNum(val) {milkChocolatePrice = val;},

  name: 'Milk Chocolate',
  file: 'milkChocolate',

  priceId: 'milkChocolatePrice',

  recipe: [[cacao, 1], [sugar, 1], [milk, 1]]
}


let unlockedChocolates = [milkChocolate];
//..................................................................
//.PPPPPPPPPPPP....RRRRRRRRRRRRR........OOOOOOOOO............JJJJJ..
//.PPPPPPPPPPPPP...RRRRRRRRRRRRRR.....OOOOOOOOOOOOO..........JJJJJ..
//.PPPPPPPPPPPPPP..RRRRRRRRRRRRRRR....OOOOOOOOOOOOOO.........JJJJJ..
//.PPPPPPPPPPPPPP..RRRRRRRRRRRRRRR...OOOOOOOOOOOOOOO.........JJJJJ..
//.PPPPP...PPPPPPP.RRRRR.....RRRRRR..OOOOOO....OOOOOO........JJJJJ..
//.PPPPP.....PPPPP.RRRRR......RRRRR.ROOOOO......OOOOO........JJJJJ..
//.PPPPP.....PPPPP.RRRRR......RRRRR.ROOOO.......OOOOO........JJJJJ..
//.PPPPP....PPPPPP.RRRRR....RRRRRR..ROOOO.......OOOOO........JJJJJ..
//.PPPPPPPPPPPPPP..RRRRRRRRRRRRRRR..ROOOO........OOOOO.......JJJJJ..
//.PPPPPPPPPPPPPP..RRRRRRRRRRRRRR...ROOOO........OOOOO.......JJJJJ..
//.PPPPPPPPPPPPPP..RRRRRRRRRRRRRRR..ROOOO........OOOOO.......JJJJJ..
//.PPPPPPPPPPPP....RRRRRRRRRRRRRRR..ROOOO.......OOOOO.OJJJJ..JJJJJ..
//.PPPPP...........RRRRR.....RRRRR..ROOOOO......OOOOO.OJJJJ..JJJJJ..
//.PPPPP...........RRRRR.....RRRRR..ROOOOO.....OOOOOO.OJJJJ..JJJJJ..
//.PPPPP...........RRRRR.....RRRRR...OOOOOOO.OOOOOOOO.OJJJJJ.JJJJJ..
//.PPPPP...........RRRRR.....RRRRR....OOOOOOOOOOOOOO..OJJJJJJJJJJJ..
//.PPPPP...........RRRRR.....RRRRRR...OOOOOOOOOOOOO....JJJJJJJJJJJ..
//.PPPPP...........RRRRR......RRRRR....OOOOOOOOOOO......JJJJJJJJJ...
//.......................................OOOOOOO.........JJJJJJ.....
//..................................................................