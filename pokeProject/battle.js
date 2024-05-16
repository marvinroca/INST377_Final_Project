document.getElementById('fetchPokemon').addEventListener('click', fetchPokemon);

async function fetchPokemon() {
    const pokemon1 = await getRandomPokemon();
    const pokemon2 = await getRandomPokemon();

    await displayPokemon(pokemon1, 'pokemon1');
    await displayPokemon(pokemon2, 'pokemon2');

    /* added new */
    const result = calculateBattleResult(pokemon1, pokemon2);
    await displayBattleResult(result, pokemon1, pokemon2);
    /* added new */
}
/* added new */
function calculateBattleResult(pokemon1, pokemon2) {
    const stats1 = calculateTotalStats(pokemon1);
    const stats2 = calculateTotalStats(pokemon2);

    // Calculate differences in stats
    const hpDifference = stats1.hp - stats2.hp;
    const attackDifference = stats1.attack - stats2.attack;
    const defenseDifference = stats1.defense - stats2.defense;

    // Determine the winner based on total stats
    if (hpDifference > 0 && attackDifference > 0 && defenseDifference > 0) {
        return {
            
            winner: 'pokemon1',
            message: 'Great battle!'
        };
    } else if (hpDifference < 0 && attackDifference < 0 && defenseDifference < 0) {
        return {
            winner: 'pokemon2',
            message: 'Great battle!'
        };
    } else {
        return {
            winner: 'tie',
            message: 'Both pokemon fought with all their might but it was a tie!'
        };
    }
}

function calculateTotalStats(pokemon) {
    // Calculate total stats
    const totalStats = pokemon.base_stamina + pokemon.base_attack + pokemon.base_defense;
    return {
        hp: pokemon.base_stamina,
        attack: pokemon.base_attack,
        defense: pokemon.base_defense,
        total: totalStats
    };
}

async function displayBattleResult(result, pokemon1, pokemon2) {
    const battleResultElement = document.getElementById('battleResult');
    battleResultElement.querySelector('h2').textContent = 'Battle Result';
    if (result.winner === 'tie') {
        battleResultElement.querySelector('p.name').textContent = 'It\'s a tie!';
    } else {
        const winnerPokemonName = result.winner === 'pokemon1' ? pokemon1.pokemon_name : pokemon2.pokemon_name;
        battleResultElement.querySelector('p.name').textContent = 'Winner: ' + winnerPokemonName;
    }
    battleResultElement.querySelector('p.type').textContent = result.message;
    // Hide image and stats
    battleResultElement.querySelector('img').style.display = 'block';
    battleResultElement.querySelectorAll('p span').forEach(span => {
        span.textContent = '';
    });
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

async function getPokemonImage(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const data = await response.json();
    return data.sprites.front_default;
}

async function displayPokemon(pokemon, elementId) {
    const element = document.getElementById(elementId);
    const imageUrl = await getPokemonImage(pokemon.pokemon_name);

    element.querySelector('img').src = imageUrl;
    element.querySelector('.name').textContent = pokemon.pokemon_name;
    element.querySelector('.type').textContent = pokemon.form;
    element.querySelector('.hp').textContent = pokemon.base_stamina;
    element.querySelector('.attack').textContent = pokemon.base_attack;
    element.querySelector('.defense').textContent = pokemon.base_defense;
}
