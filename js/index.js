// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneShroom) => {
    if (state.mushrooms) {
      oneShroom.style.visibility = 'visible';
    } else {
      oneShroom.style.visibility = 'hidden';
    }
  });}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'visible';
    } else {
      oneCrust.style.visibility = 'hidden';
    }
  });}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni == true) document.querySelector('.btn.btn-pepperoni').classList.add('active');
  else document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  
  if(state.mushrooms == true) document.querySelector('.btn.btn-mushrooms').classList.add('active');
  else document.querySelector('.btn.btn-mushrooms').classList.remove('active');

  if(state.greenPeppers == true) document.querySelector('.btn.btn-green-peppers').classList.add('active');
  else document.querySelector('.btn.btn-green-peppers').classList.remove('active');

  if(state.whiteSauce == true) document.querySelector('.btn.btn-sauce').classList.add('active');
  else document.querySelector('.btn.btn-sauce').classList.remove('active');

  if(state.glutenFreeCrust == true) document.querySelector('.btn.btn-crust').classList.add('active');
  else document.querySelector('.btn.btn-crust').classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var pepPrice = state.pepperoni * ingredients.pepperoni.price;
  var shroomPrice = state.mushrooms * ingredients.mushrooms.price;
  var pepperPrice = state.greenPeppers * ingredients.greenPeppers.price;
  var saucePrice = state.whiteSauce * ingredients.whiteSauce.price;
  var crustPrice = state.glutenFreeCrust * ingredients.glutenFreeCrust.price;
  var price = pepPrice+shroomPrice+pepperPrice+saucePrice+crustPrice+10;
  document.querySelector('.price').innerHTML = `
  
  <h2>Your pizza's price</h2>

      <b>$10 cheese pizza</b>
      <ul>
        <li>$`+pepPrice+` pepperoni</li>
        <li>$`+shroomPrice+` mushrooms</li>
        <li>$`+pepperPrice+` green peppers</li>
        <li>$`+saucePrice+` white sauce</li>
        <li>$`+crustPrice+` gluten-free crust</li>
      </ul>
      <strong>$`+price+`</strong>
  
  `;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});