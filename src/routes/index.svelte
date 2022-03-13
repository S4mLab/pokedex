<script>
	import { pokemonObjList } from '../stores/pokemart';
	import PokemonCard from '../components/PokemonCard.svelte';
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to sveltekit</h1>
{#each $pokemonObjList as { name, image }}
	<PokemonCard {name} {image} />
{/each}
