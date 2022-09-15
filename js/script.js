let resultList = $(".result-list");

pokemons.forEach(function(pokemon) {
  let newItem = createElement("li", "Pokemon-item list-unstyled w-25 mx-5 py-3 ps-5 rounded-3 mb-4", "");
  let newPokemonImg = createElement("img", "", "");
  newPokemonImg.src = pokemon.img;
  let newPokemonId = createElement("p", "fw-bold m-0", `Id: ${pokemon.id} `);
  let newPokemonName = createElement("h6","m-0 fw-bold", `Name: ${pokemon.name};`);
  let newPokemonEgg = createElement("p","m-0 fw-bold", `Egg : ${pokemon.egg};`);
  let nePokemonSpawn = createElement("p", "m-0 fw-bold" , `Spawn chance: ${pokemon.spawn_chance};`);

  newItem.append(newPokemonImg,newPokemonId,newPokemonName,newPokemonEgg,nePokemonSpawn);
  resultList.appendChild(newItem);

});



let type = $('.type-select'),
    typesArray = [];


pokemons.forEach((e) => {
    e.type.forEach((m) => {
        if (!typesArray.includes(m)) {
            typesArray.push(m)
        }
    })
})
typesArray.forEach((e) => {
    let opt = document.createElement('option');
    opt.innerHTML = e;
    type.appendChild(opt)
})





function findFilm(txt) {

  const filterFilm = pokemons.filter((item) => {
      return item.name.toLowerCase().trim().includes(txt)
  });

  console.log(filterFilm);
  renderFilm(filterFilm)

}

$('#search').addEventListener("input", () => {
  $(".result-list").innerHTML = ""
  const searchText = $('#search').value.trim().toLowerCase();
  const textRegex = new RegExp(searchText, 'gi');
  const result = searchText.match(textRegex);
  findFilm(result)
});



function renderFilm(newFilm) {
  newFilm.forEach(function(pokemon) {
    let newItem = createElement("li", "Pokemon-item list-unstyled w-25 mx-5 py-3 ps-5 rounded-3 mb-4", "");
    let newPokemonImg = createElement("img", "", "");
    newPokemonImg.src = pokemon.img;
    let newPokemonId = createElement("p", "fw-bold m-0", `Id: ${pokemon.id} `);
    let newPokemonName = createElement("h6","m-0 fw-bold", `Name: ${pokemon.name};`);
    let newPokemonEgg = createElement("p","m-0 fw-bold", `Egg : ${pokemon.egg};`);
    let nePokemonSpawn = createElement("p", "m-0 fw-bold" , `Spawn chance: ${pokemon.spawn_chance};`);
  
    newItem.append(newPokemonImg,newPokemonId,newPokemonName,newPokemonEgg,nePokemonSpawn);
    resultList.appendChild(newItem);
  
  });
}




