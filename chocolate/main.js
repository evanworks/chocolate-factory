// main variables
bars = 0;
money = 0;
bytes = 0;
marketing = 1;

// initial chocolate prices
milkChocolatePrice = 4;
darkChocolatePrice = 5;
// XTRACHOCOLATE more space for more chocolates


// ingredient amounts
cacao = 15;
sugar = 15;
milk = 15; 

// ingredient prices
cacaoprice = 10;
sugarprice = 5;
milkprice = 8;

// worker variables
workers = 0;
workerPay = 5;
workerPrice = 75;
workerSpeed = 1000;

// boxes variable(s)?
isBoxes = false;

// byte mining variables
max = 0;
rate = 1000;

// byte mining upgrade prices
memoryPrice = 100;
powerPrice = 75;

// project prices
workersprice = 75;
autobuyersprice = 100;
donutsprice = 300;
boxesprice = 500;

// marketing variables
cacaoMarketing = 1;
sugarMarketing = 1;
milkMarketing = 1;
boxesMarketing = 0;

// update function things
let cycles = 0;

console.clear();
setInterval(updateItems, 100)

function buyItem(item) {
  if (money >= window[item+"price"]) {
    window[item] += 15;
    money -= window[item+"price"];
    updateItems();
    document.getElementById("buyBubble").style.display = "none";
    document.getElementById("buyBubble").style.visibility = "hidden";
  } else {
    alert("not enough money!")
  }
  if (cacao >= 1 && sugar >= 1 && milk >= 1) {
    document.getElementById("milk-chocolate").disabled = false;
  }
  if (cacao >= 2 && sugar >= 1) {
    document.getElementById("dark-chocolate").disabled = false;
  }
}

function changePrice(chocolateType, increment) {
  if (chocolateType == "milk" && milkChocolatePrice > 0.1) {
    if (increment == 1) {
      milkChocolatePrice += 0.1;
    } else {
      milkChocolatePrice -= 0.1;
    }
    document.getElementById("milkChocolatePrice").innerHTML = milkChocolatePrice.toFixed(2);
    document.getElementById("changePriceBubble").style.display = "none";
  } else if (chocolateType == "dark" && darkChocolatePrice > 0.1) {
    alert("yes")
    if (increment == 1) {
      darkChocolatePrice += 0.1;
    } else {
      darkChocolatePrice -= 0.1;
    }
  } // XTRACHOCOLATE add more chocolates here with an else if
  event.stopPropagation();
}

function clicked(chocolateType) {
  if (chocolateType == "milk") {
    if (cacao > 0 && sugar > 0 && milk > 0 && milkChocolatePrice > 0) {
      cacao -= 1;
      sugar -= 1;
      milk -= 1;
      bars += 1;
      document.getElementById("clickBubble").style.display = "none";
      //money += Math.round(milkChocolatePrice*10) / 10;
    } else {
      document.getElementById("buyBubble").style.display = "block";
      if (money > 75 && money < 125) {
        document.getElementById("sellerBubble").style.display = "block";
      }
      document.getElementById("milk-chocolate").disabled = true;
    }
  } else if (chocolateType == "dark") {
    
    if (cacao > 1 && sugar > 1 && darkChocolatePrice > 0) {
      cacao -= 2;
      sugar -= 1;
      bars += 1;
    } else {
      document.getElementById("buyBubble").style.display = "block";
      if (money > 75 && money < 125) {
        document.getElementById("sellerBubble").style.display = "block";
      }
      document.getElementById("dark-chocolate").disabled = true;
    }
  } // XTRACHOCOLATE add more chocolates here with an else if
  updateItems();
  runEvents();
  if (money < 0) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
}
function updateItems() {
  cycles += 1;
  console.log("cycles:")
  if (String(bars).includes('e') || String(bars).includes('E')) {
    document.getElementById("bars").innerHTML = bars.toExponential().replace("e+", "x10^");
  } else {
    document.getElementById("bars").innerHTML = bars;
  }
  if (String(money).includes('e') || String(money).includes('E')) {
    document.getElementById("money").innerHTML = money.toExponential().replace("e+", "x10^");
  } else {
    document.getElementById("money").innerHTML = money.toFixed(0);
  }
  if (money >= 120) {
    document.getElementById("project").style.display = "block";
    document.getElementById("project-locked").style.display = "none";
    document.getElementById("devices-locked").innerHTML = '<div class="locked" style="margin-top: 100%; font-size: 20px;">Unlocked at:</div><div class="locked" style="font-size: 40px;">75<span style="font-size: 20px;"> bytes</span></div>'
    if (bytes == 0) {
      document.getElementById("bytesBubble").style.display = "block";
      document.getElementById("memoryBubble").style.display = "block";
      document.getElementById("powerBubble").style.display = "block";
    }
  }
  if (money >= 20) {
    document.getElementById("production").style.display = "block";
    document.getElementById("production-locked").style.display = "none";
  }
  document.getElementById("cacao-left").innerHTML = "Beans left: " + cacao;
  document.getElementById("sugar-left").innerHTML = "Sugar left: " + sugar;
  document.getElementById("milk-left").innerHTML = "Milk left: " + milk;

  document.querySelector(".tooltipcacao").innerHTML = "1 Cacao (" + cacao + ")";
  if (cacao == 0) {
    document.querySelector(".tooltipcacao").style.color = "red";
  } else {
    document.querySelector(".tooltipcacao").style.color = "lightgreen";
  }

  document.querySelector(".tooltipsugar").innerHTML = "1 Sugar (" + sugar + ")";
  if (sugar == 0) {
    document.querySelector(".tooltipsugar").style.color = "red";
  } else {
    document.querySelector(".tooltipsugar").style.color = "lightgreen";
  }

  document.querySelector(".tooltipmilk").innerHTML = "1 Milk (" + milk + ")";
  if (milk == 0) {
    document.querySelector(".tooltipmilk").style.color = "red";
  } else {
    document.querySelector(".tooltipmilk").style.color = "lightgreen";
  }

  document.getElementById("buy-cacao").innerHTML = "Buy Cacao ($"+cacaoprice.toFixed(2)+")";
  document.getElementById("buy-sugar").innerHTML = "Buy Sugar ($"+sugarprice.toFixed(2)+")";
  document.getElementById("buy-milk").innerHTML = "Buy Milk ($"+milkprice.toFixed(2)+")";

  workersStyle = document.getElementById("project-workers");
  autobuyersStyle = document.getElementById("project-autobuyers");
  donutsStyle = document.getElementById("project-donuts");
  boxesStyle = document.getElementById("project-boxes");
  if (bytes >= 10 && workersStyle.style.color == "red") {
    workersStyle.style.display = "block";
    workersStyle.style.color = "black";
  }
  if (bytes >= 30 && autobuyersStyle.style.color == "red") {
    autobuyersStyle.style.display = "block";
    autobuyersStyle.style.color = "black";
  }
  if (bytes >= 100 && donutsStyle.style.color == "red") {
    donutsStyle.style.display = "block";
    donutsStyle.style.color = "black";    
  }
  if (bytes >= 200 && boxesStyle.style.color == "red") {
    boxesStyle.style.display = "block";
    boxesStyle.style.color = "black";
  }
  
  //if (bars > milkChocolatePrice) {
    //moneyAdd = Math.round(milkChocolatePrice*10)/10 * milkChocolatePrice
    //money += parseInt(moneyAdd.toFixed(2))
    //bars -= Math.round(milkChocolatePrice)
  //}
  marketing = cacaoMarketing + sugarMarketing + milkMarketing;
  marketing /= 3;
  marketing = marketing.toFixed(2)
  nonexistent = 20/marketing
  if (bars > 0 && cycles % Math.round(nonexistent) == 0) {
    sellItems(milkChocolatePrice);
  }
}
function changeSeller(ingredient, price, markChange) {
  if (event.target.classList.contains("active")) {
    markChange = 0;
  }
  event.target.classList.add('active');
  const siblings = Array.from(event.target.parentNode.children);
    siblings.forEach(sibling => {
      if (sibling !== event.target) {
        sibling.classList.remove('active');
      }
  });
  window[ingredient+"price"] = price;
  window[ingredient+"Marketing"] = 1 + markChange;
  document.getElementById("sellerBubble").style.display = "none";
}
function runEvents() {
  sellItems(milkChocolatePrice)
}
function hireWorker() {
  if (money >= workerPrice) {
    money -= workerPrice;
    workerPrice *= 1.5;
    document.getElementById("hireWorkerButton").innerHTML = "Hire Worker ($"+workerPrice.toFixed(2)+")";
    workers += 1;
    const para = document.createElement("div");
    para.className = "worker";
    para.style.backgroundColor = getRandomColor();
    const element = document.getElementById("workers");
    document.getElementById("workers").appendChild(para);
  } else {
    alert("u dont have enough money boohoo")
  }

}
document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        for (let i = 0; i < workers; i++) {
          clicked("milk")
          if (isBoxes == true) {
            money -= 2;
          }
        }
    }, workerSpeed);
    setInterval(function() {
        if (max != 0 && bytes < max) {
            bytes += 1;
            document.getElementById("memory").innerHTML = bytes + "/" + max;
        }
    }, rate)
    setInterval(function() {
        if (cacao > 0 && sugar > 0 && milk > 0) {
          money -= workerPay * workers;
        } else {
          console.log(":")
        }
    }, 60000)
});

function increaseMemory() {
    if (money >= memoryPrice) {
        max += 1000;
        const para = document.createElement("div");
        para.className = "chip";
        const element = document.getElementById("chips");
        document.getElementById("chips").appendChild(para);
        money -= memoryPrice;
        memoryPrice *= 1.5;
        document.getElementById("memoryButton").innerHTML = "Increase Memory ($"+memoryPrice.toFixed(2)+")";
        document.getElementById("memory").innerHTML = bytes + "/" + max;
        document.getElementById("bytesBubble").style.display = "none";
        document.getElementById("memoryBubble").style.display = "none";
        document.getElementById("powerBubble").style.display = "none";
        document.getElementById("bytesBubble").style.visibility = "hidden";
        document.getElementById("memoryBubble").style.visibility = "hidden";
        document.getElementById("powerBubble").style.visibility = "hidden";
        
    } else {
        alert("Not enough money!!!!!!!!!!!!!!!!!!!!!11")
    }
}
function increasePower() {
    if (money >= powerPrice) {
        rate -= 100;
        money -= powerPrice;
        powerPrice *= 1.5;

        setInterval(function() {
            if (max != 0 && bytes <= max) {
                bytes += 1;
                document.getElementById("memory").innerHTML = bytes + "/" + max;
            }
        }, rate)
    } else {
        alert("Not enough money!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11")
    }
}
function buyProject(type) {
  if (bytes >= window[type+"price"]) {
    event.currentTarget.style.display = "none";
    event.currentTarget.style.color = "black";
    bytes -= window[type+"price"];
    if (type == "workers") {
        document.getElementById("devices").style.display = "block";
        document.getElementById("devices-locked").style.display = "none";
    }
    if (type == "autobuyers") {
      document.getElementById("cacaoAutoBuyers").style.display = "inline-block";
      document.getElementById("sugarAutoBuyers").style.display = "inline-block";
      document.getElementById("milkAutoBuyers").style.display = "inline-block";
      setInterval(function() {
        if (cacao == 0 && document.getElementById("cacaoAutoBuyers").childNodes[1].checked) { buyItem("cacao") }
        if (sugar == 0 && document.getElementById("sugarAutoBuyers").childNodes[1].checked) { buyItem("sugar") }
        if (milk == 0 && document.getElementById("milkAutoBuyers").childNodes[1].checked) { buyItem("milk") }
      }, 200)
    }
    if (type == "donuts") {
      workerSpeed -= 200;
    }
    if (type == "boxes") {
      document.getElementById("boxesInfo").style.display = "block";
      document.getElementById("boxesToggle").style.display = "block";
      setInterval(function() {
        if (document.getElementById("boxesToggle").childNodes[1].checked) {
          document.getElementById("boxesInfo").innerHTML = "-$2 | <span style='color: lightgreen'>+0.8</span>";
          boxesMarketing = 0.8;
          marketing -= -boxesMarketing;
          isBoxes = true;
        } else {
          document.getElementById("boxesInfo").innerHTML = "<span style='color: darkgrey'>-$0 | +0.0</span>";
          if (boxesMarketing == 0.8) {
            marketing -= boxesMarketing;
            isBoxes = false;
            boxesMarketing = 1;
          }
        }
        console.log(marketing)
      }, 200)
    }
  } else {
    alert("u dont have enough money :))))");
  }
}
function changePay(workerType, increment) {
  if (workerType == "worker" && workerPay != 0) {
    if (increment == 1) {
      workerPay -= -0.1;
    } else if (increment == 0 && workerPay > 0.1) {
      workerPay -= 0.1;
    }
    if (workerPay > 0.1) {
      workerPay = workerPay.toFixed(2);
    }
    document.getElementById("workerPay").innerHTML = "$"+workerPay+"/h";
    workerSpeed = 750 - (workerPay * 50)
    workerSpeed = workerSpeed.toFixed(1);
    console.log(workerSpeed)
  }
  event.stopPropagation();  
}
document.addEventListener("keypress", function(event) {
  if (event.code == "KeyI" || event.code == "KeyU") {
    document.getElementById("debug").style.width = "100%";
    document.getElementById("bars-debug").innerHTML = "bars: " + bars;
    document.getElementById("money-debug").innerHTML = "money: " + money;
    document.getElementById("bytes-debug").innerHTML = "bytes: " + bytes;
    document.getElementById("marketing-debug").innerHTML = "marketing: " + marketing;
    document.getElementById("cacao-debug").innerHTML = "cacao: " + cacao;
    document.getElementById("sugar-debug").innerHTML = "sugar: " + sugar;
    document.getElementById("milk-debug").innerHTML = "milk: " + milk;
    document.getElementById("max-debug").innerHTML = "max: " + max;
    document.getElementById("rate-debug").innerHTML = "rate: " + rate;
    document.getElementById("workers-debug").innerHTML = "workers: " + workers;
    document.getElementById("workerPay-debug").innerHTML = "workerPay: " + workerPay;
    document.getElementById("workerPrice-debug").innerHTML = "workerPrice: " + workerPrice;
    document.getElementById("workerSpeed-debug").innerHTML = "workerSpeed: " + workerSpeed;
  }
});
function DEBUGchangeVar(variable) {
  window[variable] = parseInt(prompt("are?"));
  document.getElementById(variable+"-debug").innerHTML = variable + ": " + window[variable];
}
function showSnackbar(snackbar) {
  var x = document.getElementById(snackbar);
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
/// ********************** CHATGPT *********************** ///
function calculateCustomerDemand(pricePerBar) {
    const minCustomers = 1; // Minimum number of customers
    const maxCustomers = Math.round(10 - pricePerBar * 2);
    const demandFactor = 2/pricePerBar * marketing;

    const adjustedMinCustomers = Math.round(minCustomers * demandFactor/2);
    const adjustedMaxCustomers = Math.round(maxCustomers * demandFactor/2);

    return Math.floor(Math.random() * (adjustedMaxCustomers - adjustedMinCustomers + 1)) + adjustedMinCustomers;
}

function sellItems(pricePerBar) {
    const numCustomers = calculateCustomerDemand(pricePerBar);
    let barsSold = Math.min(bars, numCustomers); // Sell only as many bars as available
    if (barsSold === 0 || numCustomers === 0) {
        return;
    }
    const revenue = barsSold * pricePerBar;
    money += parseInt(revenue.toFixed())
    bars -= barsSold
}

function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";

  return color;
}
