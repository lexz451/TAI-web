<script lang="ts">
	import { onMount } from 'svelte';

	let container: any;

	let top: number;
	let bottom: number;
	let height: number;

	onMount(() => {
		function handler() {
			const bcr = container.getBoundingClientRect();
			top = bcr.top;
			bottom = bcr.bottom;
			height = bcr.height;
		}

		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	});
</script>

<div bind:this={container}>
	<slot {top} {bottom} {height} />
</div>
