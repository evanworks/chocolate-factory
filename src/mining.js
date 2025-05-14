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