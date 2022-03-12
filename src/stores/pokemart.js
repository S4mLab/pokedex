import { writable } from 'svelte/store';
import axios from 'axios';

export let pokemon = writable([]);

const fetchPokemons = async () => {
	const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=5';
	try {
		const response = await axios.get(pokemonsUrl);
		const rawPokeObjsList = await response.data.results;
	} catch (err) {
		console.error(err);
	}
};

fetchPokemons();
