function searchPokemon() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            const pokemonInfo = document.getElementById('pokemonInfo');
            pokemonInfo.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Type: ${data.types.map(type => type.type.name).join(', ')}</p>
                <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <p>Height: ${data.height / 10} m</p>
                <p>Weight: ${data.weight / 10} kg</p>
            `;
        })
        .catch(error => {
            console.log('Error:', error);
            alert('Pokemon not found!');
        });
}

function getRandomPokemon() {
    const randomID = Math.floor(Math.random() * 898) + 1; // There are 898 Pokemon in total
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
        .then(response => response.json())
        .then(data => {
            const randomPokemonImg = document.getElementById('randomPokemonImg');
            randomPokemonImg.src = data.sprites.front_default;

            // Set Pokemon of the day
            const pokemonOfDay = document.getElementById('pokemonOfDay');
            pokemonOfDay.textContent = data.name.toUpperCase();
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function getRandomAttack() {
    fetch('https://pokeapi.co/api/v2/move?limit=1000')
        .then(response => response.json())
        .then(data => {
            const randomAttack = document.getElementById('attackOfDay');
            const randomIndex = Math.floor(Math.random() * data.results.length);
            randomAttack.textContent = data.results[randomIndex].name;

            // Get Pokemon using the attack
            fetch(`https://pokeapi.co/api/v2/move/${data.results[randomIndex].name}`)
                .then(response => response.json())
                .then(data => {
                    const pokemonUsingAttack = document.getElementById('pokemonUsingAttack');
                    pokemonUsingAttack.textContent = data.pokemon.map(pokemon => pokemon.pokemon.name).join(', ');
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// On page load
window.onload = function() {
    getRandomPokemon();
    getRandomAttack();
};