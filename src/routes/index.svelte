<script>
	import { pokemonObjList } from '../stores/pokemart';
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1>Welcome to sveltekit</h1>
{#each $pokemonObjList as pokemonObj}
	<p>{pokemonObj.name}</p>
{/each}
