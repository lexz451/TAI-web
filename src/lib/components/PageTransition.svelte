<script>
	import { fade } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 300;
</script>

{#key url}
	<div in:fade={{ duration: pageTransitionDuration, delay: -100 }}>
		<slot />
	</div>
{/key}
