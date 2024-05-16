document.getElementById('fetchPokemon').addEventListener('click', fetchPokemon);

async function fetchPokemon() {
    const pokemon1 = await getRandomPokemon();
    const pokemon2 = await getRandomPokemon();

    displayPokemon(pokemon1, 'pokemon1');
    displayPokemon(pokemon2, 'pokemon2');
}

async function getRandomPokemon() {
    const response = await fetch("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
            "x-rapidapi-key": "0b12cf43f4msh60435374d3b7653p192aa4jsn24c46470a1aa"
        }
    });
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

function displayPokemon(pokemon, elementId) {
    const element = document.getElementById(elementId);
    element.querySelector('.name').textContent = pokemon.pokemon_name;
    element.querySelector('.type').textContent = pokemon.form;
    element.querySelector('.hp').textContent = pokemon.base_stamina;
    element.querySelector('.attack').textContent = pokemon.base_attack;
    element.querySelector('.defense').textContent = pokemon.base_defense;
    element.querySelector('.special-attack').textContent = "N/A"; // Placeholder if not available
    element.querySelector('.special-defense').textContent = "N/A"; // Placeholder if not available
    element.querySelector('.speed').textContent = "N/A"; // Placeholder if not available
    // Add image URL if available in the API data
}
