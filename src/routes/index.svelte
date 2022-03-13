<script>
	import { pokemonObjList } from '../stores/pokemart';
	import PokemonCard from '../components/PokemonCard.svelte';

	let userInput = '';
	let filteredPokemons = [];

	$: {
		console.log(userInput);
		if (userInput) {
			// search the pokemon
			filteredPokemons = $pokemonObjList.filter((pokemonObj) => {
				let lowercasedPoke = pokemonObj.name.toLowerCase();
				lowercasedPoke.includes(userInput.toLowerCase());
			});
		} else {
			// if there is no input from user, output all pokemon
			filteredPokemons = [...$pokemonObjList];
		}
	}
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Welcome to Pokemon Codex</h1>

<input
	type="text"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	placeholder="Search Pokemon"
	bind:value={userInput}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemons as { name, image, id }}
		<PokemonCard {name} {image} {id} />
	{/each}
</div>
