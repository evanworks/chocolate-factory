function buyItem(item) {
  if (money >= window[item+"price"]) {
    window[item] += 15;
    money -= window[item+"price"];
    boughtSomething = true;
    document.getElementById("buyBubble").style.display = "none";
    document.getElementById("buyBubble").style.visibility = "hidden";
  } else {
    console.log(window[item+"price"]);
    alert("not enough money!")
  }
  if (cacao >= 1 && sugar >= 1 && milk >= 1) {
    document.getElementById("milk-chocolate").disabled = false;
  }
  if (cacao >= 2 && sugar >= 1) {
    document.getElementById("dark-chocolate").disabled = false;
  }
}

function createIngredients(valid) {
  const parent = document.getElementById("production");
  parent.innerHTML = "";
  for (let i in valid) {
    let ingredient = valid[i];
    let ingredientPrice = ingredient.price + ingredient.company[1][0];
    let wrapper = document.createElement("div");
    wrapper.id = ingredient.file;

    // map??? idk
    const map = document.createElement("div");
    map.classList.add("map");
    for (let k in ingredient.companies) {
      let company = ingredient.companies[k];

      const mapItem = document.createElement('div');
      mapItem.classList.add('map-item');
      if (k == 0) mapItem.classList.add('active');
      mapItem.onclick = () => { changeBrand(ingredient, k); }
      mapItem.innerHTML += company[0];

      /* not a functional tooltip, just info for the global tooltip*/
      const tooltip = document.createElement('span');
      tooltip.classList.add('tooltip');
      tooltip.innerHTML += "$"+parseInt(ingredient.price + company[1][0])+" | ";
      if (company[1][1] > 0) {
        tooltip.innerHTML += "<span style='color:lightgreen'>+"+company[1][1]+"</span>";
      } else if (company[1][1] < 0) {
        tooltip.innerHTML += "<span style='color:red'>" + company[1][1] + "</span>";
      } else {
        tooltip.innerHTML += "<span style='color:grey'>+" + company[1][1].toFixed(1) + "</span>";
      }
      
      mapItem.appendChild(tooltip);
      map.appendChild(mapItem);
    }

    // buy button
    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.onclick = () => {buy(ingredient);}
    buyButton.innerHTML = 'Buy '+ingredient.name+' ($'+ingredientPrice.toFixed(2)+')';

    // autobuyers switch
    const autobuyersSwitch = document.createElement("label");
    autobuyersSwitch.classList.add('switch');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    autobuyersSwitch.appendChild(checkbox);
    const slider = document.createElement('span');
    slider.classList.add('slider');
    autobuyersSwitch.appendChild(slider);
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.style.fontSize = '11px';
    tooltip.innerHTML = 'Toggle Autobuyers';
    autobuyersSwitch.appendChild(tooltip);

    ingredient.switch = autobuyersSwitch;

    // amount left
    let amountLeft = document.createElement('p');
    amountLeft.classList.add("amount-left");
    amountLeft.innerHTML = capitalizeFirstLetter(ingredient.flexPlural)+" left: " + ingredient.correspondingItem;

    // apend
    wrapper.appendChild(map);
    wrapper.appendChild(buyButton);
    wrapper.appendChild(autobuyersSwitch);
    wrapper.appendChild(amountLeft);

    parent.appendChild(wrapper);
  }
}

function changeBrand(ingredient, companyID) {
  marketing -= ingredient.company[1][1]; // reverts marketing change from prev brand

  ingredient.company = companyID;
  marketing += ingredient.company[1][1];
  ingredient.price = ingredient.basePrice + ingredient.company[1][0];

  // changing selected thingie (to make it feel official)
  event.target.classList.add('active');
  const siblings = Array.from(event.target.parentNode.children);
  siblings.forEach(sibling => {
    if (sibling !== event.target) {
      sibling.classList.remove('active');
    }
  });

  updateIngredients(ingredient);
}

// this is a mess but looks in each ingredient wrapper for .amount-left
function updateIngredients() {
  for (let i in unlockedIngredients) {
    const el = document.getElementById(unlockedIngredients[i].file);
    el.querySelector('.amount-left').innerHTML = capitalizeFirstLetter(unlockedIngredients[i].flexPlural) + " left: " + unlockedIngredients[i].correspondingItem;
    el.querySelector('.buy-button').innerHTML = 'Buy '+unlockedIngredients[i].name+' ($'+unlockedIngredients[i].price.toFixed(2)+')';
  }
}

function buy(item) {
  if (money >= item.price) {
    item.correspondingItem += 15;
    money -= item.price;
  } else {
    alert("not enough money :(");
  }

  updateMains();
  for (let i in unlockedChocolates) {
    updateTooltips(document.getElementById(unlockedChocolates[i].file));
  }
  updateIngredients();
}