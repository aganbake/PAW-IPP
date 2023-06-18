// alert("Bienvenido a Cats&Co");
// let user = prompt("¿Cómo te llamas?");
// alert(`Que tengas una linda experiencia ${user}`);
let cat = 0;
let colors = [];

async function loadCats() {
  const response = await fetch("./assets/json/cats.json");
  const names = await response.json();

  console.log(names["cats"]);
}

async function catCall(number) {
  await fetch("./assets/json/cats.json")
    .then((response) => response.json())
    .then((data) => {
      let div = document.createElement("div");
      for (let i = 0; i < data["cats"][number]["Colors"].length; i++) {
        colors += data["cats"][number]["Colors"][i].color + " ";
      }
      div.innerHTML = `
        <img class="cat-img rounded-circle" src=./assets/images/${data["cats"][number].Name}.jpg>
        <h1 class="big-heading">${data["cats"][number].Name}</h1>
        <p> <strong> Tamaño </strong>: ${data["cats"][number].Size}</p>
        <p> <strong> Pelaje:</strong> ${data["cats"][number].Coat}</p>
        <p> <strong> Colores:</strong> ${colors}</p>
        <p class="cat"> <strong> Descripción:</strong> ${data["cats"][number].Description}</p>
        `;
      $(`#cat-${cat}`).append(div);
      cat++;
    })
    .catch((error) => console.log(error));
}

async function catList() {
  await fetch("./assets/json/cats.json")
    .then((response) => response.json())
    .then((data) => {
      createCat(data);
    })
    .catch((error) => console.log(error));

  function createCat(data) {
    let table = document.getElementById("tbody");
    table.innerHTML = "";
    for (let cats of data["cats"]) {
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

function getCat() {
  const randomNumber = Math.floor(Math.random() * 14);
  catCall(randomNumber);
}

function featuredCats() {
  for (let i = 0; i < 14; i++) {
    getCat();
  }
}

featuredCats();
// loadCats();
catList();
