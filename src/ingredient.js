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