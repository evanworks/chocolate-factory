// main variables
bars = 0; 
money = 0; 
bytes = 0;
marketing = 1;
factoryName = "";

// chocolate bar amount variables
milkBars = 0;
darkBars = 0;

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
workerSpeed = 500;

// is - Something
isBoxes = false;
isDark = false;

// byte mining variables
max = 0;
rate = 1000;
powerLevel = 0;
let bytemine = setInterval(function() {console.log('oh no')}, 100);

// byte mining upgrade prices
memoryPrice = 50;
powerPrice = 75;

// project prices
workersprice = 75;
autobuyersprice = 100;
marketingprice = 150;
donutsprice = 200;
informationprice = 300;
boxesprice = 400;
darkchocolateprice = 600;

// marketing variables
cacaoMarketing = 1;
sugarMarketing = 1;
milkMarketing = 1;
boxesMarketing = 0;

// update function things
let cycles = 0;
boughtSomething = false;
lastSample = 0;

console.clear();
setInterval(updateItems, 100)

function buyItem(item) {
  if (money >= window[item+"price"]) {
    window[item] += 15;
    money -= window[item+"price"];
    updateItems();
    boughtSomething = true;
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
  // XTRACHOCOLATE add another if
}
z = 0;
function fadeIn() {
  z += 0.01;

  document.getElementById("gameOver").style.opacity = z;
  if (z < 1.01) {
    setTimeout(fadeIn, 10);
  } else {
    document.body.style.background = "black";
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
    if (increment == 1) {
      darkChocolatePrice += 0.1;
    } else {
      darkChocolatePrice -= 0.1;
    }
    document.getElementById("darkChocolatePrice").innerHTML = darkChocolatePrice.toFixed(2);
  } // XTRACHOCOLATE add more chocolates here with an else if
  event.stopPropagation();
}

function clicked(chocolateType) {
  if (chocolateType == "milk") {
    if (cacao > 0 && sugar > 0 && milk > 0 && milkChocolatePrice > 0) {
      cacao -= 1;
      sugar -= 1;
      milk -= 1;
      milkBars += 1;
      document.getElementById("clickBubble").style.display = "none";
      sellItems(milkChocolatePrice, "milk")
    } else {
      document.getElementById("buyBubble").style.display = "block";
      document.getElementById("milk-chocolate").disabled = true;
    }
  } else if (chocolateType == "dark") {
    if (cacao > 1 && sugar > 1 && darkChocolatePrice > 0) {
      cacao -= 2;
      sugar -= 1;
      darkBars += 1;
      sellItems(darkChocolatePrice, "dark")
      isDark = true;
    } else {
      document.getElementById("buyBubble").style.display = "block";
      document.getElementById("dark-chocolate").disabled = true;
    }
  } // XTRACHOCOLATE add more chocolates here with an else if
  updateItems();
  
  if (money < 0) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
  // showSnackbar("snackbar");
}
function updateItems() {
  // console.log("JACKSON!!!! FUU")
  cycles += 1;
  bars = milkBars + darkBars;

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

  document.querySelector(".tooltipcacaoMilk").innerHTML = "1 Cacao (" + cacao + ")";

  if (cacao == 0) {
    document.querySelector(".tooltipcacaoMilk").style.color = "red";
  } else {
    document.querySelector(".tooltipcacaoMilk").style.color = "lightgreen";
  }

  document.querySelector(".tooltipsugarMilk").innerHTML = "1 Sugar (" + sugar + ")";
  if (sugar == 0) {
    document.querySelector(".tooltipsugarMilk").style.color = "red";
  } else {
    document.querySelector(".tooltipsugarMilk").style.color = "lightgreen";
  }

  document.querySelector(".tooltipmilkMilk").innerHTML = "1 Milk (" + milk + ")";
  if (milk == 0) {
    document.querySelector(".tooltipmilkMilk").style.color = "red";
  } else {
    document.querySelector(".tooltipmilkMilk").style.color = "lightgreen";
  }
  

  
  document.querySelector(".tooltipcacaoDark").innerHTML = "2 Cacao (" + cacao + ")";

  if (cacao == 1 || cacao == 0) {
    document.querySelector(".tooltipcacaoDark").style.color = "red";
  } else {
    document.querySelector(".tooltipcacaoDark").style.color = "lightgreen";
  }

  document.querySelector(".tooltipsugarDark").innerHTML = "1 Sugar (" + sugar + ")";
  if (sugar == 0) {
    document.querySelector(".tooltipsugarDark").style.color = "red";
  } else {
    document.querySelector(".tooltipsugarDark").style.color = "lightgreen";
  }
  
  if (money >= powerPrice && memoryPrice > 50) {
    document.getElementById("powerButton").disabled = false;
  } else {
    document.getElementById("powerButton").disabled = true;
  }

  if (money >= 80) {
    document.getElementById("cacaoMap").style.display = "block";
    document.getElementById("cacaoLocked").style.display = "none";

    document.getElementById("sugarMap").style.display = "block";
    document.getElementById("sugarLocked").style.display = "none";

    document.getElementById("milkMap").style.display = "block";
    document.getElementById("milkLocked").style.display = "none";

    document.getElementById("sellerBubble").style.display = "block";
  }
  document.getElementById("buy-cacao").innerHTML = "Buy Cacao ($"+cacaoprice.toFixed(2)+")";
  document.getElementById("buy-sugar").innerHTML = "Buy Sugar ($"+sugarprice.toFixed(2)+")";
  document.getElementById("buy-milk").innerHTML = "Buy Milk ($"+milkprice.toFixed(2)+")";
  
  workersStyle = document.getElementById("project-workers");
  autobuyersStyle = document.getElementById("project-autobuyers");
  marketingStyle = document.getElementById("project-marketing");
  donutsStyle = document.getElementById("project-donuts");
  informationStyle = document.getElementById("project-information");
  boxesStyle = document.getElementById("project-boxes");
  darkchocolateStyle = document.getElementById("project-darkchocolate");
  if (bytes >= 10 && workersStyle.style.color == "red") {
    workersStyle.style.display = "block";
    workersStyle.style.color = "black";
  }
  if (bytes >= 30 && autobuyersStyle.style.color == "red") {
    autobuyersStyle.style.display = "block";
    autobuyersStyle.style.color = "black";
  }
  if (bytes >= 100 && marketingStyle.style.color == "red") {
    marketingStyle.style.display = "block";
    marketingStyle.style.color = "black";    
  }
  if (bytes >= 130 && donutsStyle.style.color == "red") {
    donutsStyle.style.display = "block";
    donutsStyle.style.color = "black";    
  }
  if (bytes >= 150 && document.getElementById("marketing-wrapper").style.display == "inline-flex" && informationStyle.style.color == "red") {
    informationStyle.style.display = "block";
    informationStyle.style.color = "black";
  }
  if (bytes >= 200 && boxesStyle.style.color == "red") {
    boxesStyle.style.display = "block";
    boxesStyle.style.color = "black";
  }
  if (bytes >= 350 && darkchocolateStyle.style.color == "red") {
    darkchocolateStyle.style.display = "block";
    darkchocolateStyle.style.color = "black";
  }
  if (bytes < workersprice) {
    workersStyle.style.filter = 'brightness(0.7)';
    workersStyle.style.opacity = 0.6;
    workersStyle.style.background = "white";
    workersStyle.style.transform = "unset";
    workersStyle.style.cursor = "auto";
  } else {
    workersStyle.style.filter = 'brightness(1.0)';
    workersStyle.style.opacity = 1.0;
    workersStyle.style.background = null;
    workersStyle.style.transform = null;
    workersStyle.style.cursor = "pointer";
  }
  if (bytes < autobuyersprice) {
    autobuyersStyle.style.filter = 'brightness(0.7)';
    autobuyersStyle.style.opacity = 0.6;
    autobuyersStyle.style.background = "white";
    autobuyersStyle.style.transform = "unset";
    autobuyersStyle.style.cursor = "auto";
  } else {
    autobuyersStyle.style.filter = 'brightness(1.0)';
    autobuyersStyle.style.opacity = 1.0;
    autobuyersStyle.style.background = null;
    autobuyersStyle.style.transform = null;
    autobuyersStyle.style.cursor = "pointer";
  }
  if (bytes < marketingprice) {
    marketingStyle.style.filter = 'brightness(0.7)';
    marketingStyle.style.opacity = 0.6;
    marketingStyle.style.background = "white";
    marketingStyle.style.transform = "unset";
    marketingStyle.style.cursor = "auto";
  } else {
    marketingStyle.style.filter = 'brightness(1.0)';
    marketingStyle.style.opacity = 1.0;
    marketingStyle.style.background = null;
    marketingStyle.style.transform = null;
    marketingStyle.style.cursor = "pointer";
  }
  if (bytes < donutsprice) {
    donutsStyle.style.filter = 'brightness(0.7)';
    donutsStyle.style.opacity = 0.6;
    donutsStyle.style.background = "white";
    donutsStyle.style.transform = "unset";
    donutsStyle.style.cursor = "auto";
  } else {
    donutsStyle.style.filter = 'brightness(1.0)';
    donutsStyle.style.opacity = 1.0;
    donutsStyle.style.background = null;
    donutsStyle.style.transform = null;
    donutsStyle.style.cursor = "pointer";
  }
  if (bytes < informationprice) {
    informationStyle.style.filter = 'brightness(0.7)';
    informationStyle.style.opacity = 0.6;
    informationStyle.style.background = "white";
    informationStyle.style.transform = "unset";
    informationStyle.style.cursor = "auto";
  } else {
    informationStyle.style.filter = 'brightness(1.0)';
    informationStyle.style.opacity = 1.0;
    informationStyle.style.background = null;
    informationStyle.style.transform = null;
    informationStyle.style.cursor = "pointer";
  }
  if (bytes < boxesprice) {
    boxesStyle.style.filter = 'brightness(0.7)';
    boxesStyle.style.opacity = 0.6;
    boxesStyle.style.background = "white";
    boxesStyle.style.transform = "unset";
    boxesStyle.style.cursor = "auto";
  } else {
    boxesStyle.style.filter = 'brightness(1.0)';
    boxesStyle.style.opacity = 1.0;
    boxesStyle.style.background = null;
    boxesStyle.style.transform = null;
    boxesStyle.style.cursor = "pointer";
  }
  if (bytes < darkchocolateprice) {
    darkchocolateStyle.style.filter = 'brightness(0.7)';
    darkchocolateStyle.style.opacity = 0.6;
    darkchocolateStyle.style.background = "white";
    darkchocolateStyle.style.transform = "unset";
    darkchocolateStyle.style.cursor = "auto";
  } else {
    darkchocolateStyle.style.filter = 'brightness(1.0)';
    darkchocolateStyle.style.opacity = 1.0;
    darkchocolateStyle.style.background = null;
    darkchocolateStyle.style.transform = null;
    darkchocolateStyle.style.cursor = "pointer";
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
    sellItems(milkChocolatePrice, "milk");
  }
  ingredientprice = 0;
  if (cacao == 0) { ingredientprice += cacaoprice; }
  if (sugar == 0) { ingredientprice += sugarprice; }
  if (milk == 0) { ingredientprice += milkprice; }
  if (money < ingredientprice && boughtSomething == true) {
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("gameOver").style.visibility = "visible";
    fadeIn();
  }

  displayMarketing = marketing - 1.00;
  if (displayMarketing > 0) {
    document.getElementById("marketing").innerHTML = "+" + displayMarketing.toFixed(2) + "";
    document.getElementById("marketing").style.color = "lightgreen";
  } else if (displayMarketing < 0) {
    document.getElementById("marketing").innerHTML = displayMarketing.toFixed(2) + "";
    document.getElementById("marketing").style.color = "salmon";
  } else {
    document.getElementById("marketing").innerHTML = "+" + displayMarketing.toFixed(2) + "";
    document.getElementById("marketing").style.color = "lightgrey";
  }
  


  if (cycles % 10 == 0 || cycles == 1) {
    currentSample = money
    console.log(lastSample+"lastSample")
    console.log(currentSample+"currentSample")
    if (currentSample > lastSample) {
      document.getElementById("currentMoneyState").innerHTML = "You are making money from this chocolate";
      document.getElementById("currentMoneyState").style.color = "lightgreen";
    } else if (currentSample < lastSample) {
      document.getElementById("currentMoneyState").innerHTML = "You are losing money from this chocolate";
      document.getElementById("currentMoneyState").style.color = "red";
    } else {
      document.getElementById("currentMoneyState").innerHTML = "You are making no money from this chocolate";
      document.getElementById("currentMoneyState").style.color = "lightgrey";
    }
    lastSample = currentSample;
    console.log("______")
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
  document.getElementById("sellerBubble").style.visibility = 'hidden';
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
          if (isDark == true) {
            clicked("dark")
          }
          if (isBoxes == true) {
            money -= 2;
          }
        }
    }, workerSpeed);
    setInterval(function() {
        if (max != 0) {
          if (bytes < max) {
            bytes += 1;
            document.getElementById("memory").innerHTML = bytes + "/" + max;
          } 
        }
    }, rate)
    setInterval(function() {
        if (cacao > 0 && sugar > 0 && milk > 0) {
          money -= workerPay * workers;
        } else {
          console.log(":")
        }
    }, 600000)
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    document.getElementById("information").onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});

function increaseMemory() {
    if (money >= memoryPrice) {
        max += 100;
        const para = document.createElement("div");
        para.className = "chip";
        const element = document.getElementById("chips");
        document.getElementById("chips").appendChild(para);
        money -= memoryPrice;
        memoryPrice += 50;
        document.getElementById("powerButton").disabled = false;
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
let autoclicker = setInterval(function() {
  console.log('wybdeawydiauydwiuyawiudywai')
}, rate);
function increasePower() {
    if (money >= powerPrice) {
        rate -= 100;
        money -= powerPrice;
        powerPrice *= 1.5;
        powerLevel += 1;
        document.getElementById("powerButton").innerHTML = "Increase Power ($"+powerPrice.toFixed(2)+")";
        setInterval(function() {
          var chips = document.querySelectorAll(".chip");
          if (powerLevel == 1) {
            chips.forEach(chip => {
              chip.style.background = "#228526";
              chip.style.height = "19px";
              chip.style.width = "19px";
            });
          } else if (powerLevel == 2) {
            chips.forEach(chip => {
              chip.style.background = "#2fed36";
              chip.style.height = "18px";
              chip.style.width = "18px";
            });    
          } else if (powerLevel == 3) {
            chips.forEach(chip => {
              chip.style.background = "#25b5e6";
              chip.style.height = "17px";
              chip.style.width = "17px";
            });    
          } else if (powerLevel == 4) {
            chips.forEach(chip => {
              chip.style.background = "#233ab0";
              chip.style.height = "17px";
              chip.style.width = "17px";
            });  
          } else if (powerLevel == 5) {
            chips.forEach(chip => {
              chip.style.background = "#41ab9d";
              chip.style.height = "21px";
              chip.style.width = "21px";
            });  
          } else if (powerLevel == 6) {
            chips.forEach(chip => {
              chip.style.background = "#eb8d13";
              chip.style.height = "22px";
              chip.style.width = "22px";
            });  
          } else if (powerLevel == 7) {
            chips.forEach(chip => {
              chip.style.background = "#f97ce4";
              chip.style.height = "23px";
              chip.style.width = "23px";
            });  
          } else if (powerLevel == 8) {
            chips.forEach(chip => {
              chip.style.background = "#a2375b";
              chip.style.height = "23px";
              chip.style.width = "23px";
            });  
          } else if (powerLevel == 9) {
            chips.forEach(chip => {
              chip.style.background = "#ccc5a1";
              chip.style.height = "20px";
              chip.style.width = "20px";
            });  
          } else if (powerLevel == 10) {
            chips.forEach(chip => {
              chip.style.background = "radial-gradient(#67b26f, #4ca2cd)";
              chip.style.height = "25px";
              chip.style.width = "25px";
              document.getElementById("powerButton").style.display = "none";
            });  
          }
        }, 200)
        clearInterval(autoclicker)
        clearInterval(autoclicker)
        autoclicker = setInterval(function() {
          if (max != 0 && bytes < max) {
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
    if (type == "marketing") {
      document.getElementById("marketing-wrapper").style.display = "inline-flex";
    }
    if (type == "donuts") {
      workerSpeed -= 200;
    }
    if (type == "boxes" && document.getElementById("devices").style.display == "block") {
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
      }, 200)
    }
    if (type == "information") {
      document.getElementById("informationBar").style.display = "block";
      document.getElementById("currentMoneyState").style.display = "block";
    }
    if (type == "darkchocolate") {
      document.getElementById("dark-chocolate").style.display = "inline-block";
      isDark = true;
    }
  } else {
    alert("u dont have enough bytes :((((");
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
  }
  event.stopPropagation();  
}
document.addEventListener("keypress", function(event) {
  if (event.code == "BracketRight//") {
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
function adjustWidth() {
  const input = document.getElementById('name-input');
  const mirror = document.getElementById('inputMirror');
  
  mirror.textContent = input.value || input.placeholder;
  input.style.width = mirror.offsetWidth + 'px';
}


function calculateCustomerDemand(pricePerBar) {
    const minCustomers = 1; // Minimum number of customers
    const maxCustomers = Math.round(10 - pricePerBar * 2);
    const demandFactor = 2/pricePerBar * marketing;

    const adjustedMinCustomers = Math.round(minCustomers * demandFactor/2);
    const adjustedMaxCustomers = Math.round(maxCustomers * demandFactor/2);

    return Math.floor(Math.random() * (adjustedMaxCustomers - adjustedMinCustomers + 1)) + adjustedMinCustomers;
}

function sellItems(pricePerBar, chocolateType) {

    
    if (chocolateType == "milk") {
      numCustomers = calculateCustomerDemand(pricePerBar);
    } else if (chocolateType == "dark") {
      numCustomers = calculateCustomerDemand(pricePerBar/1.5);
    } else {
      console.error("yep")
    }
    let barsSold = Math.min(bars, numCustomers); // Sell only as many bars as available
    if (barsSold === 0 || numCustomers === 0) {
        return;
    }
    const revenue = barsSold * pricePerBar;
    money += parseInt(revenue.toFixed())
    
    
    window[chocolateType+"Bars"] -= barsSold
}

function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";

  return color;
}