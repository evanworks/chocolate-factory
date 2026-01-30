let cacaoAmount = 10;
let cacaoCompany = 0;
const cacao = {
  get correspondingItem() {return cacaoAmount;},
  set correspondingItem(val) {cacaoAmount = val;},

  get company() {return this.companies[cacaoCompany];},
  set company(val) {cacaoCompany = val;},

  basePrice: 10,
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

let sugarAmount = 10;
let sugarCompany = 0;
const sugar = {
  get correspondingItem() {return sugarAmount;},
  set correspondingItem(val) {sugarAmount = val;},

  get company() {return this.companies[sugarCompany];},
  set company(val) {sugarCompany = val;},

  basePrice: 5,
  price: 5,

  file: 'sugar',
  name: 'Sugar',
  flexPlural: 'sugar',

  companies: [
    ["K&F Sugar Solutions", [0, 0]],
    ["Old Mill Sugar", [1, 0.2]],
    ["SugarSmith's", [-2, -0.2]], // assuming sugar has somewhat the same quality no matter where you buy it from cuz its just sugar
  ]
}

let milkAmount = 10;
let milkCompany = 0;
const milk = {
  get correspondingItem() {return milkAmount;},
  set correspondingItem(val) {milkAmount = val;},

  get company() {return this.companies[milkCompany];},
  set company(val) {milkCompany = val;},

  basePrice: 8,
  price: 8,

  file: 'milk',
  name: 'Milk',
  flexPlural: 'milk',

  companies: [
    ["Milky Meadows", [0, 0]], // moo moo meadows
    ["PurePastures Dairy Co.", [1, 0.1]],
    ["FarmFresh", [-2, -0.2]], // HOW FRESH ARE YOU NOW HUH
    ["Milky Way Farms", [4, 0.6]] // look ik the name's cheesy whatever 
  ]
}

let unlockedIngredients = [cacao, sugar, milk];



let milkChocolateAmount = 0;
let milkChocolatePrice = 3;
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