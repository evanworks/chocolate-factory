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
    ["ChocoTech", [-2, -0.2]],
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
    ["Old Mill Sugar", [2, 0.05]],
    ["SugarSmith's", [-3, -0.2]], // assuming sugar has somewhat the same quality no matter where you buy it from cuz its just sugar
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
    ["Milky Way Farms", [4, 0.3]] // look ik the name's cheesy whatever
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

const complaints = {
  happinessWithPay: ["The pay just dropped again!", "I feel underpaid.", "I'm happy with a middle-paying job.", "Wow, I love this lucrative salary!"],
  happinessWithWorkingConditions: ["I don't like it here.", "It's a pretty dirty job.", "The job's nice.", "The bathrooms are beautiful here!"],
  happinessWithJobStability: ["This business is probably going bankrupt.", "I don't know how much longer I'll have this job.", "This job feels safe.", "I feel like this business will last."],
  happinessAboutLifeInGeneral: ["I just broke up with my girlfriend.", "I've been feeling down lately.", "Life's pretty alright.", "I feel on top of it today!"],
}

class Worker {
  constructor() {
    this.happinessWithPay = 1;
    this.happinessWithWorkingConditions = 1.01;
    this.happinessWithJobStability = 1;
    this.happinessAboutLifeInGeneral = 0.9 + Math.random() * 0.2; // 0.9 - 1.1
    this.happiness = 1;
    this.speed = 0.1;
    this.element = document.createElement("div");
    this.element.className = "worker";
    this.element.style.backgroundColor = getRandomColor();

    let last = performance.now();
    let progress = 0;
    this.working = setInterval(() => {
      const now = performance.now();
      const delta = (now - last) / 1000;
      last = now;
      progress += delta * this.speed;
      if (progress >= 1) {
        progress -= 1;
        this.work();
      }
    }, 16);
    setInterval(() => { this.pay(); this.setHappiness(); }, 1000);
  }

  work() {
    console.log("work");
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

  setHappiness() {
    /*const ratio = workerPay / 0.5;
    const exponent = 0.4 + 2.0 / (1 + Math.exp(10 * (ratio - 1)));
    this.happinessWithPay = Math.pow(ratio, exponent);*/

    if (workerPay < 0.5) {
      this.happinessWithPay = Math.pow(workerPay / 0.5, 2.5);
    } else {
      this.happinessWithPay = Math.pow(workerPay / 0.5, 0.4);
    }

    this.happinessWithJobStability = 1 + (marketing - 0.999);

    this.speed = ( this.happinessWithPay + this.happinessWithJobStability +
      this.happinessWithWorkingConditions + this.happinessAboutLifeInGeneral) / 4;

    let gain = milkChocolatePrice - ( (cacao.price + sugar.price + milk.price) / 15);
    gain *= this.speed;
    gain -= workerPay;
    document.getElementById("tommy").innerHTML = this.happinessWithPay.toFixed(2);
    document.getElementById("tommy2").innerHTML = this.speed.toFixed(2);
    document.getElementById("tommy3").innerHTML = gain.toFixed(2);
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

let computingIBought = false;
let computingIVisible = false;
let projectComputingI = {
  get bought() {return computingIBought;},
  set bought(val) {computingIBought = val;},

  get visible() {return computingIVisible;},
  set visible(val) {computingIVisible = val;},

  name: "Computing I",
  file: "projectComputingI",
  description: "View the popularity of your business as a single number!",

  price: 150,
  threshold: 101,

  purchase: () => {
    document.getElementById("marketing-wrapper").style.display = "inline-flex";
  }
}
let lunchBreaksBought = false;
let lunchBreaksVisible = false;
let projectLunchBreaks = {
  get bought() {return lunchBreaksBought;},
  set bought(val) {lunchBreaksBought = val;},

  get visible() {return lunchBreaksVisible;},
  set visible(val) {lunchBreaksVisible = val;},

  name: "Lunch Breaks",
  file: "projectLunchBreaks",
  description: "Make your employees slightly happier with lunch breaks",

  price: 150,
  threshold: 105,

  purchase: () => {
    for (let i in workers) {
      workers[i].happiness += 0.2;
    }
  }
}

const projects = {projectWorkers, projectAutobuyers, projectComputingI, projectLunchBreaks}