let t = 0;
let customersInStore = 0;
let customersBuying = 0;

function updateMains() {
  const moneyEl = document.getElementById("money");
  const barsEl = document.getElementById("bars");

  let parsedMoney = money;

  let parsedBars = 0;

  for (let i in unlockedChocolates) {
    parsedBars += unlockedChocolates[i].correspondingItem;
  }
  
  // checks for exponents
  if (String(money).includes('e') || String(money).includes('E')) {
    parsedMoney = money.toExponential().replace("e+", "x10^");
  }
  if (String(bars).includes('e') || String(bars).includes('E')) {
    parsedBars = bars.toExponential().replace("e+", "x10^");
  }

  moneyEl.innerHTML = parsedMoney.toFixed(2);
  barsEl.innerHTML = parsedBars;
}

function handleCustomers() {
  t += 1;
  const sim = document.getElementById("simulation");
  // dont touch this college calclus
  for (let i = 0; i < (marketing/2) * 10 - 2.5; i++) {
    if (Math.random() * marketing > 0.8 * (marketing / 2)) {
      customersInStore++;
      let sigma = 0.6 - marketing / 10; // idk why this is called sigma dont ask

      console.log(sigma);
  
      if (Math.random() > sigma) {
        customersBuying++;

        customerBuyBar()
  
        setTimeout(()=>{customersBuying--;customersInStore--;}, 2000 * Math.random());
      } else {
        setTimeout(()=>{customersInStore--;},1000 * Math.random());
      }
    }
  }

  sim.innerHTML = "t = " + t;
  sim.innerHTML += "<br/>Marketing: " + marketing;
  sim.innerHTML += "<br/>Popularity: " + popularity;
  sim.innerHTML += "<br/>Customers in store: " + customersInStore;
  sim.innerHTML += "<br/>Customers buying: " + customersBuying;
}
document.addEventListener("keydown", (e) => {
  if (e.key === "[") {
    document.getElementById("simulationbody").style.display = document.getElementById("simulationbody").style.display === "none" ? "block" : "none";
  } else if (e.key === "e") {
    console.log("hi")
    document.body.style.setProperty(
      "background",
      `linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    )`,
      "important"
    );
  }
});
function customerBuyBar() {
  // customer chose which type of thingie to buy
  let boughtItem = null;
  for (let i in unlockedChocolates) {
    if (unlockedChocolates[i].correspondingItem > 0) {
      if (Math.random() > 0.6 - marketing / 10) { // fun maths
        boughtItem = unlockedChocolates[i];
      }
      if (!boughtItem && unlockedChocolates[i] === unlockedChocolates[-1]) {
        boughtItem = unlockedChocolates[i];
      }
    }
  }

  if (boughtItem) {
    boughtItem.correspondingItem -= 1;
    money += boughtItem.priceNum;
  }

  updateMains();
  updateMains();
}


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('slide').addEventListener('input', (e) => {
    marketing = parseFloat(e.target.value);
    if (marketing === 0) marketing = 0.1;
    updateMains();
  });
});


setInterval(() => {
  handleCustomers();
  checkPassedBoundaries();
}, 500)

function checkPassedBoundaries() {
  if (money >= 20) {
    document.getElementById("production").style.display = "block";
    document.getElementById("production-locked").style.display = "none";
  }
  if (money >= 120) {
    document.getElementById("project").style.display = "block";
    document.getElementById("project-locked").style.display = "none";
  }
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
