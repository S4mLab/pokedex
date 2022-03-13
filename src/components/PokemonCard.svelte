<script>
	export let name = '';
	export let image = '';
</script>

<div>
	<p>{name}</p>
	<img src={image} alt={`${name} image`} />
</div>
