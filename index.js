const Pizzas = [
  {
    id: 1,
    nombre: "Napolitana",
    ingredientes: ["tomate", "muzzarella", "pesto"],
    precio: 500,
  },

  {
    id: 2,
    nombre: "Fugazzeta",
    ingredientes: ["cebolla", "muzzarella", "oregano"],
    precio: 600,
  },

  {
    id: 3,
    nombre: "Cuatro quesos",
    ingredientes: ["roquefort", "muzzarella", "provolone", "reggianito"],
    precio: 700,
  },

  {
    id: 4,
    nombre: "Calabresa",
    ingredientes: ["provolone", "muzzarella", "salame"],
    precio: 800,
  },

  {
    id: 5,
    nombre: "Especial",
    ingredientes: ["jamon", "muzzarella", "morron"],
    precio: 900,
  },

  {
    id: 6,
    nombre: "Rucula",
    ingredientes: ["rucula", "muzzarella", "reggianito", "jamon crudo"],
    precio: 1000,
  },
];

const idImpar = Pizzas.filter((pizza) => pizza.id % 2 === 1).map((pizza) => pizza.nombre);

console.log(" ");

console.log(
  `Las pizzas con id par son: ${idImpar.toString().replaceAll(",", ", ").replace(", Especial", " y Especial")}.`
);

const menosDe600 = Pizzas.filter((pizza) => pizza.precio < 600).map((pizza) => pizza.nombre);

console.log(" ");

console.log(`La única pizza que vale menos de $600 es la ${menosDe600}.`);

const nombresDePizzas = Pizzas.map((pizza) => pizza.nombre);

console.log(" ");

console.log(
  `Los nombres de todas las pizzas son: ${nombresDePizzas
    .toString()
    .replaceAll(",", ", ")
    .replace(", Rucula", " y Rucula")}.`
);

const preciosDePizzas = Pizzas.map((pizza) => `$${pizza.precio}`);

console.log(" ");

console.log(
  `Los precios de las pizzas son: ${preciosDePizzas.toString().replaceAll(",", ", ").replace(", $1000", " y $1000")}.`
);

console.log(" ");

const nombresConPrecios = Pizzas.map((pizza) => console.log(`La ${pizza.nombre} cuesta $${pizza.precio}.`));

let titulo = document.getElementById("PizzaName");
let price = document.getElementById("PizzaPrice");
let button = document.getElementById("onSubmit");

button.addEventListener("click", () => {
  let input = document.getElementById("pizzaId").value;
  let valorAllado = Pizzas.find((pizza) => pizza.id === parseInt(input));

  if (valorAllado) {
    titulo.innerHTML = "";
    price.innerHTML = "";

    titulo.innerHTML += valorAllado.nombre;
    price.innerHTML += valorAllado.precio;
  } else {
    titulo.innerHTML = "";
    price.innerHTML = "";
    titulo.innerHTML += "No existe";
  }
});
