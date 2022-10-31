let products = {
  data: [
{nombre: "Zapato negro", tipo: "zapato", color: "negro", image: "./taco-negro.jpg"},
{nombre: "Zapato azul", tipo: "zapato", color: "azul", image: "./taco-azul.jpg"},
{nombre: "Bota negra", tipo: "bota", color: "negro", image: "./bota-negra.jpg"},
{nombre: "Bota azul", tipo: "bota", color: "azul", image: "./bota-azul.jpg"},
{nombre: "Zapato rojo", tipo: "zapato", color: "rojo", image: "./zapato-rojo.jpg"}
  ],
};

for (let i of products.data) {
  
  let card = document.createElement("div");
  //categoria oculta
  card.classList.add("card", i.categoria, "hide");
  //imagenes
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //tag de imagenes
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //nombre de producto
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.nombre.toUpperCase();
  container.appendChild(name);
  //color
  let color = document.createElement("h6");
  color.classList.add("product-color");
  color.innerText = i.color.toUpperCase();
  container.appendChild(color);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//boton
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //confirmar si la búsqueda coicide
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //seleccionar todos los elementos
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {

    //mostrar resultados
    if (value == "todo") {
      element.classList.remove("hide");
    } else {
      //comprobar si el elemento tiene una clase
      if (element.classList.contains(value)) {
        //mostrar por categoria
        element.classList.remove("hide");
      } else {
        //ocultar todos los elementos
        element.classList.add("hide");
      }
    }
  });
}

//boton de busqueda
document.getElementById("search").addEventListener("click", () => {
  //inicialización
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop 
  elements.forEach((element, index) => {
    //veridicar el valor buscado
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //mostrar coincidencias
      cards[index].classList.remove("hide");
    } else {
      //ocultar las que no
      cards[index].classList.add("hide");
    }
  });
});

//iniciar mostrar todos los productos
window.onload = () => {
  filterProduct("todo");
};