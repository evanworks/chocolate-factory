bars = 0;
money = 0;
bytes = 0;

milkChocolatePrice = 4;

cacao = 15;
sugar = 15;
milk = 15;

cacaoprice = 10;
sugarprice = 5;
milkprice = 8;
workers = 0;

max = 0;
rate = 1000;

memoryPrice = 100;
powerPrice = 75;

workersprice = 100;

workerPay = 5;

workerPrice = 75;

console.clear();
setInterval(updateItems, 100)

function buyItem(item) {
  if (money >= window[item+"price"]) {
    window[item] += 15;
    money -= window[item+"price"];
    updateItems();
    document.getElementById("buyBubble").style.display = "none";
  } else {
    alert("not enough money!")
  }
  if (cacao >= 1 && sugar >= 1 && milk >= 1) {
    document.getElementById("milk-chocolate").disabled = false;
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
  }
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
      console.log("yes")
      document.getElementById("milk-chocolate").disabled = true;
    }
  }
  updateItems();
  runEvents();
  if (money < 0) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
}

function updateItems() {
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
  if (money >= 100) {
    document.getElementById("project").style.display = "block";
  }
  document.getElementById("cacao-left").innerHTML = "Beans left: " + cacao;
  document.getElementById("sugar-left").innerHTML = "Sugar left: " + sugar;
  document.getElementById("milk-left").innerHTML = "Milk left: " + milk;

  document.querySelector(".tooltipcacao").innerHTML = "Cacao (" + cacao + ")";
  if (cacao == 0) {
    document.querySelector(".tooltipcacao").style.color = "red";
  } else {
    document.querySelector(".tooltipcacao").style.color = "lightgreen";
  }

  document.querySelector(".tooltipsugar").innerHTML = "Sugar (" + sugar + ")";
  if (sugar == 0) {
    document.querySelector(".tooltipsugar").style.color = "red";
  } else {
    document.querySelector(".tooltipsugar").style.color = "lightgreen";
  }

  document.querySelector(".tooltipmilk").innerHTML = "Milk (" + milk + ")";
  if (milk == 0) {
    document.querySelector(".tooltipmilk").style.color = "red";
  } else {
    document.querySelector(".tooltipmilk").style.color = "lightgreen";
  }

  document.getElementById("buy-cacao").innerHTML = "Buy Cacao ($"+cacaoprice.toFixed(2)+")"
  document.getElementById("buy-sugar").innerHTML = "Buy Sugar ($"+sugarprice.toFixed(2)+")"
  document.getElementById("buy-milk").innerHTML = "Buy Milk ($"+milkprice.toFixed(2)+")"
  workersStyle = document.getElementById("project-workers");
  boxesStyle = document.getElementById("project-boxes");
  if (bytes >= 10 && workersStyle.style.color == "red") {
    workersStyle.style.display = "block";
    workersStyle.style.color = "black";
  }
  if (bytes >= 30 && boxesStyle.style.color == "red") {
    boxesStyle.style.display = "block";
    boxesStyle.style.color = "black";
  }
  //if (bars > milkChocolatePrice) {
    //moneyAdd = Math.round(milkChocolatePrice*10)/10 * milkChocolatePrice
    //money += parseInt(moneyAdd.toFixed(2))
    //bars -= Math.round(milkChocolatePrice)
  //}

}
function changeSeller(ingredient, price) {
  event.target.classList.add('active');
  const siblings = Array.from(event.target.parentNode.children);
    siblings.forEach(sibling => {
      if (sibling !== event.target) {
        sibling.classList.remove('active');
      }
  });
  window[ingredient+"price"] = price;
}
function runEvents() {
  console.log("customerDemand:"+calculateCustomerDemand(milkChocolatePrice))
  sellItems(milkChocolatePrice)
}
function hireWorker() {
  if (money >= workerPrice) {
    money -= workerPrice;
    workerPrice *= 1.5;
    document.getElementById("hireWorkerButton").innerHTML = "Hire Worker ("+workerPrice.toFixed(2)+")";
    workers += 1;
    const para = document.createElement("div");
    para.className = "worker";
    para.style.backgroundColor = getRandomColor();
    const element = document.getElementById("workers");
    document.getElementById("workers").appendChild(para);
  } else {
    console.log("hehe")
  }

}
document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        for (let i = 0; i < workers; i++) {
          clicked("milk")
        }
    }, 1000);
    setInterval(function() {
        if (max != 0 && bytes < max) {
            bytes += 1;
            document.getElementById("memory").innerHTML = bytes + "/" + max;
        }
    }, rate)
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
  if (bytes > window[type+"price"]) {
    event.currentTarget.style.display = "none";
    event.currentTarget.style.color = "black";
    bytes -= window[type+"price"];
    if (type == "workers") {
        document.getElementById("devices").style.display = "block";
    }
  } else {
    alert("Not enough money!!!!!!!")
  }
}
function changePay(workerType, increment) {
  if (workerType == "worker") {
    if (increment == 1) {
      workerPay += 0.1;
    } else {
      workerPay -= 0.1;
    }
    document.getElementById("workerPay").innerHTML = "$"+workerPay.toFixed(2)+"/h";
  }
  event.stopPropagation();
}

/// ********************** CHATGPT *********************** ///
function calculateCustomerDemand(pricePerBar) {
    const minCustomers = 1; // Minimum number of customers
    const maxCustomers = Math.round(10 - pricePerBar * 2);
    console.log("maxCustomers:"+maxCustomers)
    const demandFactor = 2/pricePerBar;

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
