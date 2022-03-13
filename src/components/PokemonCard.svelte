<script>
	export let name = '';
	export let image = '';
	export let id;
</script>

<a
	href={`/pokemon/${id}`}
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<img class="h-40 w-40" src={image} alt={`${name} image`} />
	<h2 class="uppercase text-2">{name}</h2>
</a>
