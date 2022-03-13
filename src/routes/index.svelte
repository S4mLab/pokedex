<script>
	import { pokemonObjList } from '../stores/pokemart';
	import PokemonCard from '../components/PokemonCard.svelte';
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Welcome to Pokemon Codex</h1>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each $pokemonObjList as { name, image, id }}
		<PokemonCard {name} {image} {id} />
	{/each}
</div>
