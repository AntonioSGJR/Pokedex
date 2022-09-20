const pokemonImage = document.querySelector('.pokemonImage');
const searchInput = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');
const searchForm = document.querySelector('.searchForm');
const pokemonID = document.querySelector('.pokemonID');
const pokemonName = document.querySelector('.pokemonName');
const URL = "http://localhost:8000/";

async function fetchPokemon(pokemon)
{
  console.log(pokemon);
  const response = await fetch(`${URL}pokemon/${pokemon}`);
  const data = await response.json();

  return data;
}

async function fetchPokemonSound(pokemon)
{
  const response = await fetch(`${URL}cry/${pokemon}`);
  const data =  await response.text();
  console.log(data);
  const result = data;
  console.log(result);
  return result;
}

async function playPokemonCry()
{
  const cryUrl = await fetchPokemonSound(pokemonID.innerHTML);
  const cry = new Audio(cryUrl);
  cry.type  = 'audio/mp3';

  try
  {
    await cry.play();
    console.log('playing...');
  }
  catch(error)
  {
    console.error(error);

  }
}

async function loadPokemonInfo(pokemon)
{
  const data = await fetchPokemon(pokemon);
  
  if(parseInt(data.id) > 649) 
    pokemonImage.src = data.sprites.front_default;
  else 
    pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
  
  if(data.id.toString().length === 1)
    pokemonID.innerHTML = `0${data.id}`;
  else
    pokemonID.innerHTML = data.id;

  pokemonName.innerHTML = data.name;
}

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await loadPokemonInfo(searchInput.value);
  searchForm.reset();
});

async function nextPokemon()
{
  await loadPokemonInfo(parseInt(pokemonID.innerHTML) + 1);
}

async function previousPokemon()
{
  await loadPokemonInfo(parseInt(pokemonID.innerHTML) - 1)
}



