const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
}

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Pentru numere mai mici decât valoarea limită, va funcționa continue, iar corpul
// execuției statement se oprește.
// Se va efectua următoarea iterație.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Numărul este mai mare decât ${threshold}: ${numbers[i]}`)
}; // 18, 29, 34

function multiply(x, y, z) {
    console.log(`Rezultatul înmulțirii este ${x * y * z}`);
  }

  multiply(2, 3, 4);


  function checkStorage(available, ordered) {
    // Change code below this line
    let message;
  
    if (ordered === 0) {
      return "Your order is empty!";
    } 
    if (ordered > available) {
       return "Your order is too large, not enough goods in stock!";
   
  
    return "The order is accepted, our manager will contact you";
    // Change code above this line
  }
  
    checkStorage(100, 50);
    checkStorage(100, 130);
    checkStorage(70, 0);
    checkStorage(200, 20);
    checkStorage(200, 250);
  checkStorage(150, 0);


  function calculateTotal(number) {
    // Change code below this line
   let sum = 0;
     for(i = 0; i <= number; i += 1){
       sum += 1;
     }
   console.log(sum);
     return sum;
   
     // Change code above this line
   }}

   const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = ["descr", "rating", "price"];
  const values = ["Spacious apartment in the city center", "4", "2153"];
  // Change code below this line
  
  for(keys in apartment){
    console.log(keys);
    console.log(apartment[keys]);
  }
  
  for(values in apartment){
    console.log(values);
    console.log(apartment[values]);
  }

  const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
      // Change code below this line
  this.books.splice(this.books.indexOf(odlName), 1, newName);
  
  
      // Change code above this line
    },
  };

  
  function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  // Change code below this line
  
  makePizza("Ultracheese", function EatPIzza(pizzaName, callback) {

    console.log(`Eating pizza, ${pizzaName}.`);

  }
  
  )

  // Change code below this line
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach (item); {
    totalPrice += item;
  };


}
// Change code above this line


class Car {
  // Change code below this line

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand(){
    return this.#brand;
  }
  changeBrand(newBrand){
    this.#brand = newBrand;
  }

  // Change code above this line
}


