// main variables
let bars = 0;
let money = 0;
let popularity = 1;
let bytes = 0;
let marketing = 1;
let factoryName = "";

let workerPay = 0.5;
let workerPrice = 75;
workerSpeed = 500;

isBoxes = false;
isDark = false;

let memory = 0;
let memoryPrice = 50;

let power = 1100;
let powerPrice = 50;
let powerLevel = -1;
let mining;

// project prices
workersprice = 75;
autobuyersprice = 100;
marketingprice = 150;
donutsprice = 200;
informationprice = 300;
boxesprice = 400;
darkchocolateprice = 600;

// update function things
let cycles = 0;
let boughtSomething = false;
lastSample = 0;
 
//setInterval(updateItems, 100)

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

function updateItems() {
  // console.log("JACKSON!!!! FUU")
  cycles += 1;

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
    if (bytes === 0) {
      document.getElementById("bytesBubble").style.display = "block";
      document.getElementById("memoryBubble").style.display = "block";
      document.getElementById("powerBubble").style.display = "block";
    }
  }
  if (money >= 20) {
    document.getElementById("production").style.display = "block";
    document.getElementById("production-locked").style.display = "none";
  }

  document.querySelector(".tooltipcacaoMilk").innerHTML = "1 Cacao (" + cacao + ")";

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
  
  workersStyle = document.getElementById("project-workers");
  autobuyersStyle = document.getElementById("project-autobuyers");
  marketingStyle = document.getElementById("project-marketing");
  donutsStyle = document.getElementById("project-donuts");
  informationStyle = document.getElementById("project-information");
  boxesStyle = document.getElementById("project-boxes");
  darkchocolateStyle = document.getElementById("project-darkchocolate");
  if (bytes >= 10 && workersStyle.style.color === "red") {
    workersStyle.style.display = "block";
    workersStyle.style.color = "black";
  }
  if (bytes >= 30 && autobuyersStyle.style.color === "red") {
    autobuyersStyle.style.display = "block";
    autobuyersStyle.style.color = "black";
  }
  if (bytes >= 100 && marketingStyle.style.color === "red") {
    marketingStyle.style.display = "block";
    marketingStyle.style.color = "black";    
  }
  if (bytes >= 130 && donutsStyle.style.color === "red") {
    donutsStyle.style.display = "block";
    donutsStyle.style.color = "black";    
  }
  if (bytes >= 150 && document.getElementById("marketing-wrapper").style.display === "inline-flex" && informationStyle.style.color === "red") {
    informationStyle.style.display = "block";
    informationStyle.style.color = "black";
  }
  if (bytes >= 200 && boxesStyle.style.color === "red") {
    boxesStyle.style.display = "block";
    boxesStyle.style.color = "black";
  }
  if (bytes >= 350 && darkchocolateStyle.style.color === "red") {
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
  /*marketing /= 3;
  marketing = marketing.toFixed(2)
  nonexistent = 20/marketing
  if (bars > 0 && cycles % Math.round(nonexistent) === 0) {
    sellItems(milkChocolatePrice, "milk");
  }*/
  ingredientprice = 0;
  if (cacao == 0) { ingredientprice += cacaoprice; }
  if (sugar == 0) { ingredientprice += sugarprice; }
  if (milk == 0) { ingredientprice += milkprice; }
  if (money < ingredientprice && boughtSomething === true) {
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

document.addEventListener("DOMContentLoaded", function() {
  createChocolate(unlockedChocolates);
  createIngredients(unlockedIngredients);

  // new tooltip stuff chatgpt created
  const tooltip = document.getElementById("global-tooltip");
  document.addEventListener("mouseover", e => {
    const item = e.target.closest(".map-item")
    if (!item) return

    const r = item.getBoundingClientRect()
    tooltip.textContent = item.querySelector(".tooltip")?.textContent || "";
    tooltip.innerHTML = tooltip.textContent.replace(/\|\s*([+-]?\d+(\.\d+)?)/g, (match, p1) => {
      const num = parseFloat(p1);
      if (num > 0) return `| <span style="color:lightgreen">${p1}</span>`;
      if (num < 0) return `| <span style="color:red">${p1}</span>`;
      return `| <span style="color:grey">${p1}</span>`;
    });

    tooltip.style.left = r.right + 55 + "px";
    tooltip.style.top = r.top + "px";
    tooltip.style.visibility = "visible";
  });

  document.addEventListener("mouseout", e => {
    if (e.target.closest(".map-item, .switch"))
      tooltip.style.visibility = "hidden";
  });

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

function DEBUGchangeVar(variable) {
  window[variable] = parseInt(prompt("are?"));
  document.getElementById(variable+"-debug").innerHTML = variable + ": " + window[variable];
}
function showSnackbar(snackbar) {
  let x = document.getElementById(snackbar);
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function adjustWidth() {
  const input = document.getElementById('name-input');
  const mirror = document.getElementById('inputMirror');
  
  mirror.textContent = input.value || input.placeholder;
  input.style.width = mirror.offsetWidth + 'px';
}


function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";

  return color;
}