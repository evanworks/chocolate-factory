let t = 0;
let customersInStore = 0;
let customersBuying = 0;

function updateMains() {
  const moneyEl = document.getElementById("money");
  const barsEl = document.getElementById("bars");

  let parsedMoney = money;

  let parsedBars = 0;

  for (i in unlockedChocolates) {
    parsedBars += unlockedChocolates[i].correspondingItem;
  }
  
  // checks for exponents
  if (String(money).includes('e') || String(money).includes('E')) {
    parsedMoney = money.toExponential().replace("e+", "x10^");
  }
  if (String(bars).includes('e') || String(bars).includes('E')) {
    parsedBars = bars.toExponential().replace("e+", "x10^");
  }

  moneyEl.innerHTML = parsedMoney;
  barsEl.innerHTML = parsedBars;  
}

function handleCustomers() {
  t += 1;
  const sim = document.getElementById("simulation");
  for (let i = 0; i < popularity * 10 - 9; i++) {
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
  sim.innerHTML += "<br/>Customers in store: " + customersInStore;
  sim.innerHTML += "<br/>Customers buying: " + customersBuying;
}
function customerBuyBar() {
  // customer chose which type of thingie to buy
  let boughtItem = false;
  for (i in unlockedChocolates) {
    if (unlockedChocolates[i].correspondingItem > 0) {
      if (Math.random() > 0.6 - marketing / 10) {
        boughtItem = unlockedChocolates[i];
      }
      if (!boughtItem && unlockedChocolates[i] == unlockedChocolates[-1]) {
        boughtItem = unlockedChocolates[i];
      }
    }
  }

  if (!boughtItem) return;
  boughtItem.correspondingItem -= 1;
  money += boughtItem.priceNum;

  updateMains();
}


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('slide').addEventListener('input', (e) => {
    marketing = parseFloat(e.target.value);
    if (marketing == 0) marketing = 0.1;
    updateMains();
  });
});


setInterval(() => {
  handleCustomers();
}, 500)

function checkPassedBoundaries() {
  if (money > 20) {
    
  }
}