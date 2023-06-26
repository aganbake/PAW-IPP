// alert("Bienvenido a Cats&Co");
// let user = prompt("¿Cómo te llamas?");
// alert(`Que tengas una linda experiencia ${user}`);
let cat = 0; // Definimos una variable cat, para almacenar el número de gatitos
let colors = []; // definimos un arreglo de colors, para pasearnos por los diferentes colores de los gatitos, estos se usarán en la página principal

//primero inicializamos esta función para aser una llamada a nuesto archivo de gatitos
//que funcionará como una llamada api local
async function loadCats() {
  const response = await fetch("./assets/json/cats.json"); //hacemos el fetch
  const names = await response.json(); //lo almacenamos en names
  //opcionalmente podemos mostrar los gatitos por consola
  // console.log(names["cats"]);
}
//tendremos dos funciones, la catCall recibe un número de gatito por parametro
//que existe en el json de gatitos
//como acotación especial, en esta parte, tuve que jugar varias veces con el arreglo de gatitos para dar con la data
//siento que pasearme por arreglos siempre es un poquito mas complicado :)
async function catCall(number) {
  await fetch("./assets/json/cats.json")
    .then((response) => response.json())
    .then((data) => {
      //primero el fetch, se añade el .json() solo por seguridad de los datos
      let div = document.createElement("div"); //se crea un elemento div para añadir a nuestro home de gatitos
      for (let i = 0; i < data["cats"][number]["Colors"].length; i++) {
        colors += data["cats"][number]["Colors"][i].color + " ";
      } //acá nos paseamos por la data y extraemos los colores, para guardarlos en nuestro previo arreglo de gatitos
      div.innerHTML = `
        <img class="cat-img rounded-circle" src=./assets/images/${data["cats"][number].Name}.jpg>
        <h1 class="big-heading">${data["cats"][number].Name}</h1>
        <p class="two"> <strong> Tamaño </strong>: ${data["cats"][number].Size}</p>
        <p class="three"> <strong> Pelaje:</strong> ${data["cats"][number].Coat}</p>
        <p class="four"> <strong> Colores:</strong> ${colors}</p>
        <p class="cat"> <strong> Descripción:</strong> ${data["cats"][number].Description}</p>
        `; //acá crearemos lo que sería el gatito a mostrar, ya que se crearán 3 se hace de manera dinamica
      $(`#cat-${cat}`).append(div); //acá cada gatito creado, se añade a #cat-(número)
      cat++;
    })
    .catch((error) => console.log(error));
}
//esta es nuestra segunda función importante, que nos permitirá tener un listado completo de gatitos
async function catList() {
  await fetch("./assets/json/cats.json")
    .then((response) => response.json())
    .then((data) => {
      createCat(data);
    })
    .catch((error) => console.log(error));
  //dentro de la función asincrona, tenemos una función createCat, que usará los datos del fetch
  function createCat(data) {
    let table = document.getElementById("tbody"); //como en la página gatitos, ya existe nuestra tabla, le enviaremos el tbody
    table.innerHTML = ""; //por seguridad limpiamos la tabla
    for (let cats of data["cats"]) {
      //empezamos a generar gatitos, en este caso omití los colores, aunque solo tendría que replicar el for
      let tabla = document.createElement("tr");
      tabla.innerHTML = `
      <td>${cats.Name}</td>
      <td>${cats.Size}</td>
      <td>${cats.Coat}</td>
      <td>${cats.Description}</td>
      <td><img class="rounded zoom" src=./assets/images/${cats.Name}.jpg></td>
    `;
      $("#tbody").append(tabla);
    }
  }
}
//en el getcat, solo llamamos un número random entre 1 y el número de gatitos creados que fueron 14
function getCat() {
  const randomNumber = Math.floor(Math.random() * 14);
  catCall(randomNumber);
}
//featured cats, nos traerá 3 gatitos random que estén entre el 1 y el 14
function featuredCats() {
  for (let i = 0; i < 3; i++) {
    getCat();
  }
}
//finalmente al abrir el sitio, automáticamente se completan los gatitos del home y el listado
featuredCats();
// loadCats();
catList();

//repositorio de github https://github.com/aganbake/PAW-IPP.git
