let cacaoAmount = 15;
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

let sugarAmount = 15;
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
  flexPlural: 'bags',

  companies: [
    ["K&F Sugar Solutions", [0, 0]],
    ["Old Mill Sugar", [1, 0.2]],
    ["SugarSmith's", [-2, -0.2]], // assuming sugar has somewhat the same quality no matter where you buy it from cuz its just sugar
  ]
}

let milkAmount = 15;
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
  flexPlural: 'jugs',

  companies: [
    ["Milky Meadows", [0, 0]], // moo moo meadows
    ["PurePastures Dairy Co.", [1, 0.1]],
    ["FarmFresh", [-2, -0.2]], // HOW FRESH ARE YOU NOW HUH
    ["Milky Way Farms", [4, 0.6]] // look ik the name's cheesy whatever 
  ]
}

let peanutButterAmount = 15;
let peanutButterCompany = 0;
const peanutButter = {
  get correspondingItem() {return peanutButterAmount;},
  set correspondingItem(val) {peanutButterAmount = val;},

  get company() {return this.companies[peanutButterCompany];},
  set company(val) {peanutButterCompany = val;},

  basePrice: 10,
  price: 10,

  file: 'peanutButter',
  name: 'Peanut Butter',
  flexPlural: 'jars',

  companies: [
    ["Peter Pan's Nuts", [0, 0]],
    ["JIF (gif?)", [1, 0.3]], // obviously the best brand
    ["Skippy", [-2, -0.1]],
    ["Justin's Butter Co.", [2, 0.5]]
  ]
}

let unlockedIngredients = [cacao, sugar, milk, peanutButter];



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


let workersBought = false;
let workersVisible = false;
let projectWorkers = {
  get bought() {return workersBought;},
  set bought(val) {workersBought = val;},

  get visible() {return workersVisible;},
  set visible(val) {workersVisible = val;},

  name: "Workers",
  file: "projectWorkers",
  description: "Hire workers to expand your business",

  price: 75,
  threshold: 10,

  purchase: () => {
    document.getElementById("devices").style.display = "block";
    document.getElementById("devices-locked").style.display = "none";
  }
}

class Worker {
  constructor() {
    this.happiness = 1;
    this.speed = 1000;
    this.element = document.createElement("div");
    this.element.className = "worker";
    this.element.style.backgroundColor = getRandomColor();

    this.working = setInterval(this.work, this.speed);
    setInterval(this.pay, 1000);
  }

  work() {
    let correctChocolate = unlockedChocolates[0];
    for (let i in unlockedChocolates) {
      if (unlockedChocolates[i].correspondingItem < correctChocolate.correspondingItem) {
        correctChocolate = unlockedChocolates[i];
      }
    }
    clicked(correctChocolate);
  }
  pay() {
    money -= workerPay;
  }

  changeHappiness(change) {
    this.happiness += change;
    console.log(this.happiness);
    this.speed = this.speed / this.happiness;
    clearInterval(this.working);
    this.working = setInterval(this.work, this.speed);
  }
}
workers = [];

let autobuyersBought = false;
let autobuyersVisible = false;
let projectAutobuyers = {
  get bought() {return autobuyersBought;},
  set bought(val) {autobuyersBought = val;},

  get visible() {return autobuyersVisible;},
  set visible(val) {autobuyersVisible = val;},

  name: "AutoBuyers",
  file: "projectAutobuyers",
  description: "Create machines that buy ingredients for you",

  price: 100,
  threshold: 30,

  purchase: () => {
    for (let i in unlockedIngredients) {
      unlockedIngredients[i].switch.style.display = "inline-block";
    }
    setInterval(function () {
      for (let i in unlockedIngredients) {
        if (unlockedIngredients[i].correspondingItem === 0 && unlockedIngredients[i].switch.children[0].checked) {

          buy(unlockedIngredients[i]);
        }
      }
    }, 200)
  }
}

const projects = {projectWorkers, projectAutobuyers}