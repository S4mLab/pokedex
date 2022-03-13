import { writable } from 'svelte/store';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const pokemonObjList = writable([]);

const fetchPokemons = async () => {
	const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=5';
	try {
		const response = await axios.get(pokemonsUrl);
		const rawPokeObjsList = await response.data.results;
		const processedPokeObjsList = rawPokeObjsList.map((pokemonObj, index) => {
			return {
				name: pokemonObj.name,
				id: uuidv4(),
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});
		pokemonObjList.set(processedPokeObjsList);
	} catch (err) {
		console.error(err);
	}
	console.log(pokemonObjList);
};

fetchPokemons();
