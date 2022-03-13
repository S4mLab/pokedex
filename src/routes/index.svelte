<script>
	import { pokemonObjList } from '../stores/pokemart';
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-3xl fond-bold underline">Welcome to sveltekit</h1>
{#each $pokemonObjList as pokemonObj}
	<p>{pokemonObj.name}</p>
{/each}
