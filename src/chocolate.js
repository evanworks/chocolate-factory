// draws a chocolate (button and tooltip)
function createChocolate(valid) {
  const parent = document.getElementById("chocolate-types");
  parent.innerHTML = "";
  for (let i in valid) {
    let chocolate = valid[i];

    let wrapper = document.createElement("button");
    wrapper.id = chocolate.file;
    wrapper.onclick = () => {clicked(chocolate);}
    wrapper.classList.add("chocolate");

    let tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.onclick = (event) => {event.stopPropagation();}
    tooltip.innerHTML += chocolate.name + "<br/>";

    tooltip.innerHTML += `
      <a href="#" onclick="changePrice(`+chocolate.file+`, 0)"> < </a> 
        $<span id="`+chocolate.priceId+`">`+chocolate.priceNum.toFixed(2)+`</span> 
      <a href="#" onclick="changePrice(`+chocolate.file+`, 1)"> > </a>
    `;
    tooltip.innerHTML += `<hr style="width: 90px; color: white;"/>`;

    let randomSpans = document.createElement("span");
    for (let j in chocolate.recipe) {
      let ingredient = chocolate.recipe[j][0];
      let amount = chocolate.recipe[j][1];

      const unnamedSpan = document.createElement("span");
      unnamedSpan.classList.add(ingredient.file);
      unnamedSpan.innerHTML += amount+" "+ingredient.name+" ("+ingredient.correspondingItem+")<br/>";

      randomSpans.appendChild(unnamedSpan);
    }
    tooltip.appendChild(randomSpans)
    wrapper.appendChild(tooltip);
    parent.appendChild(wrapper);

    updateTooltips(wrapper)
  }
}

// updates text on chocolate tooltips, takes in an html element that is specifically a chocolate button
function updateTooltips(parent) {
  let childs = parent.children[0].children[5].children;
  let chocolate = eval(parent.id);
  for (let i = 0; i < childs.length; i++) {
    let ingredient = eval(childs[i].classList[0]);
    if (chocolate.recipe[i][1] > ingredient.correspondingItem) {
      childs[i].style.color = 'red';
    } else {
      childs[i].style.color = 'lightgreen';
    }
    childs[i].innerHTML = chocolate.recipe[i][1]+" "+chocolate.recipe[i][0].name+" ("+chocolate.recipe[i][0].correspondingItem+")<br/>";
  }
}

function changePrice(chocolate, increment) {
  if (chocolate.priceNum <= 0.1) return;
  // please ignore the ugly floating point errors here
  // p.s. i hate js
  if (increment === 1) {
    chocolate.priceNum += 0.1;
    marketing -= 0.05;
  } else {
    chocolate.priceNum -= 0.1;
    marketing += 0.05;
  }
  document.getElementById(chocolate.priceId).innerHTML = chocolate.priceNum.toFixed(2);
}

function canMakeChocolate(chocolate) {
  let canMake = true;
  for (let i in chocolate.recipe) {
    if (chocolate.recipe[i][1] > chocolate.recipe[i][0].correspondingItem) {
      canMake = false;
    } 
  }
  return canMake;
}

function clicked(chocolate) {
  if ( canMakeChocolate(chocolate) ) {
    // depletes resources
    for (let i in chocolate.recipe) {
      chocolate.recipe[i][0].correspondingItem -= chocolate.recipe[i][1];
    }
    // more choklit yay
    chocolate.correspondingItem++;
    document.getElementById("clickBubble").style.display = "none";
  }
  updateTooltips(document.getElementById(chocolate.file));
  updateIngredients();
  updateMains();
}