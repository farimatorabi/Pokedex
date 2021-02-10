async function getAllPokemon() {
    let response = await fetch('pokemon.json');
    let data = await response.json();
    return data.slice(0, 100)
}

function getPokemonHtml(aPokomon) {
    return `
    <div class="a-pokemon">
        <div class='a-pokemon-id'>${aPokomon.id}</div>

        <div class="a-pokemon-name">${aPokomon.name.english}</div>
        <div class="a-pokemon-type">${aPokomon.type.join(' / ')}</div>

        <div class="a-pokemon-status">HP: ${aPokomon.base.HP}</div>
        <div class="a-pokemon-status">Attack: ${aPokomon.base.Attack}</div>
        <div class="a-pokemon-status">Defense: ${aPokomon.base.Defense}</div>
        <div class="a-pokemon-status">Speed: ${aPokomon.base.Speed}</div>

        <div class="a-pokemon-alt-name">${aPokomon.name.japanese}</div>
        <div class="a-pokemon-alt-name">${aPokomon.name.chinese}</div>
        <div class="a-pokemon-alt-name">${aPokomon.name.french}</div>
    </div>`
}


function displayPokedex(allPokemon) {
    document.body.innerHTML =  `<div class='my-pokedex'>
    ${allPokemon.map(aPokomon => getPokemonHtml(aPokomon)).join("")}
</div> `
}

getAllPokemon().then(displayPokedex)