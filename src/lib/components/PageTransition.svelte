<script>
	import { fade } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 200;
</script>

{#key url}
	<div in:fade={{ duration: pageTransitionDuration }}>
		<slot />
	</div>
{/key}
