<script lang="ts">
import Image from "./Image.svelte";

	export let item: any;
</script>

<a href={item?.url} class="resource-item">
	<Image image={item?.image} width classes="image" />
	<h5 class="text-h5 mb-0 mt-3 text-dark">{item?.title}</h5>
	<p>
		{item?.summary}
	</p>
</a>

<style>
	:global(.resource-item .image) {
		width: 100%;
		height: 175px;
		object-fit: cover;
		object-position: center;
	}
	.resource-item p {
		color: #666;
	}
</style>
