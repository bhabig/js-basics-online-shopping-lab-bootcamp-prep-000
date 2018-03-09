var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * (100 - 1)) + 1;
  cart.push({ [itemName]: itemPrice });
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0){
    return console.log('Your shopping cart is empty.');
  } else if(cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  } else if(cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`)
  } else if (cart.length >= 3){
    var itemsAndPrices = [];
    for (var i = 0; i < cart.length; i++) {
      itemsAndPrices.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
    }
    var threeOrMore = itemsAndPrices.slice(0,-1).join(', ')+', and '+ itemsAndPrices.slice(-1);
    //debugger;
    console.log(`In your cart, you have ${threeOrMore}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  console.log(cardNumber)
}
