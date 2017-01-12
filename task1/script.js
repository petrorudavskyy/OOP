//major function Market 
function Market(place, weight, price) {
  this.place = place;
  this.weight = weight;
  this.price = price;
}
//prototype for price
Market.prototype.getPrice = function() {
  return this.price;
}
//function that calculate randomPrice of product
function setPrice () {
  var randomPrice = Math.floor(Math.random() * 100);
  return randomPrice;
}
//prototype for weight
Market.prototype.getWeight = function() {
  return this.weight;
}
//functon that calculate random weight of product
function setWeight() {
  var randomWeight = Math.floor(1 + Math.random() * 10);
  return randomWeight;
}
//place where product is
function setPlace() {
  var places = ['grocery', 'dry', 'bakery', 'confectionary', 'frozen foods', 'greengrocery', 'dairy products', 'meat and fowl'];
  var place = places[Math.floor(Math.random()*places.length)];
  return place;
}

(function() {
  var items = [];
  var prices = [];
  var weights = [];
  var total = 0;
  for (var i = 0; i < 15; i++) {
    items.push(new Market(setPlace(), setWeight(), setPrice()));
    prices.push(items[i].getPrice());
    weights.push(items[i].getWeight());
    total += items[i].getPrice();
    console.log(items[i])
  }

  console.log("Prices of every item, that you buy in market:  " + prices);
  console.log("Weight of every item, that you buy in market: " + weights);
  console.log("You spend : " + total);
})();
