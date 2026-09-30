const typeMap = new Map([
    ['normal', 'burlywood'],
    ['fire', 'orangered'],
    ['water', 'skyblue'],
    ['grass', 'springgreen'],
    ['electric', 'gold'],
    ['ice', 'cyan'],
    ['fighting', 'chocolate'],
    ['poison', 'rebeccapurple'],
    ['ground', 'olivedrab'],
    ['flying', 'lavender'],
    ['psychic', 'violet'],
    ['bug', 'sienna'],
    ['rock', 'slategray'],
    ['ghost', 'black'],
    ['dragon', 'maroon'],
    ['dark', 'darkslategray'],
    ['steel', 'darkgray'],
    ['fairy', 'hotpink']
]);


const $ = id => document.getElementById(id);

const url = "https://pokeapi.co/api/v2/pokemon/";

let getPokeData = async( name="" ) => {
    let finalUrl;
    if (name == "") {
        let id = Math.floor(Math.random() * 1025 + 1);
        finalUrl = url + id;
    } else{
        finalUrl = url + name;
    }

    try{
        const response = await fetch(finalUrl);
        if (response.status == 404){
            throw new Error();
        }

        const data = await response.json();
        $('error').style.display = "none";

        // console.log(data);
        fillCard(data);
    } catch(err){
        $('error').style.display = "block";
    }
}


let fillCard = data => {
    const hp = data.stats[0].base_stat;
    const img = data.sprites.other['official-artwork'].front_default    // kotojel nem lehet attributumnevben de szogletes zarojelben lehet hivatkozni ra JSben
    let name = data.name;
    name = name[0].toUpperCase() + name.substring(1);
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;

    const types = data.types;

    $('hp').innerText = "HP: " + hp;
    $('img').src = img;
    $('name').innerText = name;
    $('attack').innerText = attack;
    $('defense').innerText = defense;
    $('speed').innerText = speed;

    appendTypes(types);
    styleCard(types[0].type.name)
}


let appendTypes = types => {
    $('types').innerHTML = "";
    for (let i = 0; i < types.length; i++) {
        let span = document.createElement('span');
        span.textContent = types[i].type.name;
        $('types').appendChild(span);
    }
}


let styleCard = type => {
    const color = typeMap.get(type);
    $('card').style.background = `radial-gradient(circle at 50% 0%, ${color} 38%, #fff 38%)`

    $('card').querySelectorAll("#types span").forEach(typeSpan => {
        typeSpan.style.backgroundColor = color;
    });
}


$('btn').addEventListener('click', getPokeData);
$('btn2').addEventListener('click', () => {
    const pokeName = $('poke-name').value;
    getPokeData(pokeName);
})