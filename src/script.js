//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
  document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

let pokemonAtual = 1;

async function buscarPokemon(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!response.ok) {
      throw new Error("Pokémon não encontrado");
    }
    const data = await response.json();
    changeText("name", `${data.name.toUpperCase()} #${data.id}`);
    changeImage("img_sprite_front_default", data.sprites.front_default || "assets/missingno.png");
}

// Função para buscar o Pokémon anterior
function previousPokemon() {
  if (pokemonAtual > 1) {
    pokemonAtual--;
    buscarPokemon(pokemonAtual);
  }
  console.log("Pokemon Anterior: ", pokemonAtual);
}

// Função para buscar o próximo Pokémon
function nextPokemon() {
  pokemonAtual++;
  buscarPokemon(pokemonAtual);
  console.log("Pokemon Seguinte: ", pokemonAtual);
}

document.addEventListener("DOMContentLoaded", () => {
  buscarPokemon(pokemonAtual);
});
